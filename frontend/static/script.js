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
