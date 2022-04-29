import React from "react";
// import "./App.css";
import axios from "axios";
import Search from "./Search";
import VideoList from "./VIdeoList";
import VideoDetail from "./VideoDetail";
import LeftBar from "./LeftBar";

import Accordion from "./accordion";

export default class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = { dataArr: [], videoID: "" };
   }

   getVideoId = (id) => {
      this.setState({ videoID: id });
   };

   componentDidUpdate() {
      console.log(this.state.videoID);
   }

   getData = async (inputVal) => {
      const data = await axios("https://www.googleapis.com/youtube/v3/search", {
         params: {
            part: "snippet",
            type: "video",
            maxResults: 5,
            key: "AIzaSyBmDL0NCyq2ZBYwgVLLOWQqAk-CcvrPUXQ",
            q: inputVal,
         },
      });
      console.log(data);
      this.setState({ dataArr: data.data.items });
   };

   showVideo = () => {
      if (this.state.videoID) {
         return <VideoDetail videoId={this.state.videoID} />;
      }
   };

   render() {
      return (
         <div>
            <div
               style={{
                  display: "flex",
                  position: "fixed",
                  top: "0",
                  left: "0",
               }}
            >
               <LeftBar></LeftBar>
               <Search getSearchVal={this.getData} />
            </div>

            {this.showVideo()}
            <VideoList
               data={this.state.dataArr}
               videoIdFunc={this.getVideoId}
            />
            <Accordion />
         </div>
      );
   }
}
