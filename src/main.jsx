import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './Components/Root/Root.jsx'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import ArticleDetails from './Components/Article_details/ArticleDetails.jsx';
import ReadingActivities from './Components/ReadingActivities/ReadingActivities.jsx';
import Quotes from './Components/Quotes/Quotes.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/article_details/:id",
        element: <ArticleDetails></ArticleDetails>,
        loader: () => fetch('/data/articles.json')
      },
      {
        path: "/reading_activities",
        element: <ReadingActivities></ReadingActivities>,
        loader: () => fetch('/data/articles.json')
      },
      {
        path: "/famous_quotes",
        element: <Quotes></Quotes>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
