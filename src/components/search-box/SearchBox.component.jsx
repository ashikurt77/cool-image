import React from "react";
import "./SearchBox.style.scss";

class SearchBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: ""
    };
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ searchQuery: value });
  };

  render() {
    return (
      <div className="row justify-content-sm-center justify-content-xs-center">
        <div className="col-8">
          <div>
            <h1 className="title">cool images</h1>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search Wallpaper"
                onChange={this.handleChange}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() =>
                    this.props.handleSearch(this.state.searchQuery)
                  }
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBox;
