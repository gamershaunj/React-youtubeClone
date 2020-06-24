import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component{
  state = { term: ''}

  onInputChange = (e) => {
    this.setState({term : e.target.value});

  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.parentCallback(this.state.term)
  }


  render(){
    return(
      <div>
        <form onSubmit={this.onFormSubmit} className="search-bar ui form">
          <div className="field">
            <label> Video Search</label>
            <input onChange={this.onInputChange} type="text" />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;
