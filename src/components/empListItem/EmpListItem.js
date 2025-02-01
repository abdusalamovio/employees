import "./empListItem.css";
import React from "react";

class EmpListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false,
      rise: false,
    };
  }

  onIncrease = () => {
    this.setState(({ increase }) => ({
      increase: !increase,
    }));
  };

  onRise = () => {
    this.setState(({ rise }) => ({
      rise: !rise,
    }));
  };

  render() {
    const { name, salary, onDelete } = this.props;
    const { increase, rise } = this.state;

    let classNames = "list-group-item";

    if (increase) {
      classNames += " increase";
    }
    if (rise) {
      classNames += " like";
    }

    return (
      <li className={classNames}>
        <span onClick={this.onRise} className="name">
          {name}
        </span>
        <input className="salary" defaultValue={salary + "$"} type="text" />
        <div className="buttons">
          <button
            onClick={this.onIncrease}
            className="cookie btn-sm "
            type="button"
          >
            <i className="fas fa-cookie"></i>
          </button>
          <button onClick={onDelete} className="trash btn-sm " type="button">
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmpListItem;
