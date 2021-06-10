let q = document.querySelector.bind(document);
let qa = document.querySelectorAll.bind(document);
let qi = document.getElementById.bind(document);

/*

inputs: bill, number of people in party, QoS

outputs: bill with tip, divided bill with tip

tipAmount
grandTotal
perPerson

*/

//let bill = Number(qi('price').value);
let bill = Number(qi('price').value);
let partySize = Number(qi('numberOfPeople').value);
//let bill = Number(document.getElementById('price').value);
//let partySize = Number(document.getElementById('numberOfPeople').value);
let submit = qi('submit');

let ratings = qi('oneStar').checked;


//for (let item in )

let finalBill = {
    getTotal: function() {
        alert(bill);
        alert(partySize);
        alert(ratings); 
    }
}

submit.addEventListener('click', finalBill.getTotal);
