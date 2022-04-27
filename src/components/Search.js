import { logDOM } from "@testing-library/react";
import React from "react";
import "./style.css";

export default class Search extends React.Component {
   constructor(props) {
      super(props);
      this.state = { inputVal: "" };
   }

   inputValue = (e) => {
      //   e.preventDefault();
      this.setState({ inputVal: e.target.value });
   };

   formOnSubmit = (e) => {
      e.preventDefault();
      this.props.getSearchVal(this.state.inputVal);
   };

   render() {
      return (
         <form
            onSubmit={this.formOnSubmit}
            className="ui category search"
            style={{ margin: "1% auto", width: "60%" }}
         >
            <div className="ui icon input" style={{ width: "100%" }}>
               <input
                  onChange={this.inputValue}
                  className="prompt"
                  type="text"
                  placeholder="Search..."
               />
               <i className="search icon" style={{ cursor: "pointer" }}></i>
            </div>
            <div className="results"></div>
         </form>
      );
   }
}
