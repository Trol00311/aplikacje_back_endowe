import React, { useState, useEffect } from "react";
import "./todo.css";
import axios from "axios";

const initialState = {
    task: ""
  };
  
  const ToDo = () => {
    const [glowny, setGlowny] = useState(initialState);
    const [czat, setCzat] = useState([]);
    const {task} = glowny;
    useEffect(() => {
      getToDo();
    });
  
    const getToDo = async () => {
      const res = await axios.get("http://localhost:5000/toDo");
      if (res.status === 200) {
          setCzat(res.data);
      }
    };
  
  
    const addToDo = async (data) => {
      const res = await axios.post("http://localhost:5000/addTo", data);
      if (res.status === 200)
        console.log("dodano wiadomosc");
    };

    const deleteToDo = async (id) => {
        console.log(id);
        const res = await axios.delete(`http://localhost:5000/deleToDo/${id}`);
        if (res.status === 200)
          getToDo();
      };

      const updateToDo = async (id) => {
        const response = await axios.post(`http://localhost:5000/updateToDo/${id}`);
        if (response.status === 200)
          console.log("task zrobiony");
      };

      const inputChange = (x) => {
        let { name, value } = x.target;
        setGlowny({ ...glowny, [name]: value });
      };

      const sub = (x) => {
        x.preventDefault();
        if (!task) {
          window.confirm("Prosze uzupełnić wszystkie pola");
        } else {
            addToDo(glowny)
        }
      };



      
  return (
    <div className="container">
      <form action="" onSubmit={sub}>
      <label className="to_do" htmlFor="to_do">TO DO:</label>
        <input id="task" name="task" type="text" onChange={inputChange} value={task}/>
        
        <button className="sub" type="submit">add</button>
        </form>
        <ul>
        {czat &&
          czat.map((x, y) => {
            return (
              <div key={y}>
                <div class='cytatLosowy'>
                    <li>{x.task} --- {x.zrobione}
                  <button className="but" onClick={()=> deleteToDo(x.id)}>delete</button>
                  <button className="but" onClick={()=> updateToDo(x.id)}>check</button>
                  </li>
                </div>
              </div>
            );})}
        </ul>

        
      
    </div>
  );
}

export default ToDo;
