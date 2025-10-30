document.getElementById('cost-form').addEventListener('submit', function(e){
    if (!validateForm()) {
        e.preventDefault(); 
        return;
    }
});

function validateForm() {
    
    const applianceName = document.getElementById('appliance-input').value.trim();
    const power = document.getElementById('power-input').value.trim();  // Changed to text input
    const util = document.getElementById('util-input').value.trim();
    const hours = document.getElementById('hours-input').value.trim();
    const days = document.getElementById('days-input').value.trim();

    const applianceSelect = document.getElementById('appliance-dropdown').value.trim();
 

    // Reset previous errors
    resetErrors();

    let isValid = true;

    if (!applianceName && !applianceSelect) {
        setError('appliance', 'Please enter or select appliance name .');
        isValid = false;
    }

    if (!power) {
        setError('power', 'Please enter the energy usage.');
        isValid = false;
    }

    if (!util || isNaN(util) || parseFloat(util) <= 0) {
        setError('util', 'Please enter or select a valid utility rate.');
        isValid = false;
    }

    if (!hours || isNaN(hours) || hours <= 0 || hours > 24) {
        setError('hours', 'Please enter a valid number of hours per day.');
        isValid = false;
    }

 
    if (!days || isNaN(days) || days <= 0) {
        setError('days', 'Please enter a valid number of days per month.');
        isValid = false;
    }

    // Return the final validation status
    return isValid;
}

// Function to reset all error states
function resetErrors() {
    const formDivs = document.querySelectorAll('form div');
    formDivs.forEach(div => {
        div.classList.remove('error'); 
    });

    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(message => {
        message.textContent = ''; 
        message.style.visibility = 'hidden'; 
    });
}

// Function to set error message below the input/select field
function setError(sectionId, message) {
    const errorMessage = document.getElementById(sectionId + '-error');
    
    if (errorMessage) {
        errorMessage.textContent = message; 
        errorMessage.style.visibility = 'visible'; 
    }
}
