import React, { useState } from "react";

const ProjectCard = ({ projectData }) => {
  const { title, ghLink, deployedLink } = projectData;

  const styles = {
    backgroundColor: "red",
  };

  return (
    <div>
      <div className="border border-success" style={styles}>
        Title: {title}
      </div>
      <a href={ghLink} target="_blank">
        github Link
      </a>
      <a href={deployedLink} target="_blank">
        github Link
      </a>
    </div>
  );
};

export default ProjectCard;
