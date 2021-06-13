// set up some shorthand
let qi = document.getElementById.bind(document);

// array for finding tip percentage from radio buttons
let ratings = ['oneStar', 'twoStar', 'threeStar', 'fourStar', 'fiveStar'];
// assign submit button for event listener
let submit = qi('submit');

/*
//add a reset button
let reset = qi('reset');
*/

let finalBill = {
    bill: 0, // user input
    partySize: 0, // user input
    tip: 0, // output
    total: 0, // output
    getTotal: function() {

        // set tip percentage to zero
        let qos = 0;

        // find checked radio button
        for (let i in ratings) {
            if (qi(ratings[i]).checked) {
                qos = qi(ratings[i]).value;
            }
        }

        // alert and exit if star rating not specified
        if (qos == 0) {
            alert('Please select a rating for "Quality of Service."');
            return;
        }

        // get values from HTML file; store as numbers
        this.bill = Number(qi('price').value);
        this.partySize = Number(qi('numberOfPeople').value);

        // data validation; rejects values in either input box that are not positive numbers 
        if (this.bill <= 0 || this.partySize <= 0) {
            alert('Please enter a positive value for both "Price of Meal" and "Number of People."');
            return;
        }

        // calculate tip, assign grand total
        this.tip = (qos / 100) * this.bill;
        this.total = this.bill + this.tip;

        // replace HTML content
        qi('tipAmount').innerHTML = this.tip.toFixed(2);
        qi('grandTotal').innerHTML = this.total.toFixed(2);
        qi('sharePerPerson').innerHTML = (this.total / this.partySize).toFixed(2);
    }
}

//run when button is clicked
submit.addEventListener('click', finalBill.getTotal);

/*
//run when reset button is clicked
reset.addEventListener('click',
    function reset() {
        inputValue.value = "";
    reset();
    return false;
})
*/