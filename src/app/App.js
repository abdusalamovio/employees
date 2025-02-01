import EmpInfo from "../components/empInfo/EmpInfo";
import EmpSearch from "../components/empSearch/EmpSearch";
import EmpFilter from "../components/empFilter/EmpFilter";
import EmpList from "../components/empList/EmpList";
import EmpAddForm from "../components/empAddForm/EmpAddForm";

import "./app.css";

import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "John C.", salary: 800, increase: false, id: 0 },
        { name: "Alex M.", salary: 3000, increase: true, id: 1 },
        { name: "Carl W.", salary: 5000, increase: false, id: 2 },
      ],
    };
    this.maxId = 3;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArray = [...data, newItem];
      return {
        data: newArray,
      };
    });
  };

  render() {
    return (
      <div className="app">
        <EmpInfo />
        <div className="empSearch">
          <EmpSearch />
          <EmpFilter />
        </div>
        <EmpList data={this.state.data} onDelete={this.deleteItem} />
        <EmpAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
