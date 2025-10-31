document.addEventListener("DOMContentLoaded", ( )=> {
    const yrButton = document.getElementById("iframeYrButton");
    const yrContainer = document.getElementById("iframeYr");
    
    if ( !yrButton || !yrContainer ) {
        console.warn("Fant ikke nødvendige DOM-elementer (iframeYrButton / iframeYr).");
        return;
    }
    
    const iframeURL = yrButton.dataset.iframeUrl;
    if (!iframeURL) {
        console.log("Ikke iframeURL mottatt")
    }
    console.log("iframeURL: ", iframeURL)

    if (yrButton) {
        // Klikk mottaker
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
})

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("closeDynamicDOM")) {
        event.preventDefault();
        document.getElementById("iframeYr").innerHTML = "";
        
        // Når iframe lukkes, vises knappen til å åpne iframe igjen
        const yrButton = document.getElementById("iframeYrButton");
        yrButton.style.display = "inline-block";
    }
})