/*Inputs*/
// JavaScript to update number input based on dropdown selection
const applianceInput = document.getElementById('appliance-input');
const applianceDropdown = document.getElementById('appliance-dropdown');

// When a shortcut is selected from the dropdown, update the input field
applianceDropdown.addEventListener('change', function() {
    const selectedValue = applianceDropdown.value;
    applianceInput.value = selectedValue;  // Set the input to the shortcut value
});

const utilInput = document.getElementById('util-input');
const utilDropdown = document.getElementById('util-dropdown');
   
utilDropdown.addEventListener('change', function() {
    const selectedValue = utilDropdown.value;
    utilInput.value = selectedValue;  
});
