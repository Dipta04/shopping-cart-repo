function updateCaseNumber(isIncrease)
{
   // step-2
    // get the value of case number field(input field)
    const caseNumberField=document.getElementById('case-number-field');
    const caseNumberString=caseNumberField.value;
    // step-3
    // convert it in integer
    const previousCaseNumber=parseInt(caseNumberString);
    // step-4
    // calculate the new case number
    let newCaseNumber;
    if(isIncrease===true)
    {
        newCaseNumber=previousCaseNumber+1;
    }
else{
    newCaseNumber=previousCaseNumber-1;
}
    // step-5
    // set the value
    caseNumberField.value=newCaseNumber; 
    return newCaseNumber; 
}

function updateCaseTotalPrice(newCaseNumber)
{
    const caseTotalPrice=newCaseNumber*59;
   const caseTotalElement=document.getElementById('case-total');
   caseTotalElement.innerText=caseTotalPrice;
}



// step-1
// add event listener to the plus button
document.getElementById('btn-case-plus').addEventListener('click',function(){
   const newCaseNumber= updateCaseNumber(true);
  updateCaseTotalPrice(newCaseNumber);
  calculateSubtotal();
})

document.getElementById('btn-case-minus').addEventListener('click',function(){
   const newCaseNumber= updateCaseNumber(false);
  
  updateCaseTotalPrice(newCaseNumber);
  calculateSubtotal();
})