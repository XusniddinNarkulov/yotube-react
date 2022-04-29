import React from "react";
import "./VideoDetail.css";

export default class VideoDetail extends React.Component {
   constructor(props) {
      super(props);
      this.state = {};
   }

   render() {
      return (
         <div>
            <iframe
               width="560"
               height="315"
               src={"https://www.youtube.com/embed/" + this.props.videoId}
               title="YouTube video player"
               frameborder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowfullscreen
            ></iframe>
         </div>
      );
   }
}
