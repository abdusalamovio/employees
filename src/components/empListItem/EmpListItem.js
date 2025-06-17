import "./empListItem.css";

const EmpListItem = (props) => {
  const { name, salary, onDelete, onToggleProp, increase, rise } = props;

  let classNames = "list-group-item";

  if (increase) {
    classNames += " increase";
  }
  if (rise) {
    classNames += " like";
  }

  return (
    <li className={classNames}>
      <span onClick={onToggleProp} className="name" data-toggle="rise">
        {name}
      </span>
      <input className="salary" defaultValue={salary + "$"} type="text" />
      <div className="buttons">
        <button
          onClick={onToggleProp}
          className="cookie btn-sm "
          data-toggle="increase"
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
};

export default EmpListItem;
