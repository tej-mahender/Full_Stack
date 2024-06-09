import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './RootLayout';
import Home from './components/home/Home';
import Register from './components/register/Register';
import Login from './components/login/Login';
import RegisteredUsers from './components/registeredusers/RegisteredUsers';4
import Parent from './components/parent/Parent';
import Tasks from './components/tasks/ManageTasks';
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
          path:"login",
          element:<Login/>
        },{
          path:'registeredusers',
          element:<RegisteredUsers />
        },{
          path:'parent',
          element:<Parent/>
        },{
          path:'tasks',
          element:<Tasks/>
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={browserRouter}>{children}</RouterProvider>
  );
}

export default App;
