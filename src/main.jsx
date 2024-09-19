import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Home from './components/pages/Home.jsx'
import Region from './components/Region.jsx'
import Category from './components/Category.jsx'
import store from './store/store.js'
import { Provider } from 'react-redux'
import CardDetails from './components/CardDetails.jsx'
import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx'
import CartData from './components/pages/CartData.jsx'
import { CustomProvider } from 'rsuite'
import New from './components/New.jsx'
const router = createBrowserRouter([
  {

    path : "/",
    element:<App/>,
    children:[{

        path : "/",
        element:<Home/>
    },
 {
  path:"/region",
  element:<Region/>
 },
 {
  path:'/category',
  element:<Category/>
 },
 {
path:"/cart",
element:<CartData/>
 },
 {
path:'/cardDetails',
element:<CardDetails/>
 },


  ]
  },
  {
    path:"/login",
    element:<Login/>
   },
   {
    path:"/signup",
    element:<SignUp/>
    },{
      path:"/new",
      element:<New/>
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <CustomProvider theme="dark">
    <RouterProvider router={router} />
    </CustomProvider>
    </Provider>
  </StrictMode>,
)
