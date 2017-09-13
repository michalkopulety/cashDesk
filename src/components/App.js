import React from "react";
import "../stylesheets/main.scss";
import Menu from "./Menu.js"

// app component
export default class App extends React.Component {
  // render
  render() {
    const {users, children} = this.props;
    return (
      <div className="container">
        <Menu/>
        {children}
      </div>
    );
  }
}
