import EmpInfo from "../components/empInfo/EmpInfo";
import EmpSearch from "../components/empSearch/EmpSearch";
import EmpFilter from "../components/empFilter/EmpFilter";
import EmpList from "../components/empList/EmpList";
import EmpAddForm from "../components/empAddForm/EmpAddForm";

import "./app.css";

const App = () => {
  const data = [
    { name: "John C.", salary: 800, increase: false, id: 0 },
    { name: "Alex M.", salary: 3000, increase: true, id: 1 },
    { name: "Carl W.", salary: 5000, increase: false, id: 2 },
  ];

  return (
    <div className="app">
      <EmpInfo />
      <div className="empSearch">
        <EmpSearch />
        <EmpFilter />
      </div>
      <EmpList data={data} />
      <EmpAddForm />
    </div>
  );
};

export default App;
