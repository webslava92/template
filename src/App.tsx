import React, { useState } from 'react';
import { SignIn } from './SignIn';
import "./App.css";
import { Register } from './Register';

function App() {
  const [isAuth, setIsAuth] = useState(true)
  return (
    <div className="App">
      {isAuth ? (
        <SignIn setIsAuth={setIsAuth} />
      ) : (
        <Register setIsAuth={setIsAuth} />
      )}
    </div>
  );
}

export default App;
