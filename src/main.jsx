import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage.jsx'
import ProductPage from './pages/ProductPage.jsx'
import RandomProductPage from './pages/RandomProductPage.jsx'
import NotFound from './pages/NotFound.jsx'
import Home from './pages/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/products',
        element: <ProductsPage/>
      },
      {
        path: '/products/:id',
        element: <ProductPage/>
      },
      {
        path: '/random',
        element: <RandomProductPage/>
      },
      {
        path: "*",
        element: <NotFound/>
      }
    ],
  }
])

createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router}/>
  
)
