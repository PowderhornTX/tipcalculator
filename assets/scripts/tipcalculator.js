let q = document.querySelector.bind(document);
let qa = document.querySelectorAll.bind(document);
let qi = document.getElementById.bind(document);

let partySize = Number(qi('numberOfPeople').value);
let ratings = ['oneStar', 'twoStar', 'threeStar', 'fourStar', 'fiveStar'];
let submit = qi('submit');
let qos = 0;

let finalBill = {
    bill: 0,
    tip: 0,
    total: 0,
    getTotal: function() {
        for (let i in ratings) {
            if (qi(ratings[i]).checked) {
                qos = qi(ratings[i]).value;
            }
        }
       
        this.bill = Number(qi('price').value);
        this.tip = (qos / 100) * this.bill;
        this.total = this.bill + this.tip;

        qi('tipAmount').innerHTML = this.tip;
        qi('grandTotal').innerHTML = this.total;
        qi('sharePerPerson').innerHTML = this.total / partySize;
    }
}

submit.addEventListener('click', finalBill.getTotal);
