const tbody = document.querySelector('#results-table tbody');
const totalCostCell = document.getElementById('total-cost');

function updateTotalCost() {
  let total = 0;
  tbody.querySelectorAll('tr').forEach(row => {
    const costText = row.cells[7].textContent.replace('₱', '').trim();
    const cost = parseFloat(costText) || 0;
    total += cost;
  });
  totalCostCell.textContent = `₱${total.toFixed(2)}`;
}

document.getElementById('cost-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Get input values
  const appliance = document.getElementById('appliance-input').value.trim();
  const power = parseFloat(document.getElementById('power-input').value) || 0;
  const powerUnit = document.getElementById('power-dropdown').value;
  const hours = parseFloat(document.getElementById('hours-input').value) || 0;
  const days = parseFloat(document.getElementById('days-input').value) || 0;
  const rate = parseFloat(document.getElementById('util-input').value) || 0;

  // Conversion to kW
  //const powerInKw = powerUnit === 'W' ? power / 1000 : power;

  let powerInKw = 0;
    if (powerUnit === 'W'){
      powerInKw = power / 1000;
    } else {
      powerInKw = power;
    }
  const cost = powerInKw * hours * days * rate;

  // Create a new table row
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td><button class="delete-btn"><img src="/aec-calc/assets/trash-can.png"></button></td>
    <td>${appliance}</td>
    <td>${power.toFixed(2)}</td>
    <td>${powerUnit}</td>
    <td>${hours}</td>
    <td>${days}</td>
    <td>₱${rate.toFixed(2)}</td>
    <td>₱${cost.toFixed(2)}</td>
  `;

  // Append the row to the table body
  tbody.appendChild(newRow);

  // Add event listener for the delete button
  newRow.querySelector('.delete-btn').addEventListener('click', function() {
    newRow.remove();
    updateTotalCost();
  });

  updateTotalCost();
});

