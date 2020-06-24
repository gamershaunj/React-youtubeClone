import React from "react";
import SearchBar from "./SearchBar";
import getResponse from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";


class App extends React.Component{
  state = { videos: [], selectedVideo: null}

  componentDidMount(){
      getResponse('semantic ui')
      .then(response=>{
        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0]})
      })

  }

  childCallback = async (term) => {

    getResponse(term)
    .then(response=>{
        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0]})
    })
  }

  onVideoSelectCallback = (video) =>{
    this.setState({ selectedVideo: video});
  }

  render(){
    return(
      <div className="ui container">
        <SearchBar parentCallback={this.childCallback}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
              videos={this.state.videos}
              onVideoSelect = {this.onVideoSelectCallback} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
