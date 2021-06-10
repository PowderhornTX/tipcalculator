let q = document.querySelector.bind(document);
let qa = document.querySelectorAll.bind(document);
let qi = document.getElementById.bind(document);

/*

inputs: bill, number of people in party, QoS

outputs: bill with tip, divided bill with tip

*/

//let bill = Number(qi('bill').value);
//let partySize = Number(qi('partysize').value);
let bill = Number(document.getElementById('bill').value);
let partySize = Number(document.getElementById('partysize').value);
let rating = null;
let submit = document.getElementById('submit');

submit.addEventListener('click', finalBill.getTotal);




let finalBill = {
    getTotal: function() {
        alert(bill);
    }
}
