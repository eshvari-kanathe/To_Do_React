import { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [data, setData] = useState("");
  const [changeButton, setChangeButton] = useState(false);
  const [editItem, setEditItem] = useState(null);
  // console.log(data,"dataa")

  const showData = () => {
    if (changeButton) {
      const updatedTodo = [...todo];
      updatedTodo[editItem] = data;
      setTodo(updatedTodo);
      setChangeButton(false);
      setEditItem(null);
    } else {
      setTodo([...todo, data]);
    }
    setData("");
  };

  const deleteTodo = (index) => {
    setTodo(todo.filter((_, item) => item !== index));
  };

  const editTodo = (index) => {
    setData(todo[index]);
    setChangeButton(true);
    setEditItem(index);
  };
  return (
    <div className="todo-container">
      <h1>TODO...</h1>
      <input
        type="text"
        placeholder="Enter Item"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />

      <button onClick={showData} className="changable-btn">
        {changeButton ? "Update" : "Add"}
      </button>
      <div className="list-aria">
        {todo.map((item, index) => (
          <ul key={index}>
            <li>
              {item}
              <button onClick={() => deleteTodo(index)} className="del-btn">
                Delete
              </button>
              <button onClick={() => editTodo(index)} className="edit-btn">
                Edit
              </button>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default App;
