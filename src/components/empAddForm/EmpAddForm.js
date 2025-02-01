import "./empAddForm.css";

const EmpAddForm = () => {
  return (
    <div className="empAddForm">
      <h3>Добавьте нового сотрудника</h3>
      <form>
        <input
          className="form-control new-post-label"
          placeholder="Как его зовут?"
          type="text"
        />
        <input
          className="form-control new-post-label"
          placeholder="З/П в $?"
          type="number"
        />
        <button className="btn btn-outline-light" type="submit">
          Добавить
        </button>
      </form>
    </div>
  );
};

export default EmpAddForm;
