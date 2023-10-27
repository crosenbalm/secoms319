import React from 'react';

import "./App.css";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Cart from "./Cart";
import Confirmation from "./Confirmation";

export function App() {
    return (
        <>
        <div class="col">
          <button id="toggleCardButton6" type="button" class="btn btn-primary mb-2">Toggle Card</button>
          <div id="card1" class="card collapse show shadow-sm">
            <div id="imgDish6"></div>
            <div class="card-body">
              <p id="txtDish6" class="card-text"></p>
              <p id="descDish6" class="card-description"></p>
            </div>
          </div>
        </div>
        </>
    )
}