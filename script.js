document.addEventListener("DOMContentLoaded", function () {
    const vehicles = [
        {
            name: "Vehicle 1",
            price: "₹55800",
            image: "./assets/gallary/_9_.jpg",
            shortDescription: "A reliable and efficient vehicle.",
            fullDescription: "A reliable and efficient vehicle with excellent mileage, low maintenance costs, and a comfortable interior."
        },
        {
            name: "Vehicle 2",
            price: "₹65200",
            image: "./assets/gallary/_1_.jpg",
            shortDescription: "A comfortable and stylish ride.",
            fullDescription: "A comfortable and stylish ride with premium features, high safety ratings, and a smooth driving experience."
        },
        {
            name: "Vehicle 3",
            price: "₹51000",
            image: "./assets/gallary/_5_.jpg",
            shortDescription: "A great choice for daily commute.",
            fullDescription: "A great choice for daily commute with fuel efficiency, a spacious interior, and advanced safety features."
        },
        {
            name: "Vehicle 4",
            price: "₹50000",
            image: "./assets/gallary/_6_.jpg",
            shortDescription: "A great choice for daily commute.",
            fullDescription: "A great choice for daily commute with fuel efficiency, a spacious interior, and advanced safety features."
        }, {
            name: "Vehicle 5",
            price: "₹40500",
            image: "./assets/gallary/_8_.jpg",
            shortDescription: "A great choice for daily commute.",
            fullDescription: "A great choice for daily commute with fuel efficiency, a spacious interior, and advanced safety features."
        }

    ];

    const inventoryContainer = document.getElementById("inventory-container");
    const detailsPopup = document.getElementById("vehicle-details");
    const detailsContent = document.getElementById("details-content");

    // Populate Inventory Section
    vehicles.forEach((vehicle, index) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${vehicle.image}" alt="${vehicle.name}">
            <h3>${vehicle.name}</h3>
            <p class="short-description">${vehicle.shortDescription}</p>
            <p class="price">Price: ${vehicle.price}</p>
            <button onclick="showDetails(${index})">Show Details</button>
        `;

        inventoryContainer.appendChild(card);
    });

    // Show Details Function
    window.showDetails = function (index) {
        const vehicle = vehicles[index];

        detailsContent.innerHTML = `
            <h2>${vehicle.name}</h2>
            <img src="${vehicle.image}" alt="${vehicle.name}" class="popup-image">
            <p>${vehicle.fullDescription}</p>
            <p class="price"><strong>Price:</strong> ${vehicle.price}</p>
            <button onclick="closeDetails()">Close</button>
        `;

        detailsPopup.style.display = "flex";
    };

    // Close Details Function
    window.closeDetails = function () {
        detailsPopup.style.display = "none";
    };

    // Close popup when clicking outside the content
    detailsPopup.addEventListener("click", function (event) {
        if (event.target === detailsPopup) {
            closeDetails();
        }
    });
});
