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

  render() {
    const { name, salary } = this.state;
    return (
      <div className="empAddForm">
        <h3>Добавьте нового сотрудника</h3>
        <form>
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
