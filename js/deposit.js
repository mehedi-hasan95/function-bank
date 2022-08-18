document.getElementById('deposit-btn').addEventListener('click', function(){
    const newDepositAmmount = getInputFieldID('deposit-field');
    // Total Deposit Money 
    const currentDepositTotal = getTextElementID('deposit-ammount');
    const newDepositTotalAmmount = currentDepositTotal + newDepositAmmount;
    
    // set the value after deposit 
    setTheDepositValue ('deposit-ammount', newDepositTotalAmmount);

    // Total Ballance 
    const currentBallance = getTextElementID('total-ammount');
    const newAmmount = currentBallance + newDepositAmmount;
    setTheDepositValue ('total-ammount', newAmmount);
});