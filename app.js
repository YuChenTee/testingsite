document.addEventListener("DOMContentLoaded", function() {
    const materialCostSelect = document.getElementById("materialCost");

    // Initialize Select2 on the material cost dropdown
    $(materialCostSelect).select2({
        placeholder: "Select a material",
        allowClear: false
    });

    // Example material cost options
    const materialCosts = [
        { name: "Apples", cost: 50 },
        { name: "Bananas", cost: 30 },
        { name: "Carrots", cost: 20 },
        { name: "Chicken Breast", cost: 150 },
        { name: "Beef", cost: 250 },
        { name: "Salmon", cost: 300 },
        { name: "Potatoes", cost: 40 },
        { name: "Tomatoes", cost: 25 },
        { name: "Onions", cost: 15 },
        { name: "Garlic", cost: 10 },
        { name: "Broccoli", cost: 35 },
        { name: "Cauliflower", cost: 30 },
        { name: "Spinach", cost: 20 },
        { name: "Eggs", cost: 60 },
        { name: "Milk", cost: 55 },
        { name: "Cheese", cost: 200 },
        { name: "Butter", cost: 120 },
        { name: "Bread", cost: 45 },
        { name: "Rice", cost: 90 },
        { name: "Pasta", cost: 85 },
        { name: "Olive Oil", cost: 300 },
        { name: "Sugar", cost: 40 },
        { name: "Salt", cost: 15 },
        { name: "Pepper", cost: 25 },
        { name: "Flour", cost: 50 },
        { name: "Yogurt", cost: 70 },
        { name: "Lettuce", cost: 20 },
        { name: "Cucumber", cost: 18 },
        { name: "Bell Peppers", cost: 35 },
        { name: "Strawberries", cost: 100 }
    ];

    // Populate the dropdown with material cost options
    materialCosts.forEach(material => {
        const option = document.createElement("option");
        option.value = material.cost;
        option.textContent = `${material.name} (RM ${material.cost})`;
        materialCostSelect.appendChild(option);
    });

    document.getElementById("costForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const markup = parseFloat(document.getElementById("markup").value) / 100;
        const margin = parseFloat(document.getElementById("margin").value) / 100;
        const materialCost = parseFloat(materialCostSelect.value);

        // Calculate the selling price using the provided formula
        const sellingPrice = (materialCost * (1 + markup)) / (1 - margin);

        // Display the result
        document.getElementById("result").textContent = `Selling Price: RM ${sellingPrice.toFixed(2)}`;
    });
});