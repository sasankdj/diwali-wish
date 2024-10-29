function displayWish() {
    const name = document.getElementById("nameInput").value.trim();
    const wishMessage = document.getElementById("wishMessage");

    if (name) {
        // Set the wish message with the entered name
        wishMessage.textContent = `Happy Diwali, ${name}! 🎉`;

        // Show wish page with animation
        document.getElementById("homePage").classList.remove("show");
        setTimeout(() => {
            document.getElementById("homePage").style.display = "none";
            document.getElementById("wishPage").style.display = "block";
            document.getElementById("wishPage").classList.add("show");
        }, 500);
    } else {
        alert("Please enter your name!");
    }
}

function goBack() {
    // Return to home page with animation
    document.getElementById("wishPage").classList.remove("show");
    setTimeout(() => {
        document.getElementById("wishPage").style.display = "none";
        document.getElementById("homePage").style.display = "block";
        document.getElementById("homePage").classList.add("show");
    }, 500);
}

// Show the home page on load
window.onload = () => {
    document.getElementById("homePage").classList.add("show");
};
