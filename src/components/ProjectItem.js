import React from "react";

class ProjectItem extends React.Component {
  render() {
    return (
      <li className='project'>
        <strong>{this.props.project.title}</strong>:{" "}
        {this.props.project.category}
      </li>
    );
  }
}

export default ProjectItem;
