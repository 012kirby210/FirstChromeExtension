import SimpleForm from "./js/components/SimpleForm.js";
import { Clock } from "./js/components/Clock.js";
import { Button } from "./js/components/Button.js";
import { Formulaire } from "./js/components/Formulaire.js";
import { Selection } from "./js/components/Selection.js";
import { LoadBay } from "./js/components/LoadBay.js";
import React from 'react';
import ReactDOM from "react-dom";


const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<SimpleForm />, wrapper) : false;

ReactDOM.render(<Clock />,document.getElementById('clock-container'));
ReactDOM.render(<Formulaire id="le-formulaire" labelValue="Quelle est la valeur a transmettre" buttonValue="Transmettre"/>,
document.getElementById('formulaire-container') );
let listeASelectionner = {
  first: "je", second: "tu", third: "il/elle/on", fourth: "nous", fifth: "vous", sixth: "ils/elles"
};
ReactDOM.render(<Selection selectionName="ppList" selectionElements={listeASelectionner} />,
document.getElementById('selection-container'))
ReactDOM.render(<LoadBay inputId="identifiant-loadbay" inputLabel="Valeur à envoyer" method="POST"
url="http://localhost:7900/server.php" buttonLabel="Envoyer"/>,
document.getElementById('loading-bay-container'));
