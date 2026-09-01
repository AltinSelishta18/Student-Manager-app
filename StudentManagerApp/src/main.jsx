import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StudentForm from './components/Studentform.jsx';
import StudentList from "./components/StudentList.jsx";
import Dashboard from "./components/Dashboard.jsx"
import MainContent from './components/MainContent.jsx';
import App from './App.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        Children: [
          {
            index: true,
            element: <MainContent />
          },
          
        ]
    }
]);
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)
