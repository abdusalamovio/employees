import EmpListItem from "../empListItem/EmpListItem";

import "./empList.css";

const EmpList = ({ data }) => {
  const elements = data.map((item) => {
    return <EmpListItem {...item} />;
  });

  return <ul className="list-group empList">{elements}</ul>;
};

export default EmpList;
