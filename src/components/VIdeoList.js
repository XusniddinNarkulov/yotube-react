import React from "react";
import "./style.css";
import VideoItem from "./VideoItem";

export default class VideoList extends React.Component {
   constructor(props) {
      super(props);
      this.state = {};
   }

   listRender = () => {
      return this.props.data.map((val) => {
         return <VideoItem func={this.props.videoIdFunc} key={val.id.videoId} data={val} />;
      });
   };

   render() {
      return (
         <div
            className="videoList"
            style={
               {
                  // width: "60%",
                  // margin: "0 auto",
                  // display: "grid",
                  // gridTemplateColumns: "repeat(autofit, minmax(200px, 1fr))",
                  // justifyContent: "center",
                  // gap: "2%",
               }
            }
         >
            {this.listRender()}
         </div>
      );
   }
}
