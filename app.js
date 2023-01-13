var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var checkBtn = document.querySelector("#btn");
var totalNotes = document.querySelectorAll(".no-of-notes");
var message = document.querySelector("#invalid-message");
var arr = [2000, 500, 100, 20, 10, 5, 1]

billAmount.addEventListener("keydown", function(event){
    cashGiven.disabled = false;
})

checkBtn.addEventListener("click", function(){

    var change = cashGiven.value - billAmount.value;

    if(billAmount.value > 0){
        if(change >= 0){
            for (var i = 0; i < arr.length; i++) {
                var res = Math.floor(change / arr[i]);
                totalNotes[i].innerHTML = res;
                // console.log(res)
                // console.log(res + " " + arr[i] + " note")
                change = change - res*arr[i]
            }
        }else{
            showMessage("That's insufficient you SOB.");
        }
    }else if(!(Number(billAmount.value) - 0)){
        // console.log(typeof(Number(billAmount.value))-0)
        showMessage("Enter a numeric value greater than 0.")
    }else {
        showMessage("⚠ Enter valid bill amount.");
    }

})

function showMessage(error){
    message.innerHTML = error;
}