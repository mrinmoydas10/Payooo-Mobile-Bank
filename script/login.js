document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;
    // console.log(accountNumber);

    const pinNumber = document.getElementById('pin-number').value;
    // console.log(pinNumber);
    if(accountNumber.length === 11){
        // console.log('yes');
        if(pinNumber === '1234'){
            window.location.href="/main.html";
        }
        else{
            alert('Need a Valid Pin');
        }
    }
    else{
         alert('Need a Valid Number');
    }

})