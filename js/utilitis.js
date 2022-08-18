function getInputFieldID (inputID) {
    const depositBtn = document.getElementById(inputID);
    const depostiBtnString = depositBtn.value;
    const newDeposit = parseFloat(depostiBtnString);
    depositBtn.value = '';
    return newDeposit;
}

function getTextElementID (textID) {
    const depositAmmount = document.getElementById(textID);
    const depositAmmountString = depositAmmount.innerText;
    const newDepositAmmount = parseFloat(depositAmmountString);
    return newDepositAmmount;
}

function setTheDepositValue (prevAmmount, newAmmount) {
    const setPrevAmmount = document.getElementById(prevAmmount);
    setPrevAmmount.innerText = newAmmount;
}