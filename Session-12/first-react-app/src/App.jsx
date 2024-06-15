import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './RootLayout';
import Home from './components/home/Home';
import Register from './components/register/Register';
import Login from './components/login/Login';
import RegisteredUsers from './components/registeredusers/RegisteredUsers';4
import Parent from './components/parent/Parent';
import Tasks from './components/tasks/ManageTasks';
import UserDetails from './components/user-details/UserDetails';
import Tech from './components/tech/Tech';
import Java from './components/java/Java';
import Node from './components/node/Node';
import Vue from './components/vue/Vue';
import SignIn from './components/sign-in/SignIn';
import UserDashboard from './components/user-dashboard/UserDashboard'
function App({ children }) {
  // Create browser router object
  const browserRouter = createBrowserRouter([
    {
      path:'',
      element:<RootLayout/>,
      children:[
        {
          path:'',
          element:<Home/>
        },{
          path:"register",
          element:<Register/>
        },{
          //if we keep colon ":" then it will be considered 
          //as url element by react
          path:'profiles/:userId',
          element:<UserDetails/>
        },{
          path:"login",
          element:<Login/>
        },{
          path:'signin',
          element:<SignIn/>
        },{
          path:'user-dashboard',
          element:<UserDashboard/>
        },{
          path:'registeredusers',
          element:<RegisteredUsers />
        },{
          path:'parent',
          element:<Parent/>
        },{
          path:'tasks',
          element:<Tasks/>
        },{
          path:'technologies',
          element:<Tech />,
          children:[
            {
              path:'java',
              element:<Java/>
            }, {
              path:'node',
              element:<Node/>
            }, {
              path:'vue',
              element:<Vue/>
            }
          ]

        }
      ]
    }
  ]);

  return (
    <RouterProvider router={browserRouter}>{children}</RouterProvider>
  );
}

export default App;
