import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './compunents/Login';
import UserContextProvider from './context/UserContextProvider';
import Profile from './compunents/Profile';

function App() {

  return (
    <UserContextProvider>
        <h1>Context Practice</h1>
        <Login/>
        <Profile/>
  
    </UserContextProvider>
  )
}

export default App
