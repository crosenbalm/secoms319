import React from 'react';

import "./App.css";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Cart from "./Cart";
import Confirmation from "./Confirmation";

export function App() {
    return (
        <>
        <div class="col">
          <button>Toggle Card</button>
          <div>
              <p>Testing</p>
          </div>
        </div>
        </>
    )
}