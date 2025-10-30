document.getElementById('cost-form').addEventListener('submit', function(event){
    event.preventDefault();

    clearErrors();

    const applianceName = document.getElementById('appliance-input').value;
    const power = document.getElementById('power-input').value;
    const util = document.getElementById('util-input').value;
    const hours = document.getElementById('hours-input').value;
    const days = document.getElementById('days-input').value;

    let isValid = true;

    //Appliance Validation
    if(applianceName.trim()===''){
        showError()
    }
});