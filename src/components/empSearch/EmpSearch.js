import "./empSearch.css";
import React from "react";

class EmpSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }

  onUpdateSearch = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onUpdateSearch(term);
  };

  render() {
    return (
      <input
        onChange={this.onUpdateSearch}
        value={this.state.term}
        className="form-control search-input"
        placeholder="Найти сотрудника"
        type="text"
      />
    );
  }
}

export default EmpSearch;
