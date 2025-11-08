import { closeDynamicDOM } from "./utils.js";
import { iframeParser } from "./utils.js";

document.addEventListener("DOMContentLoaded", ( )=> {
    // Dagens vær iframe
    const yrButton = document.getElementById("iframeYrButton");
    const yrContainer = document.getElementById("iframeYr");
    const iframeURL = yrButton.dataset.iframeUrl;
    const iframeIdStringDagensVaer = "yrContent";
    const closeButtonClassNameStringDagensVaer = "closeDynamicDOM";
    // Ukens vær iframe
    const buttonUkensVaerYr = document.getElementById("buttonUkensVaerYr");
    const contentUkensVaerYr = document.getElementById("contentUkensVaerYr");
    const ukensVaerULR = buttonUkensVaerYr.dataset.iframeUrl;
    const iframeIdStringUkensVaer = "ukensVaerContent";
    const closeButtonClassNameStringUkensVaer = "closeDynamicDOM";

    if (yrButton) {
        iframeParser(yrButton, iframeURL, yrContainer, iframeIdStringDagensVaer, closeButtonClassNameStringDagensVaer);
    }
    if (buttonUkensVaerYr) {
        iframeParser(buttonUkensVaerYr, ukensVaerULR, contentUkensVaerYr, iframeIdStringUkensVaer, closeButtonClassNameStringUkensVaer);
    }
})

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("closeDynamicDOM")) {
        event.preventDefault();
        
        const closeButton = event.target;

        const container = closeButton.parentElement;
        
        const iframe = container.querySelector("iframe");

        const openButton = document.getElementById(container.dataset.buttonId);

        if (iframe && openButton) {
            closeDynamicDOM(container, openButton)
        }
    }
})
