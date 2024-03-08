import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../../portfolioData.json";

const Work = () => {
  return (
    <div>
      <h1>Work Page</h1>
      {projects.map((project) => {
        return <ProjectCard projectData={project} />;
      })}
    </div>
  );
};

export default Work;
