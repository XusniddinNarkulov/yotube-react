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
      this.state = { dataArr: [], videoID: "", data: "" };
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
            maxResults: 15,
            key: "AIzaSyBmDL0NCyq2ZBYwgVLLOWQqAk-CcvrPUXQ",
            q: inputVal,
         },
      });
      console.log(data);
      this.setState({ dataArr: data.data.items });
      this.setState({ data: data });
   };

   showVideo = () => {
      if (this.state.videoID) {
         return (
            <VideoDetail videoId={this.state.videoID} data={this.state.data} />
         );
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
               <LeftBar />
               <div>
                  <Search getSearchVal={this.getData} />
                  <div
                     style={{
                        position: "absolute",
                        padding: "2%",
                        display: "flex",
                        gap: "3%",
                        overflowY: "scroll",
                        backgroundColor: "#f0f0f0",
                        height: "95%",
                        width: "98%",
                     }}
                  >
                     {this.showVideo()}
                     <VideoList
                        data={this.state.dataArr}
                        videoIdFunc={this.getVideoId}
                     />
                  </div>
               </div>
            </div>

            {/* <Accordion /> */}
         </div>
      );
   }
}
