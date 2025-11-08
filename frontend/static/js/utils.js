export function closeDynamicDOM(theDomToClose, theLocationOfButtonToBringBack) {
    // Må ta imot den tingen som skal lukkes, det er et html objekt
    theDomToClose.innerHTML = "";
    // Ta imot lokasjonen som skal ha knappen tilbake og sett den opp
    theLocationOfButtonToBringBack.style.display = "inline-block";
    // Tror ikke jeg trenger returnereing. Skal bare utføre en enerell lukking og tilbakeføring av knapp
}