const vehicleDetails = [
    {
        id: "vehicle1",
        name: "Honda CBR 500",
        price: "$5000",
        description: "A well-maintained Honda CBR 500 with excellent performance and mileage.",
        image: "bike.jpg"
    },
    {
        id: "vehicle2",
        name: "Ford Mustang 2018",
        price: "$25,000",
        description: "A powerful Ford Mustang 2018 with top-notch features and great condition.",
        image: "car1.jpg"
    },
    {
        id: "vehicle2",
        name: "Ford Mustang 2018",
        price: "$25,000",
        description: "A powerful Ford Mustang 2018 with top-notch features and great condition.",
        image: "car1.jpg"
    },
    {
        id: "vehicle2",
        name: "Ford Mustang 2018",
        price: "$25,000",
        description: "A powerful Ford Mustang 2018 with top-notch features and great condition.",
        image: "car1.jpg"
    },
    {
        id: "vehicle2",
        name: "Ford Mustang 2018",
        price: "$25,000",
        description: "A powerful Ford Mustang 2018 with top-notch features and great condition.",
        image: "car1.jpg"
    },
    {
        id: "vehicle2",
        name: "Ford Mustang 2018",
        price: "$25,000",
        description: "A powerful Ford Mustang 2018 with top-notch features and great condition.",
        image: "car1.jpg"
    },
    {
        id: "vehicle2",
        name: "Ford Mustang 2018",
        price: "$25,000",
        description: "A powerful Ford Mustang 2018 with top-notch features and great condition.",
        image: "car1.jpg"
    },
    {
        id: "vehicle2",
        name: "Ford Mustang 2018",
        price: "$25,000",
        description: "A powerful Ford Mustang 2018 with top-notch features and great condition.",
        image: "car1.jpg"
    },
    {
        id: "vehicle2",
        name: "Ford Mustang 2018",
        price: "$25,000",
        description: "A powerful Ford Mustang 2018 with top-notch features and great condition.",
        image: "car1.jpg"
    },
    {
        id: "vehicle2",
        name: "Ford Mustang 2018",
        price: "$25,000",
        description: "A powerful Ford Mustang 2018 with top-notch features and great condition.",
        image: "car1.jpg"
    },
    {
        id: "vehicle2",
        name: "Ford Mustang 2018",
        price: "$25,000",
        description: "A powerful Ford Mustang 2018 with top-notch features and great condition.",
        image: "car1.jpg"
    },{
        id: "vehicle2",
        name: "Ford Mustang 2018",
        price: "$25,000",
        description: "A powerful Ford Mustang 2018 with top-notch features and great condition.",
        image: "car1.jpg"
    },
    {
        id: "vehicle2",
        name: "Ford Mustang 2018",
        price: "$25,000",
        description: "A powerful Ford Mustang 2018 with top-notch features and great condition.",
        image: "car1.jpg"
    },
    {
        id: "vehicle2",
        name: "Ford Mustang 2018",
        price: "$25,000",
        description: "A powerful Ford Mustang 2018 with top-notch features and great condition.",
        image: "car1.jpg"
    },
    {
        id: "vehicle2",
        name: "Ford Mustang 2018",
        price: "$25,000",
        description: "A powerful Ford Mustang 2018 with top-notch features and great condition.",
        image: "bike.jpg"
    }
];

// Function to display vehicles in the inventory
function loadInventory() {
    const inventoryContainer = document.getElementById("inventory-container");
    inventoryContainer.innerHTML = ""; // Clear existing vehicles

    vehicleDetails.forEach(vehicle => {
        const vehicleCard = document.createElement("div");
        vehicleCard.classList.add("card");
        vehicleCard.innerHTML = `
            <img src="${vehicle.image}" alt="${vehicle.name}">
            <h3>${vehicle.name}</h3>
            <p>Price: ${vehicle.price}</p>
            <button onclick="showDetails('${vehicle.id}')">View Details</button>
        `;
        inventoryContainer.appendChild(vehicleCard);
    });
}

// Function to show details of a vehicle in a popup
function showDetails(vehicleId) {
    const detailsPopup = document.getElementById("vehicle-details");
    const detailsContent = document.getElementById("details-content");
    
    const vehicle = vehicleDetails.find(v => v.id === vehicleId);
    
    if (vehicle) {
        detailsContent.innerHTML = `
            <h2>${vehicle.name}</h2>
            <img src="${vehicle.image}" alt="${vehicle.name}" style="width: 100%; max-width: 300px;">
            <p>Price: ${vehicle.price}</p>
            <p>${vehicle.description}</p>
        `;
        detailsPopup.style.display = "block";
    }
}

// Function to close the details popup
function closeDetails() {
    document.getElementById("vehicle-details").style.display = "none";
}

// Load inventory on page load
document.addEventListener("DOMContentLoaded", () => {
    loadInventory(); // Load vehicles dynamically
});
