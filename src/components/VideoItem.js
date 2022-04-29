import React from "react";
import "./VideoItem.css";

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
         <div onClick={this.getIdClick} className="item">
            <img className="videoImg" src={snip.thumbnails.medium.url} />
            <div className="videoText">
               <img className="channelLogo" src="" />
               <div className="videoText-right">
                  <a className="videoTitle">{snip.title}</a>
                  <div className="channelnameStat">
                     <p className="channelName">{snip.channelTitle}</p>
                     <p className="views">1000 views</p>
                     <p className="uploadTime">{snip.publishTime}</p>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
