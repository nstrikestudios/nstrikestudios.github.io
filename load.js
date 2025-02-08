document.addEventListener("DOMContentLoaded", function() {
    loadComponent("header.html", "header");
    loadComponent("footer.html", "footer");
    loadComponent("featured-games.html", "games");
    loadComponent("hiring.html", "hiring");
    loadComponent("contact.html", "contact");
});

function loadComponent(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error("Error loading " + file, error));
}

function getGreeting() {
    const currentHour = new Date().getHours(); // Get current hour

    if (currentHour >= 5 && currentHour < 12) {
        return "Good Morning!";
    } else if (currentHour >= 12 && currentHour < 17) {
        return "Good Afternoon!";
    } else if (currentHour >= 17 && currentHour < 21) {
        return "Good Evening!";
    } else {
        return "Good Night!";
    }
}

document.getElementById('greeting').textContent = getGreeting();

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    // Simple validation
    if (name === "" || email === "" || message === "") {
        document.getElementById("response-message").textContent = "Please fill out all fields.";
        document.getElementById("response-message").style.color = "red";
        return;
    }

    // Simulate form submission success
    document.getElementById("response-message").textContent = "Your message has been sent!";
    document.getElementById("response-message").style.color = "green";
    
    // Optionally, reset the form
    document.getElementById("contact-form").reset();
});

function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("active");
}
