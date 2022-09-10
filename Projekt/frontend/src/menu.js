import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./menu.css";

const Menu = () => {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div className="menu">
      <h1 className="h1">Menu</h1>

        <Link to="/czat">
          <p className={`${activeTab === "Czat" ? "active" : ""}`} onClick={() => setActiveTab("Czat")}>Czat</p>
        </Link>
        
        <Link to="/todo">
          <p className={`${activeTab === "ToDo" ? "active" : ""}`} onClick={() => setActiveTab("ToDo")}>To do</p>
        </Link>
        
        <Link to="/cytat">
          <p className={`${activeTab === "Quote" ? "active" : ""}`} onClick={() => setActiveTab("Quote")}>Cytaty</p>
        </Link>
        
        <Link to="/weather">
          <p className={`${activeTab === "App" ? "active" : ""}`} onClick={() => setActiveTab("App")}>Pogoda</p>
        </Link>
      </div>
  );
};

export default Menu;
