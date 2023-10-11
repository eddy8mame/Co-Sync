import React from 'react';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx'
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" Component={Home}></Route>
        <Route exact path="/login" Component={Login}></Route>
        <Route exact path="/signup" Component={SignUp}></Route>
      </Routes>
    </div>
  );
}

export default App;