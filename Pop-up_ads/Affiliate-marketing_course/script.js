document.addEventListener("DOMContentLoaded", function() {
    const showAdButton = document.getElementById("showAdButton");
    const popupAd = document.getElementById("popupAd");
    const closeAdButton = document.getElementById("closeAdButton");

    // Show the pop-up ad when the button is clicked
    showAdButton.addEventListener("click", function() {
        popupAd.style.display = "block";
    });

    // Close the pop-up ad when the close button is clicked
    closeAdButton.addEventListener("click", function() {
        popupAd.style.display = "none";
    });
});    
