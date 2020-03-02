import React from "react";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import ContadorComBug from "./components/ContadorComBug";
import MyErrorComponent from "./components/MyErrorComponent";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("Hello from constructor");
    this.state = {
      counter: 0
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("Hello from before rendering");
    return { ...prevState, ...nextProps };
  }

  componentDidMount() {
    console.log("Hello from after mounting");
  }

  render() {
    console.log(this.state);
    console.log("Hello from render");
    return (
      <div>
        <h2>Seja bem vindo!</h2>
        <ErrorBoundary>
          <ContadorComBug />
        </ErrorBoundary>
        
        <MyErrorComponent />
      </div>
    );
  }
}
