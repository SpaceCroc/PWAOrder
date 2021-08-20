// your javascript here
const DRINK_PRICE = 3;

let meatPriceObj = {
    "chicken": 15,
    "pork": 15,
    "beef": 17,
    "vegetarian": 13
}

let sidePriceObj = {
    "kimchi": 4,
    "radish": 3
}

let inputValidationObj = {
    "meat": ["chicken", "pork", "beef", "vegetarian"],
    "kimchi": ["yes", "no"],
    "spicy": ['0', '1', '2', '3', '4', '5'],
    "radish": ["yes", "no"]
}

function getPrice(meat, kimchi, radish, drink) {
    let meatPrice = meatPriceObj[meat.toLowerCase()];
    let sidePrice = 0;
    let drinkPrice = 0;
    if (kimchi) {
        sidePrice += sidePriceObj[kimchi.toLowerCase()];
    }
    if (radish) {
        sidePrice += sidePriceObj[radish.toLowerCase()];
    }
    if (drink) {
        drinkPrice = DRINK_PRICE;
    }
    let totalPrice = (meatPrice + sidePrice + drinkPrice) + (meatPrice + sidePrice + drinkPrice) * 0.07;
    return totalPrice;
}


const onApprove = (data, actions) => {
    // This function captures the funds from the transaction.
    return actions.order.capture().then(function (details) {
        // This is where you would save the order to firebase and pouchdb
        console.log(details);
        alert("thank-you for your payment");
    });
}

//$(document).ready(() => {
function renderButton() {
    const aPaypalButtons = $(".paypal_button");

    for (let n = 0; n < aPaypalButtons.length; n++) {
        let sCost = $("#totalPrice").val();
        $(aPaypalButtons[n]).replaceWith(`<div id="${aPaypalButtons[n].id}" />`);
        paypal_sdk.Buttons({
            onApprove: onApprove,
            createOrder: function (data, actions) {
                // This function sets up the details of the transaction, including the amount and line item details.
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: sCost
                        }
                    }]
                });
            }
        }).render(`#${aPaypalButtons[n].id}`);
    }
}
//});


$("#orderBtn").click(function () {
    let meat = $("input[name='meat']:checked").val();
    let spicy = $("input[name='spicy']:checked").val();
    let kimchi = undefined;
    let sRadish = undefined;
    let drink = $("input[name='drink']:checked").val();

    if (meat == undefined || spicy == undefined) {
        alert("You must select Meat and Spiciness level");
        return;
    }
    $("input[name='side']:checked").each(function (i, v) {
        if (i == 0) {
            kimchi = "kimchi";
        } else {
            sRadish = "radish";
        }
    });
    let total = getPrice(meat, kimchi, sRadish, drink);
    $("#totalPrice").val(total);
    $("#totalMsg").html("Your Total is $" + total);
    renderButton();
});