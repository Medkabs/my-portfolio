import React from 'react';

function Resume() {
  return (
    <div className="resume">
      <h1>My Resume</h1>
      <p>
        I am Mohamed Kaba, a versatile professional pursuing a Master's degree in 
        Computer Science from Boston University. With a passion for technology 
        and a knack for building relationships, I have honed my skills in 
        various domains over the years. My experience spans from sales and
        account management to leadership and volunteer work. I've excelled in
        roles at Avid Technology, MNA Management Consulting, and Allied 
        Communications Corp., where I successfully managed client 
        relationships, exceeded sales targets, and led teams. Beyond my
        professional endeavors, I've served in the US Army National Guard,
        contributing to national security. I've also volunteered with Making
        Strides Against Breast Cancer and currently mentor aspiring college
        students.

        With a strong foundation in technology, including proficiency in Python, SQL, JAVA, and other programming languages, I am eager to apply my skills and experience to new challenges.
      </p>
      <p>
        Download my resume: <a href={`${process.env.PUBLIC_URL}/images/MK-SD.pdf`} download>Download Resume</a>
      </p>

      <h2>Language Experience</h2>
      <ul>
        <li>[HTML]</li>
        <li>[JavaScript]</li>
        <li>[TypeScript]</li>
        <li>[CSS]</li>
        <li>[Python]</li>
        <li>[SQL]</li>
      </ul>

      {/* Embed the PDF file here */}
      <h2>My Resume (Preview)</h2>
      <object className="pdf" 
              data={`${process.env.PUBLIC_URL}/images/MK-SD.pdf`}
              width="1200px"
              height="500">
      </object>
    </div>
  );
}

export default Resume;
