import React, { Component } from "react";
import { ReactComponent as Logo } from "../Assets/imme icon-02.svg";

export default class Success extends Component {
  render() {
    return (
      <>
        <h3>Successfully Logged In</h3>
        {Object.keys(this.props.userData).map((obj, i) => {
          return (
            <h4 className="text-center">
              {obj}: {this.props.userData[obj]}
            </h4>
          );
        })}
        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-primary"
            style={{ backgroundColor: "orange", borderColor: "orange" }}
            onClick={this.props.logout()}
          >
            {" "}
            <Logo style={{ width: "20px", marginRight: "20px" }} />
            Sign Out With Imme
          </button>
        </div>
      </>
    );
  }
}
