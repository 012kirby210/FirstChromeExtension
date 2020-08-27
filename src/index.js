import SimpleForm from "./js/components/SimpleForm.js";
import React from 'react';
import ReactDOM from "react-dom";


const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<SimpleForm />, wrapper) : false;
