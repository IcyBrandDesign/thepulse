import { closeDynamicDOM } from "./utils.js";

// Dette er iframe vær
function dagensVaer(yrButton, iframeURL, yrContainer) {
    // Klikk mottaker
    if ( !yrButton || !yrContainer ) {
        console.warn("Fant ikke nødvendige DOM-elementer (iframeYrButton / iframeYr).");
        return;
    }
    if (!iframeURL) {
        console.log("Ikke iframeURL mottatt")
    }
    console.log("iframeURL: ", iframeURL)

    yrButton.addEventListener("click", (event) => {
        event.preventDefault(); // Hindrer standar oppførsel til .html og setter js til å bestemme
        const iframe = document.createElement("iframe");
        iframe.id = "yrContent";
        iframe.src = iframeURL;
        iframe.referrerPolicy = "no-referrer"; // Ikke sende med info om hvor iframe hentes
        iframe.loading = "lazy"; // vente med å laste til objektet er i synsfeltet

        // tømme innhold og sette inn iframe
        yrContainer.appendChild(iframe);
        yrButton.style.display = "none";

        //  Lukker av Dynamisk DOM
        const closeButton = document.createElement("button");
        closeButton.className = "closeDynamicDOM";
        closeButton.innerText = "Lukk været"
        yrContainer.appendChild(closeButton)
    })
}

function ukensVaer(button, htmlURL, container) {
    if ( !button || !container ) {
        console.warn("Fant ikke nødvendige DOM-elementer (iframeYrButton / iframeYr).");
        return;
    }
    if (!htmlURL) {
        console.log("Ikke iframeURL mottatt")
    }
    console.log("iframeURL: ", htmlURL)

    button.addEventListener("click", (event) => {
        event.preventDefault(); // Hindrer standar oppførsel til .html og setter js til å bestemme
        const iframe = document.createElement("iframe");
        iframe.id = "ukensVaerContent";
        iframe.src = htmlURL;
        iframe.referrerPolicy = "no-referrer"; // Ikke sende med info om hvor iframe hentes
        iframe.loading = "lazy"; // vente med å laste til objektet er i synsfeltet

        // tømme innhold og sette inn iframe
        container.appendChild(iframe);
        button.style.display = "none";

        //  Lukker av Dynamisk DOM
        const closeButton = document.createElement("button");
        closeButton.className = "closeDynamicDOM";
        closeButton.innerText = "Lukk været"
        container.appendChild(closeButton)
    })
}

document.addEventListener("DOMContentLoaded", ( )=> {
    // Dagens vær iframe
    const yrButton = document.getElementById("iframeYrButton");
    const yrContainer = document.getElementById("iframeYr");
    const iframeURL = yrButton.dataset.iframeUrl;
    // Ukens vær iframe
    const buttonUkensVaerYr = document.getElementById("buttonUkensVaerYr");
    const contentUkensVaerYr = document.getElementById("contentUkensVaerYr");
    const ukensVaerULR = buttonUkensVaerYr.dataset.iframeUrl;

    if (yrButton) {
        dagensVaer(yrButton, iframeURL, yrContainer);
    }
    if (buttonUkensVaerYr) {
        ukensVaer(buttonUkensVaerYr, ukensVaerULR, contentUkensVaerYr);
    }
})

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("closeDynamicDOM")) {
        event.preventDefault();
        // Lukker for dangens vær
        const dagensVaer = document.getElementById("iframeYr");
        const yrButton = document.getElementById("iframeYrButton");
        closeDynamicDOM(dagensVaer, yrButton)

        // lukker av ukensVaer
        const ukensVaer = document.getElementById("contentUkensVaerYr");
        const ukensVaerButton = document.getElementById("buttonUkensVaerYr");
        closeDynamicDOM(ukensVaer, ukensVaerButton)
        // Når iframe lukkes, vises knappen til å åpne iframe igjen
       
        
    }
})