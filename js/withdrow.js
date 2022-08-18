document.getElementById('withdrow-btn').addEventListener('click', function() {
    const withdrowBtn = getInputFieldID('withdrow-field');
    
    // Total Withdrow Ammount 
    const withdrowAmmount = getTextElementID('withdrow-ammount');
    const TotalWithdrow = withdrowAmmount + withdrowBtn;
    
    

    // New Ballance after Withdrow
    const currentBallance = getTextElementID('total-ammount');

    if(withdrowBtn>currentBallance) {
        alert('Your account have less money than $'+ withdrowBtn);
        return;
    }

    // Set total withdrow value in the Withrow Ballance
    setTheDepositValue ('withdrow-ammount', TotalWithdrow);

    const newBallance = currentBallance - withdrowBtn;
    setTheDepositValue ('total-ammount', newBallance);

    

    
});