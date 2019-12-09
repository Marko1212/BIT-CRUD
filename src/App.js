import React from "react";
import Header from "./app/components/Header/Header";
import Footer from "./app/components/Footer/Footer";
import Register from "./app/pages/Register/Register";
import Login from "./app/pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
