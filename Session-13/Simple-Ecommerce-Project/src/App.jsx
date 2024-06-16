import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import RootLayout from './RootLayout'
import Home from './components/home/Home'
import Register from './components/register/Register'
import Login from './components/login/Login'
import About from './components/about/About'
import RoutingError from './components/RoutingError'
import UserProfile from './components/user-profile/UserProfile'

function App() {
 
const browserRouter=createBrowserRouter([
  {
    path:'',
    element:<RootLayout/>,
    errorElement:<RoutingError/>,
    children:[
      {
      path:'',
      element:<Home/>
      },{
      path:'login',
      element:<Login/>
      },{
      path:'register',
      element:<Register/>
      },{
      path:'about',
      element:<About/>
     },{
      path:'user-profile',
      element:<UserProfile/>
     }
    ]
  }
])
  return (
   <div className='main'>
    <RouterProvider router={browserRouter}/>
   </div>
  )
}

export default App