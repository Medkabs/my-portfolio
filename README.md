### Contact
Mohamed Kaba
mohamedkaba0629@gmail.com
### URL 
http://Medkabs.github.io/my-portfolio
https://github.com/Medkabs/my-portfolio

My Portfolio with Matrix Effect
Welcome to my personal portfolio website, featuring a Matrix-style background effect with cascading green characters, just like the iconic "Matrix" movie. This app is built using React and includes several pages to showcase my biography, interests, resume, portfolio, gallery, and contact form.
### Tech
### Features
Matrix Background Effect: A dynamic background that simulates the falling code from the Matrix movie using HTML5 <canvas>.
Responsive Design: The app is fully responsive and adapts to different screen sizes using CSS.
Monospace Font: The entire website uses a monospace font to match the Matrix theme.
Multiple Pages: Includes various sections such as:
Home
Biography
Interests
Resume
Portfolio
Gallery
Contact
### Technologies Used
React: The app is built using React to manage the UI components.
CSS3: Custom styles for layout, responsiveness, and animations.
Canvas API: Used to create the Matrix-style falling numbers effect.
React Router: To handle page navigation between different sections of the portfolio.
JavaScript (ES6+): For all dynamic features, including the Matrix animation.
### Installation
To run this app locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/portfolio-matrix.git
cd portfolio-matrix
Install the dependencies:

bash
Copy code
npm install
Start the app:

bash
Copy code
npm start
Open your browser and go to http://localhost:3000 to view the app.

### Running in Production
To build the app for production:

bash
Copy code
npm run build
This will create an optimized production build in the build/ folder. You can then serve the app with any static server or deploy it to services like Netlify, Vercel, or GitHub Pages.

### Structure of the App
src/: Contains all the source code for the app.

components/: Reusable React components, including MatrixBackground.js for the Matrix effect and Navbar.js for the navigation bar.
pages/: Contains individual page components like Home.js, Biography.js, Resume.js, etc.
App.js: Main component that renders the app structure and routes.
App.css: Global styles for the app, including the Matrix effect and responsive layout.
public/: Static assets like images and the index.html file.

index.html: The main HTML file where React injects the app.
matrix-background.jpg: Placeholder image for the portfolio's gallery.
Design and Development
This project was developed as a personal portfolio with a Matrix-inspired theme to showcase my skills, interests, and projects. The design aims to reflect a modern, tech-savvy aesthetic that’s clean, simple, and user-friendly.

The Matrix background effect was implemented using the HTML5 Canvas API with JavaScript to simulate the falling green characters. The entire app is built with React to demonstrate modern frontend web development practices, including component-based architecture and dynamic rendering.

### Web Testing:

### Safari browser: 
- Red pill are showing grey instead of red
- Projects in portfolio page are listed in a column on the right side of the page

### Phones:

The pdf preview on Resume page does not show on phones or smaller screens. 

### Above and Beyond: 
- Drag and Drop
- Flex Grid
- CSS Media and Queries


