import React, { useState, useEffect } from "react";
import "./czat.css";
import axios from "axios";



const initialState = {
  wiadomosc: "",
  osoba:"",
};

const Czat = () => {
  const [glowny, setGlowny] = useState(initialState);
  const [czat, setCzat] = useState([]);
  const {wiadomosc, osoba} = glowny;
  useEffect(() => {
    getCzat();
  });

  const getCzat = async () => {
    const res = await axios.get("http://localhost:5000/czat");
    if (res.status === 200) {
        setCzat(res.data);
    }
  };


  const addCzat = async (data) => {
    const res = await axios.post("http://localhost:5000/addCzat", data);
    if (res.status === 200)
      console.log("dodano wiadomosc");
  };

  const inputChange = (x) => {
    let { name, value } = x.target;
    setGlowny({ ...glowny, [name]: value });
  };


  const sub = (x) => {
    x.preventDefault();
    if (!wiadomosc||!osoba) {
      window.confirm("Prosze uzupełnić wszystkie pola");
    } else {
        addCzat(glowny)
    }
  };

  return (
    <div className="container">
      <form action="" onSubmit={sub}>
        {czat &&
          czat.map((x, y) => {
            return (
              <div key={y} class='container'>
                <div class='cytatLosowy'>
                  <p class="text">Autor: {x.osoba} </p>
                  <p class="text">Treść: {x.wiadomosc} </p>
                </div>
              </div>
            );})}
        
        <label className="osoba" htmlFor="wiadomosc">Osoba:</label>
        <input id="osoba" name="osoba" type="text" onChange={inputChange} value={osoba}/>

        <label className="wiadomosc" htmlFor="osoba">Wiadomosc:</label>
        <input id="wiadomosc" name="wiadomosc" type="text" onChange={inputChange} value={wiadomosc} />

        <input className="sub" type="submit" value="Add" />
        
      </form>
    </div>
  );
};

export default Czat;