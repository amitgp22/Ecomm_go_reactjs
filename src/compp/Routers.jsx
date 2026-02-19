import { createBrowserRouter, Router } from "react-router-dom";
import { Movie } from "./Movie";
import Home from "../Home";
import Applayout from "./Applayout";
import Errorp from "./Errorp";

export const  Routers=createBrowserRouter([
 
    {path:'/',
    element:<Applayout/>,
    errorElement:<Errorp/>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/Movie',
            element:<Movie/>
        }
    ]

    }

])