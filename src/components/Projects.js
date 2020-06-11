import React from "react";
import ProjectItem from "./ProjectItem";

class Projects extends React.Component {
  render() {
    let projectItems;
    if (this.props.projects) {
      projectItems = this.props.projects.map((project) => {
        //console.log(project);
        return <ProjectItem key={project.title} project={project} />;
      });
    }
    return <div className='projects'>{projectItems}</div>;
  }
}

export default Projects;
