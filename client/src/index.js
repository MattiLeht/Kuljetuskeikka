import 'bootstrap/dist/css/bootstrap.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import "./style.css";

const root = createRoot(document.getElementById('root'));
root.render(<App />);