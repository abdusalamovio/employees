import "./empAddForm.css";
import React from "react";

class EmpAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.name.length < 3 || !this.state.salary) return;
    this.props.onAdd(this.state.name, this.state.salary);
    this.setState({
      name: "",
      salary: "",
    });
  };

  render() {
    const { name, salary } = this.state;
    return (
      <div className="empAddForm">
        <h3>Добавьте нового сотрудника</h3>
        <form onSubmit={this.onSubmit}>
          <input
            onChange={this.onValueChange}
            value={name}
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            name="name"
            type="text"
          />
          <input
            onChange={this.onValueChange}
            value={salary}
            className="form-control new-post-label"
            placeholder="З/П в $?"
            name="salary"
            type="number"
          />
          <button className="btn btn-outline-light" type="submit">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmpAddForm;
