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
        { name: "John C.", salary: 800, increase: false, rise: true, id: 0 },
        { name: "Alex M.", salary: 3000, increase: true, rise: false, id: 1 },
        { name: "Carl W.", salary: 5000, increase: false, rise: false, id: 2 },
      ],
    };
    this.maxId = 3;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return { data: data.filter((item) => item.id !== id) };
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArray = [...data, newItem];
      return { data: newArray };
    });
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  render() {
    const employees = this.state.data.length;
    const increased = this.state.data.filter((item) => item.increase).length;

    return (
      <div className="app">
        <EmpInfo employees={employees} increased={increased} />
        <div className="empSearch">
          <EmpSearch />
          <EmpFilter />
        </div>
        <EmpList
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmpAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
