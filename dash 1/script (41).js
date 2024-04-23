document.addEventListener("DOMContentLoaded", function() {
    // Modal functionality
    var modal = document.getElementById("communicationModal");
    var closeButton = modal.querySelector(".close");
    var sendMessageButton = modal.querySelector("#sendMessage");

    function openModal() {
        modal.style.display = "block";
    }

    function closeModal() {
        modal.style.display = "none";
    }

    closeButton.addEventListener("click", closeModal);
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            closeModal();
        }
    });

    // Service request functionality
    var requestTaxiButton = document.getElementById("requestTaxi");
    var requestDeliveryButton = document.getElementById("requestDelivery");

    function requestService(serviceType) {
        var serviceName = serviceType === "taxi" ? "Taxi" : "Delivery";
        var confirmation = confirm("Are you sure you want to request " + serviceName + "?");
        if (confirmation) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    var latitude = position.coords.latitude;
                    var longitude = position.coords.longitude;
                    alert(serviceName + " requested! Your current location: Latitude " + latitude + ", Longitude " + longitude);
                    openModal();
                }, function(error) {
                    alert("Error retrieving your location. Please try again later.");
                });
            } else {
                alert("Geolocation is not supported by your browser.");
            }
        }
    }

    requestTaxiButton.addEventListener("click", function() {
        requestService("taxi");
    });

    requestDeliveryButton.addEventListener("click", function() {
        requestService("delivery");
    });

    // Sending message functionality
    sendMessageButton.addEventListener("click", function() {
        var message = document.getElementById("message").value.trim();
        if (message !== "") {
            alert("Message sent: " + message);
            closeModal();
        } else {
            alert("Please enter a message.");
        }
    });
});
