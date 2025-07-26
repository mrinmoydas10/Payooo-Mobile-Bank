document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault();
    const amount = document.getElementById('amount-number').value;
    const convertedAmount = parseFloat(amount);
    const pinNumber = document.getElementById('pin-number').value;
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    if(amount && pinNumber){

    
    if(pinNumber === '1234'){
        const sum = convertedMainBalance + convertedAmount;
        document.getElementById('main-balance').innerText = sum;

    }
    else{
        alert('Enter Valid Pin');

    }
    }
    else{
        alert('Enter Amount');
    }

})