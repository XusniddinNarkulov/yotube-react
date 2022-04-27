import React from "react";
import "./style.css";
import axios from "axios";
import Search from "./Search";
import VideoList from "./VIdeoList";

export default class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = { dataArr: [] };
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

   render() {
      return (
         <div>
            <Search getSearchVal={this.getData} />
            <VideoList data={this.state.dataArr} />
         </div>
      );
   }
}
