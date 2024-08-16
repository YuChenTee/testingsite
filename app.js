// Array to store material costs
const materials = [
    { name: "Wood", cost: 50 },
    { name: "Steel", cost: 100 },
    { name: "Plastic", cost: 20 }
];

// Populate the material dropdown
const materialSelect = document.getElementById("material");
materials.forEach(material => {
    const option = document.createElement("option");
    option.value = material.cost;
    option.textContent = material.name;
    materialSelect.appendChild(option);
});

// Handle form submission
document.getElementById("costForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const materialCost = parseFloat(materialSelect.value);
    const factoryOverhead = parseFloat(document.getElementById("factoryOverhead").value);
    const workerPay = parseFloat(document.getElementById("workerPay").value);

    const totalCost = materialCost + factoryOverhead + workerPay;

    document.getElementById("result").textContent = `Total Cost: RM${totalCost.toFixed(2)}`;
});