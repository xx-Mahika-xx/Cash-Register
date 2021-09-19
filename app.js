const billAmount=document.querySelector("#bill-amount");
const cashGiven=document.querySelector("#cash-given");
const checkButton=document.querySelector("#btncalc");
const message=document.querySelector("#error-message");

const availableNotes=[2000,500,100,20,10,5,1];
const noOfNotes = document.querySelectorAll(".no-of-notes");

checkButton.addEventListener("click", function validateBillCash(){

    message.style.display="none";
    if(billAmount.value>0)
    {
        if(cashGiven.value-billAmount.value>=billAmount.value)
        {
            const amountReturned=cashGiven.value-billAmount.value;
            calculateChange(amountReturned);
        }
        else 
        {
            message.style.display="block";
            message.innerText="Cash should be Greater or Equal to Bill Amount!"
        }
    }
    else
    {
        message.style.display="block";
        message.innerText="Invalid Bill Amount";
    }
})

function calculateChange(amountReturned)
{
   for(let i=0;i<availableNotes.length;i++)
   {
       const numberofNotes=Math.trunc(amountReturned/availableNotes[i]);
       amountReturned%=availableNotes[i];
       noOfNotes[i].innerText=numberofNotes;
   }
}



