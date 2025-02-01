import "./empInfo.css";

const EmpInfo = ({ employees, increased }) => {
  return (
    <div className="empInfo">
      <h1>Учет сотрудников в компании N</h1>
      <h2>Общее число сотрудников: {employees}</h2>
      <h2>Премию получат: {increased}</h2>
    </div>
  );
};

export default EmpInfo;
