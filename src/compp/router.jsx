import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import {Movie} from "./Movie";
import { Getapidata } from "./Getapidata";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Movie",
    element: <Movie />,
    loader: Getapidata,
  },
]);
