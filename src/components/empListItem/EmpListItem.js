import "./empListItem.css";

const EmpListItem = ({ name, salary, increase }) => {
  let classNames = "list-group-item";
  if (increase) {
    classNames += " increase";
  }
  return (
    <li className={classNames}>
      <span className="name">{name}</span>
      <input className="salary" defaultValue={salary + "$"} type="text" />
      <div className="buttons">
        <button className="cookie btn-sm " type="button">
          <i className="fas fa-cookie"></i>
        </button>
        <button className="trash btn-sm " type="button">
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmpListItem;
