document.getElementById('cash-out').addEventListener('click', function(event){
    event.preventDefault();
    // const amount = document.getElementById('amount-number').value;
    // const convertedAmount = parseFloat(amount);
    const pinNumber = document.getElementById('cashout-pin').value;
    const amount = document.getElementById('cashout-amount').value;
    const convertedAmount = parseFloat(amount);
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    // if(amount && pinNumber){

    
    if(pinNumber === '1234'){
        const remain = convertedMainBalance - convertedAmount;
        document.getElementById('main-balance').innerText = remain;

    }
    else{
        alert('Enter Valid Pin');

    }
    // }
    // else{
    //     alert('Enter Amount');
    // }

})