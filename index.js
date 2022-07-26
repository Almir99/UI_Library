import Tooltip from "./src/UI/tooltip";
import Dropdown from "./src/UI/dropdown";
import Tabs from "./src/UI/tabs";
import Snackbar from "./src/UI/snackbar";
import "./src/UI/Styles/style.css"

const  button = document.querySelector(".snackbar-trigger")

//tooltip
const tooltip = new Tooltip(document.querySelector(".tooltip"));
tooltip.init();

//dropdown
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();
})

//tabs

const tabs = new Tabs(document.querySelector(".tabs"));
tabs.init();

//Snackbar
const snackbar = new Snackbar();
snackbar.init();

button.addEventListener("click" , () => snackbar.show("you clicked me"))