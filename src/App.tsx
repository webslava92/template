import React, { useState } from 'react';
import { SignIn } from './components/SignIn';
import "./App.css";
import { Registration } from './components/Registration/Registration';
import { ThemeSelector } from './components/ThemeSelector';

function App() {
  const [isAuth, setIsAuth] = useState(true)
  return (
      <div className="App">
        <ThemeSelector />
        {isAuth ? (
          <SignIn setIsAuth={setIsAuth} />
        ) : (
          <Registration setIsAuth={setIsAuth} />
        )}
      </div>
  );
}

export default App;
