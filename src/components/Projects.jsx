// import React from 'react'

// function Projects() {
//   const projects = [
//     {
//       name: "crud operations using json server",
//       description: "i have created the crud operations using json serverver as backend and reactjs in frontend",
//       technologies: "reactjs,css,bootstrap,json-server,",
//       link: "https://json-crud-authentication-frontend.onrender.com",
//     },
//     {
//       name: "online book store using json server",
//       description: "i have created the online bookstore website using json serverver as backend and reactjs in frontend",
//       technologies: "reactjs,css,bootstrap,json-server,",
//       link: "https://json-server-book-store-frontend.onrender.com",
//     },
//   ]
//   return (
//     <div className='projects'>
//       <h1>Projects</h1>
//       {
//         projects.map((project, index) => (
//           <div key={index} className="project-card">
//             <h2>{project.name}</h2>
//             <p>{project.description}</p>
//             <p><strong>Technologies Used: </strong>{project.technologies}</p>
//             <a href={project.link} target="_blank" rel='noopener noreferrer'>Project Link</a>
//           </div>
//         ))}
//     </div>
//   )
// }

// export default Projects



import React from "react";

function Projects() {
  const projects = [
    {
      name: "CRUD Operations using JSON Server",
      description:
        "Created CRUD operations with JSON Server as the backend and ReactJS in the frontend.",
      technologies: "ReactJS, CSS, Bootstrap, JSON-Server",
      link: "https://json-crud-authentication-frontend.onrender.com",
    }
  ];

  return (
    <div className="projects">
      <h1>Projects</h1>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <p>
            <strong>Technologies Used: </strong>
            {project.technologies}
          </p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            Project Link
          </a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
