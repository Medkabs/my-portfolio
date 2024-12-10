import React, { useState } from 'react';

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Data for each project
  const projects = {
    project1: {
      img: [
        `${process.env.PUBLIC_URL}/images/inventoryapp.png`, // First image
        `${process.env.PUBLIC_URL}/images/inventoryapp2.png`, // Second image
      ],
      description:
        'This project is a React application designed to display the inventory of an online store. It dynamically renders a list of products, each showing its SKU, Name, Quantity, and Price. The app is organized into reusable React components and uses a JSON file to manage inventory data. This enhanced version allows store staff and customers to view a comprehensive list of products and detailed pages for each item.',
    },
    project2: {
      img: `${process.env.PUBLIC_URL}/images/countryapp.png`, // Replace with actual image path
      description:
        'This project demonstrates a Country Management System written in TypeScript and HTML. It provides sample data for various countries using the defined classes. Implements a function to filter snowy countries from the list, calculates the total annual snow level, and renders details to the HTML page.',
    },
    project3: {
      img: `${process.env.PUBLIC_URL}/images/dragdropapp.png`, // Replace with actual image path
      description:
        'This web application allows users to drag items and categorize them into specific drop zones (Fruits and Vegetables). The items are fetched dynamically from a JSON file via an API, and users can drag and drop them into appropriate categories.',
    },
    project4: {
      img: `${process.env.PUBLIC_URL}/images/pythonapp.png`, // Replace with actual image path
      description:
        'Choordinator is a Python application designed to assist in task allocation within a group. It prompts users to input a list of chores and individuals, along with a desired countdown timer duration. The program then randomly assigns chores to individuals and writes the data output to a text file.',
    },
  };

  // Handle button click
  const handleClick = (project) => {
    setSelectedProject(projects[project]); // Set the clicked project data
  };

  return (
    <div className="portfolio">
      <h1> 💡 My Projects </h1>

      {/* Project Buttons */}
      <div className="projects">
        {Object.keys(projects).map((project) => (
          <button
            key={project}
            className="project-button"
            onClick={() => handleClick(project)}
          >
            {`Project ${project.replace('project', '')}`}
          </button>
        ))}
      </div>

      {/* Display Selected Project */}
      {selectedProject && (
        <div className="project-display">
          {/* Render multiple images if img is an array */}
          {Array.isArray(selectedProject.img) ? (
            selectedProject.img.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Project Preview ${index + 1}`}
                className="project-image"
              />
            ))
          ) : (
            <img
              src={selectedProject.img}
              alt="Project Preview"
              className="project-image"
            />
          )}
          <p className="project-description">{selectedProject.description}</p>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
