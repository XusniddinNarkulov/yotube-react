import { logDOM } from "@testing-library/react";
import React from "react";
import "./Search.css";

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
         <div className="top-bar">
            <div className="top-bar__left">
               <i class="youtube icon"></i>
               <b>YouTube</b>
            </div>
            <form onSubmit={this.formOnSubmit} className="ui category search">
               <div className="ui icon input">
                  <input
                     onChange={this.inputValue}
                     className="prompt"
                     type="text"
                     placeholder="Search..."
                  />
                  <i className="search icon"></i>
               </div>
               <i class="microphone icon"></i>
               <div className="results"></div>
            </form>
            <div className="top-bar__right">
               <i class="video icon"></i>
               <i class="th icon"></i>
               <i class="bell outline icon"></i>
            </div>
         </div>
      );
   }
}
