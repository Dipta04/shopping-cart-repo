function getTextElementValueByID(elementId)
{
    const phoneTotalElement=document.getElementById(elementId);
    const currentPhoneTotalString=phoneTotalElement.innerText;
    const currentPhoneTotal=parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setTextElementValueById(elementId,value)
{
    const subTotalElement=document.getElementById(elementId);
    subTotalElement.innerText=value;
}

function calculateSubtotal()
{
    // calculate total
const currentPhoneTotal=getTextElementValueByID('phone-total');
const currentCaseTotal=getTextElementValueByID('case-total');

const currentSubTotal= currentPhoneTotal+currentCaseTotal;

setTextElementValueById('sub-total',currentSubTotal);
// calculate tax
const taxAmountString=(currentSubTotal*0.1).toFixed(2);
const taxAmount=parseFloat(taxAmountString);

setTextElementValueById('tax-amount',taxAmount);
// 0.1 mani 10 percent tax

const finalAmount=currentSubTotal+taxAmount;
setTextElementValueById('final-total',finalAmount);
}
