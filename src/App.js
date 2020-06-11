import React from "react";
import Projects from "./components/Projects";

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
          title: "Business Website",
          category: "Web Design",
        },
        {
          title: "Social App",
          category: "Mobile Development",
        },
        {
          title: "Ecommerce Shopping Cart",
          category: "Web Development",
        },
      ],
    });
  }

  render() {
    return (
      <div className='App'>
        My App
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
