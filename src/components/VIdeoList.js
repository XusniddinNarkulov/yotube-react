import React from "react";
// import "./VideoList.css";
import VideoItem from "./VideoItem";

export default class VideoList extends React.Component {
   constructor(props) {
      super(props);
      this.state = {};
   }

   listRender = () => {
      return this.props.data.map((val) => {
         return (
            <VideoItem
               func={this.props.videoIdFunc}
               key={val.id.videoId}
               data={val}
            />
         );
      });
   };

   render() {
      return <div className="videoList">{this.listRender()}</div>;
   }
}
