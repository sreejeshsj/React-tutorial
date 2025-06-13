import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import "./App.css";
import { Link } from 'react-router-dom';
import Login from "./Login";
import Home from './Home';
import Notfound from './Notfound';
import CourseList from './CourseList';
import Counter from './Counter';
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
    },
    {
     path:'/courses',
     element:<CourseList/>,
     errorElement:<Notfound/>
    },
    {
      path:'/counter',
      element:<Counter/>,
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
