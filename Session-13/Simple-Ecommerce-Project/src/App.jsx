import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import RootLayout from './RootLayout'
import Home from './components/home/Home'
import Register from './components/register/Register'
import Login from './components/login/Login'
import About from './components/about/About'
import RoutingError from './components/RoutingError'
import UserProfile from './components/user-profile/UserProfile'
import Products from './components/products/Products'
import Cart from './components/cart/Cart'
import Edit from './components/edit/Edit'
import { Navigate } from 'react-router-dom'

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
      path:'edit',
      element:<Edit/>
     },{
      path:'user-profile',
      element:<UserProfile/>,
      children:[
        {
          path:'products',
          element:<Products/>
        },{
          path:'cart',
          element:<Cart/>
        },
        // navigate to products page when path is
        {
          path:'',
          element:<Navigate to={'products'}/>
        }
      ]
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