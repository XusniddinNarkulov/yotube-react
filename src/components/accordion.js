import React from "react";
import "./accordion.css";

const data = [
   { savol: "What is React?", javob: "React" },
   { savol: "What is Redux?", javob: "Redux" },
   { savol: "What is JS?", javob: "JavaScript" },
];

export default class Accordion extends React.Component {
   constructor(props) {
      super(props);
      this.state = { index: "" };
   }

   getIndex = (key) => {
      this.setState({ index: key });
   };

   renderData = () => {
      return data.map((val, key) => {
         let active = "hidden";
         if (this.state.index === key) {
            active = "visible";
         }

         return (
            <div
               className="child"
               onClick={() => {
                  return this.getIndex();
               }}
            >
               <div className="raqam">{key + 1}</div>
               <div className="savol">{val.savol}</div>
               <div className={"javob " + active}>{val.javob}</div>
            </div>
         );
      });
   };

   render() {
      return <div className="container">{this.renderData()}</div>;
   }
}
