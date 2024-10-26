document.getElementById('calculateBtn').addEventListener('click', function() {
    const investment = parseFloat(document.getElementById('investment').value);
    const costPerWatt = parseFloat(document.getElementById('costPerWatt').value);
    const sunlightHours = parseFloat(document.getElementById('sunlightHours').value);
    const efficiency = parseFloat(document.getElementById('efficiency').value) / 100;

    // Calculate Power Capacity
    const powerCapacity = investment / costPerWatt;

    // Calculate Daily Energy Production
    const dailyEnergyProduction = powerCapacity * sunlightHours * efficiency;

    // Calculate Annual Energy Production
    const annualEnergyProduction = dailyEnergyProduction * 365;

    // Display results
    document.getElementById('powerCapacity').textContent = powerCapacity.toFixed(2);
    document.getElementById('dailyEnergy').textContent = dailyEnergyProduction.toFixed(2);
    document.getElementById('annualEnergy').textContent = annualEnergyProduction.toFixed(2);
});