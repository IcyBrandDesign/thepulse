export function closeDynamicDOM(theDomToClose, theLocationOfButtonToBringBack) {
    // Må ta imot den tingen som skal lukkes, det er et html objekt
    theDomToClose.innerHTML = "";
    // Ta imot lokasjonen som skal ha knappen tilbake og sett den opp
    theLocationOfButtonToBringBack.style.display = "inline-block";
    // Tror ikke jeg trenger returnereing. Skal bare utføre en enerell lukking og tilbakeføring av knapp
}

export function iframeParser(button, htmlURL, container, iframeIdString, closeButtonClassNameString) {
    if ( !button || !container ) {
        console.warn("Fant ikke nødvendige DOM-elementer (iframeYrButton / iframeYr).");
        return;
    }
    if (!htmlURL) {
        console.log("Ikke iframeURL mottatt")
    }
    console.log("iframeURL: ", htmlURL)

    container.dataset.buttonId = button.id;

    button.addEventListener("click", (event) => {
        event.preventDefault(); // Hindrer standar oppførsel til .html og setter js til å bestemme
        const iframe = document.createElement("iframe");
        iframe.id = iframeIdString;
        iframe.src = htmlURL;
        iframe.referrerPolicy = "no-referrer"; // Ikke sende med info om hvor iframe hentes
        iframe.loading = "lazy"; // vente med å laste til objektet er i synsfeltet

        // tømme innhold og sette inn iframe
        container.appendChild(iframe);
        button.style.display = "none";

        //  Lukker av Dynamisk DOM
        const closeButton = document.createElement("button");
        closeButton.className = closeButtonClassNameString;
        closeButton.innerText = "Lukk ukens vær"
        container.appendChild(closeButton)
    })
}