import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout';
import FuncComponent1 from './Fc/FuncComponent1';
import FuncComponent2 from './Fc/FuncComponent2';
import FuncComponent3 from './Fc/FuncComponent3';
import FuncComponent4 from './Fc/FuncComponent4';
import Parent from './parent/Parent';
import Home from './home/home';
import NotFound from './notFound/NotFound';
import MoviesDb from './Movies/MoviesDb';


let routers = createBrowserRouter([
  {path:'', element:<Layout/>, 
    children:[
      {index:true, element:<Home/>}, 
      {path:'funcComponent1', element:<FuncComponent1/>}, 
      {path:'funcComponent2', element:<FuncComponent2/>}, 
      {path:'MoviesDb', element:<MoviesDb/>}, 
      {path:'parent', element:<Parent/>, 
        children:[ 
        {index:true, element:<FuncComponent3/>},
        {path:'FuncComponent3', element:<FuncComponent3/>},
        {path:'FuncComponent4', element:<FuncComponent4/>}
      ]},
      {path:'*', element:<NotFound/>},
    ]}
])





export default function App() {
  return <RouterProvider router={routers}/>
}

