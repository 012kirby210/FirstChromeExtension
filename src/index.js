import SimpleForm from "./js/components/SimpleForm.js";
import { Clock } from "./js/components/Clock.js";
import { Button } from "./js/components/Button.js";
import { Formulaire } from "./js/components/Formulaire.js";
import React from 'react';
import ReactDOM from "react-dom";


const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<SimpleForm />, wrapper) : false;

ReactDOM.render(<Clock />,document.getElementById('clock-container'));
ReactDOM.render(<Formulaire id="le-formulaire" labelValue="Quelle est la valeur a transmettre" buttonValue="Transmettre"/>,
document.getElementById('formulaire-container') );
