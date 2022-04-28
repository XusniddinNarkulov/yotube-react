import React from "react";
import "./style.css";

export default class VideoItem extends React.Component {
   constructor(props) {
      super(props);
      this.state = { videoID: props.data.id.videoId };
   }

   getIdClick = () => {
      // this.setState({ videoID: this.props.data.id.videoId });
      this.props.func(this.props.data.id.videoId);
   };

   render() {
      let snip = this.props.data.snippet;
      return (
         <div
            onClick={this.getIdClick}
            className="item"
            style={{
               display: "grid",
               gridTemplateRows: "1fr auto",
               alignItems: "start",
               justifyItems: "start",
               cursor: "pointer",
            }}
         >
            <img
               className="videoImg"
               src={snip.thumbnails.default.url}
               style={{ width: "100%" }}
            />
            <div style={{ display: "flex" }}>
               <img className="channelLogo" src="" />
               <div style={{ padding: "5%" }}>
                  <a className="videoTitle" style={{ color: "purple" }}>
                     {snip.title}
                  </a>
                  <div style={{ lineHeight: "1.1" }}>
                     <p className="channelName" style={{ fontSize: "1.4rem" }}>
                        {snip.channelTitle}
                     </p>
                     {/* <p className="views">1000 views</p> */}
                     <p className="uploadTime">{snip.publishTime}</p>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
