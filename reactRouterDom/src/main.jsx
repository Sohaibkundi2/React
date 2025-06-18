import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, createRoutesFromElements,RouterProvider, Route} from "react-router-dom";
import Layout from './Layout';
import Home from './compunents/Home/Home';
import About from './compunents/About/About'
import Contact from './compunents/Contact/Contact';
import Github, { githubInfoLoader } from './compunents/Github/Github.jsx';
import User from './compunents/User/User.jsx';


 const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path="" element={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path="contact" element={<Contact/>} />
      <Route path="github" loader={githubInfoLoader} element={<Github/>} />
      <Route path='user/' element={<User />} >
        <Route path=':userid' element={<User />} />
      </Route>

      <Route path='*' element={<div>Not Found</div>} />
    </Route>

  )
 )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
