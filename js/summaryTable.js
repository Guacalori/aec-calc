const tbody = document.querySelector('#results-table tbody');
const totalCostCell = document.getElementById('total-cost');

// Loader
window.addEventListener('DOMContentLoaded', loadSavedData);

function updateTotalCost() {
  let total = 0;

  tbody.querySelectorAll('tr').forEach(row => {
    const costText = row.cells[7].textContent.replace('₱', '').trim();
    const cost = parseFloat(costText) || 0;
    total += cost;
  });

  totalCostCell.textContent = `₱${total.toFixed(2)}`;

  saveTable();
}

function saveTable() {
  const rows = [];
  tbody.querySelectorAll('tr').forEach(row => {
    const cells = Array.from(row.cells).map(cell => cell.textContent);
    rows.push(cells);
  });

  localStorage.setItem('tableData', JSON.stringify(rows));
  localStorage.setItem('totalCost', totalCostCell.textContent);
}

function loadSavedData() {
  const savedRows = JSON.parse(localStorage.getItem('tableData')) || [];
  const savedTotal = localStorage.getItem('totalCost');

  savedRows.forEach(cells => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td><button class="delete-btn"><img src="/aec-calc/assets/trash-can.png" alt="Delete"></button></td>
      <td>${cells[1]}</td>
      <td>${cells[2]}</td>
      <td>${cells[3]}</td>
      <td>${cells[4]}</td>
      <td>${cells[5]}</td>
      <td>${cells[6]}</td>
      <td>${cells[7]}</td>
    `;
    tbody.appendChild(newRow);

    newRow.querySelector('.delete-btn').addEventListener('click', function() {
      newRow.remove();
      updateTotalCost();
    });
  });

  if (savedTotal) {
    totalCostCell.textContent = savedTotal;
  }
}

document.getElementById('cost-form').addEventListener('submit', function(e) {
  if (!validateForm()) {
    e.preventDefault();
    console.log("Form validation failed");
    return;  
  }

  const appliance = document.getElementById('appliance-input').value.trim();
  const power = parseFloat(document.getElementById('power-input').value) || 0;
  const powerUnit = document.getElementById('power-dropdown').value;
  const hours = parseFloat(document.getElementById('hours-input').value) || 0;
  const days = parseFloat(document.getElementById('days-input').value) || 0;
  const rate = parseFloat(document.getElementById('util-input').value) || 0;

  // Computation
  let powerInKw = 0;
  if (powerUnit === 'W') {
    powerInKw = power / 1000; 
  } else {
    powerInKw = power;
  }
  const cost = powerInKw * hours * days * rate;

  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td><button class="delete-btn"><img src="/aec-calc/assets/trash-can.png" alt="Delete"></button></td>
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
  console.log("New row added:", newRow);

  newRow.querySelector('.delete-btn').addEventListener('click', function() {
    newRow.remove();
    updateTotalCost();
  });

  updateTotalCost();
});

function validateForm() {

  const appliance = document.getElementById('appliance-input').value.trim();
  const power = document.getElementById('power-input').value.trim();
  const util = document.getElementById('util-input').value.trim();
  const hours = document.getElementById('hours-input').value.trim();
  const days = document.getElementById('days-input').value.trim();

  let isValid = true;

  return isValid;
}
