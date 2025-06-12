import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import "./App.css";

import Login from "./Login";
import Home from './Home';
import Notfound from './Notfound';
function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Home/>,
      errorElement:<Notfound/>
    },
    {
     path:'/login',
     element:<Login/>,
     errorElement:<Notfound/>
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
