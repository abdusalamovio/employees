import EmpListItem from "../empListItem/EmpListItem";

import "./empList.css";

const EmpList = ({ data, onDelete }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmpListItem key={id} {...itemProps} onDelete={() => onDelete(id)} />
    );
  });

  return <ul className="list-group empList">{elements}</ul>;
};

export default EmpList;
