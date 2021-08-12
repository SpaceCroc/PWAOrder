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

  $("#orderBtn").click(function() {
      let meat = $("input[name='meat']:checked").val();
      let spicy  = $("input[name='spicy']:checked").val();
      let kimchi = undefined;
      let sRadish = undefined;
      let drink = $("input[name='drink']:checked").val();

      if (meat == undefined || spicy == undefined) {
        alert("You must select Meat and Spiciness level");
        return;
      }
      $("input[name='side']:checked").each(function(i, v) {
        if (i == 0) {
          kimchi = "kimchi";
        } else {
          sRadish = "radish";
        }
      });
      if ($("#phoneInput").val().length < 1) {
        alert("please enter your phone number");
        return;
      }
      $("#phoneForm").val($("#phoneInput").val());
      console.log(getPrice(meat, kimchi, sRadish, drink));
      $("#priceForm").val(getPrice(meat, kimchi, sRadish, drink));
      /*<form action="https://serene-taiga-04277.herokuapp.com/payment" method="post"> -->
            <input type="hidden" name="title" value="Summer supper" />
            <input type="hidden" name="price" value="21" />*/
      var queryString = $("form[name=orderForm]").serialize();
      console.log(queryString);
      $.ajax({
        type : 'post',
        crossDomain: true,
        //headers: "Access-Control-Allow-Origin: *",
        url : 'https://mobile-ramen-order.herokuapp.com/payment',
        data : queryString,
        dataType : 'jsonp',
        error: function(xhr, status, error){
          console.log(status);
            alert(error);
        },
        success : function(json){
          console.log("sus");
          console.log(json);
            alert(json)
        }
    });
  });