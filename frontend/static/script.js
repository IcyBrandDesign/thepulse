document.addEventListener("DOMContentLoaded", function() {
    console.log("script loaded");

    fetch('/api/index')
        .then(res => res.json())
        .then(data => {
            console.log("JSON data:", data);
            const h2 = document.getElementById('message');
            if(h2) {
                h2.textContent = data.message;
            } else {
                console.error("h2#message not found");
            }
        })
        .catch(err => console.error("Fetch error:", err));
});

// Denne delen er for healt.html SPA

document.addEventListener("DOMContentLoaded", () => {
    const bmiButton = document.getElementById("openBMICalc");

    if (bmiButton) {
        bmiButton.addEventListener("click", (event) => {
            event.preventDefault();
            const body = document.getElementById("BMIcalc"); // velger body for å bytte ut hele innholdet
            body.innerHTML = `
                <h2>BMI calculator</h2>
                <form id="BMIform">
                <label for="weightBMI">Weight [kg]</label>
                <input id="weightBMI" type="number" step="0.1" min="0.1" required><br>
                <label for="heightBMI">Hight    [cm]</label>
                <input id="heightBMI" type="number" step="1" min="1" required><br>
                <button id="calcBMIButton" type="submit">Calculate BMI</button>
                </form>
                <p id="resultBMI">RESULTAT HER</p>
                <a href="#" id="toHealth">Close BMI calculator</a>
                `;
            const calcButton = document.getElementById("BMIform");
            calcButton.addEventListener("submit", (event) => {
                event.preventDefault();
                const weightBMI = parseFloat(document.getElementById("weightBMI").value);
                const heightBMI = parseFloat(document.getElementById("heightBMI").value);
                const resultBMI = document.getElementById("resultBMI");
            
            if (isNaN(weightBMI) || isNaN(heightBMI) || heightBMI <= 0 || weightBMI <= 0) {
                resultBMI.textContent = "Input out of bounds";
                return;
            }
            const heightBMIinM = heightBMI * 0.01
            const bmi = weightBMI / (heightBMIinM * heightBMIinM);
            resultBMI.textContent =  `Your BMI: ${bmi.toFixed(2)}`;
            });
        })
    }
})

document.addEventListener("click", (event) => {
    if (event.target.id == "toHealth") {
        event.preventDefault();
        window.location.reload()
    }
})