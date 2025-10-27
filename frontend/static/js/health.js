// Åpner BMI kalkulator
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
                <a href="#" id="closeBMI">Close BMI calculator</a>
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

// Kolesterol SPA
document.addEventListener("DOMContentLoaded", () => {
    const kolesterolButton = document.getElementById("openHealthKolesterol");

    if (kolesterolButton) {
        kolesterolButton.addEventListener("click", (event) => {
            event.preventDefault();
            const body = document.getElementById("healtKolesterol");
            body.innerHTML = `
                <a href="https://nhi.no/kosthold/forebyggende-kost-og-sykdom/kostrad-ved-forhoyet-kolesterolniva"
                    id="NHI- Kostråd ved forhøyet kolesterolnivå i blodet"
                    target="_blank">
                    NHI- Kostråd ved forhøyet kolesterolnivå i blodet
                </a><br>
                <a href="#" id="closeKolesterol">Close Kolesterol data</a>
            `;
        })
    }
})

// Lukker SPA - tilbake til health
document.addEventListener("click", (event) => {
    if (event.target.id == "closeBMI") {
        event.preventDefault();
        document.getElementById("BMIcalc").innerHTML = ""
    }
    if (event.target.id == "closeKolesterol") {
        event.preventDefault();
        document.getElementById("healtKolesterol").innerHTML = ""
    }
})