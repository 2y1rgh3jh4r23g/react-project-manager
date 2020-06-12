import React from "react";
import { v4 as uuidv4 } from "uuid";

import Projects from "./components/Projects";
import AddProject from "./components/AddProject";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    this.setState({
      projects: [
        {
          id: uuidv4(),
          title: "Business Website",
          category: "Web Design",
        },
        {
          id: uuidv4(),
          title: "Social App",
          category: "Mobile Development",
        },
        {
          id: uuidv4(),
          title: "Ecommerce Shopping Cart",
          category: "Web Development",
        },
      ],
    });
  }

  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({
      projects: projects,
    });
    //console.log(project);
  }

  render() {
    return (
      <div className='App'>
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
