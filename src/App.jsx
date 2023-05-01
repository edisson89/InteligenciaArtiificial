import React from "react";
import AccountMenu from "./components/AccountMenu";
import { NavLink, Route, Routes } from "react-router-dom";
import Logo from "./assets/logointeligencia.png";
import Home from "./components/Home";
import Login from "./components/Login";
import styles from "./styles/app.module.css";
import Contacto from "./components/Contacto";

function App() {
  return (
    <div className={styles.home}>
      <div className={styles.navBar}>
        <NavLink className={styles.logo} to='/home'>
        <img src={Logo} className={styles.logo} alt="logo" width={350} />

        </NavLink>
        <div className={styles.title}>
          <h1>INTELIGENCIA ARTIFICIAL</h1>
        </div>
        <div className={styles.menu}>
          <AccountMenu />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </div>
  );
}

export default App;
