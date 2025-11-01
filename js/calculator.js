document.getElementById('cost-form').addEventListener('submit', function(e) {
  e.preventDefault(); // prevent form reload

  // Get input values
  const power = parseFloat(document.getElementById('power-input').value) || 0;
  const hours = parseFloat(document.getElementById('hours-input').value) || 0;
  const days = parseFloat(document.getElementById('days-input').value) || 0;
  const rate = parseFloat(document.getElementById('util-input').value) || 0;

  // Get selected power unit
  const powerUnit = document.getElementById('power-dropdown').value;

  // Convert power to kilowatts if needed
  let powerInKw = 0;
  if (powerUnit === 'W') {
    powerInKw = power / 1000; // W → kW
  } else if (powerUnit === 'kW') {
    powerInKw = power;
  }

  // Calculate cost per month
  const result = powerInKw * hours * days * rate;

  // Show result with 2 decimal places
document.getElementById('result').textContent = `₱ ${result.toFixed(2)}`;
});

document.getElementById('reset').addEventListener('click', function() {
  document.getElementById('result').textContent = '₱ 0.00';
});


