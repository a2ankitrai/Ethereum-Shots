import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCC2NU9yUiG7HBVgkL41lH3s3B0sF2jXzs';



 // Create a component. This component should produce some HTML

 // const App = () => {
 //   return (
 //     <div>
 //      <SearchBar />
 //     </div>
 //   );
 // }

 class App extends Component {

   constructor(props) {
     super(props);

     this.state = {
       videos: [],
       selectedVideo : null
     };

     this.videoSearch('crypto');
   }

   videoSearch(term) {
     YTSearch({key: API_KEY, term: term}, (videos) => {
       console.log(videos);
       this.setState({
         videos: videos,
         selectedVideo: videos[0]
       })
       // the above is ES6 syntax when key and value both share the same variable name
       // this.setState({videos : videos})
     });
   }

   render(){

     const videoSearch = _.debounce(term => { this.videoSearch(term) }, 300);

     return (
       <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos}
        />
       </div>
     );
   }

 }

 // Take this component's generated HTML and put it on the page.
ReactDOM.render(<App />, document.querySelector('.container'));
