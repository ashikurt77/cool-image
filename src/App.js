import React from "react";
import { toJson } from "unsplash-js";
import "./App.css";
import SearchBox from "./components/search-box/SearchBox.component";
import ImageArea from "./components/image-area/ImageArea.component";
import Splash from "./unsplash/unsplash";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      queryString: "",
      imageList: []
    };
  }

  getImage = async () => {
    const { queryString } = this.state;
    await Splash.search
      .photos(queryString, 1, 30)
      .then(toJson)
      .then(json => {
        this.setState({ imageList: json.results });
      });
  };

  handleSearch = searchQuery => {
    this.setState({ queryString: searchQuery }, () => this.getImage());
  };

  render() {
    const { imageList } = this.state;
    return (
      <div className="App">
        <SearchBox handleSearch={this.handleSearch} />
        <section className="gallery">
          <div className="container">
            <ImageArea imageList={imageList} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
