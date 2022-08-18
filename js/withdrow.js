document.getElementById('withdrow-btn').addEventListener('click', function() {
    const withdrowBtn = getInputFieldID('withdrow-field');
    
    // Total Withdrow Ammount 
    const withdrowAmmount = getTextElementID('withdrow-ammount');
    const TotalWithdrow = withdrowAmmount + withdrowBtn;
    
    // Set total withdrow value 
    setTheDepositValue ('withdrow-ammount', TotalWithdrow);

    // New Ballance after Withdrow
    const currentBallance = getTextElementID('total-ammount');
    const newBallance = currentBallance - withdrowBtn;
    setTheDepositValue ('total-ammount', newBallance);

    
});