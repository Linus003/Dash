document.addEventListener("DOMContentLoaded", function() {
    // Modal functionality
    const modal = document.getElementById("communicationModal");
    const closeButton = modal.querySelector(".close");
    const sendMessageButton = modal.querySelector("#sendMessage");
    const messageInput = document.getElementById("message");

    function openModal() {
        modal.style.display = "block";
    }

    function closeModal() {
        modal.style.display = "none";
    }

    // Close modal when clicking outside or on close button
    modal.addEventListener("click", function(event) {
        if (event.target === modal || event.target === closeButton) {
            closeModal();
        }
    });

    // Service request functionality
    function requestService(serviceType) {
        const serviceName = serviceType === "taxi" ? "Taxi" : "Delivery";
        const confirmation = confirm(`Are you sure you want to request ${serviceName}?`);
        if (confirmation) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    const { latitude, longitude } = position.coords;
                    alert(`${serviceName} requested! Your current location: Latitude ${latitude}, Longitude ${longitude}`);
                    openModal();
                }, function(error) {
                    alert("Error retrieving your location. Please try again later.");
                });
            } else {
                alert("Geolocation is not supported by your browser.");
            }
        }
    }

    // Handle service request buttons
    document.querySelectorAll(".service-request").forEach(button => {
        button.addEventListener("click", function() {
            const serviceType = this.dataset.type;
            requestService(serviceType);
        });
    });

    // Sending message functionality
    sendMessageButton.addEventListener("click", function() {
        const message = messageInput.value.trim();
        if (message) {
            alert("Message sent: " + message);
            closeModal();
        } else {
            alert("Please enter a message.");
        }
    });
});
// Track button click event
document.getElementById("myButton").addEventListener("click", function() {
  gtag('event', 'click', {
    'event_category': 'Button Click',
    'event_label': 'My Button'
  });
});
