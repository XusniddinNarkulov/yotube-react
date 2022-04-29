import React, { Component } from "react";
import "./LeftBar.css";

export default class LeftBar extends Component {
   render() {
      return (
         <div className="left-bar">
            <i class="bars icon"></i>
            <div className="child">
               <i class="home icon"></i>
               <b>Home</b>
            </div>
            <div className="child">
               <i class="compass outline icon"></i>
               <b>Explore</b>
            </div>
            <div className="child">
               <i class="youtube icon"></i>
               <b>Shorts</b>
            </div>
            <div className="child">
               <i class="youtube icon"></i>
               <b>Subscriptions</b>
            </div>
            <div className="child">
               <i class="youtube icon"></i>
               <b>Library</b>
            </div>
         </div>
      );
   }
}
