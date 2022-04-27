import React from "react";
import "./style.css";

export default class VideoDetails extends React.Component {
   constructor(props) {
      super(props);
      this.state = {};
   }

   render() {
      let snip = this.props.data.snippet;
      return (
         <div
            key={this.props.data.id.videoId}
            className="item"
            style={{
               display: "grid",
               gridTemplateRows: "1fr auto",
               alignItems: "start",
               justifyItems: "start",
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
                  <h3 className="videoTitle">{snip.title}</h3>
                  <div style={{ lineHeight: "1.1" }}>
                     <p className="channelName" style={{ fontSize: "1.4rem" }}>
                        {snip.channelTitle}
                     </p>
                     {/* <p className="views">1000 views</p>
                     <p className="uploadTime">1 year ago</p> */}
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
