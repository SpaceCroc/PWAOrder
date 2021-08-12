const fetch = require('sync-fetch');
const Page = require("./_layout/Default");

module.exports = class extends Page {
    constructor(){
        super({title:"Home", sName:"Kim"});
    }
    render(sPage) {
        // const oJson = fetch("https://prog8110summer2021-default-rtdb.firebaseio.com/meals.json").json();
        // console.log(oJson);
        let sResult = "<h1>Upcoming Popup Meals</h1>";
        // Object.keys(oJson).map((key) => {
        //     const oEntity = oJson[key];
        //     console.log(oEntity);
        //     oEntity.id = key;
            sResult += `<form name="orderForm">
            <h2>Korean Ramyun</h2>
            <p><img src="img/ramyun.png" alt="Summer supper"</p>
            <!-- <form action="https://mobile-ramen-order.herokuapp.com/payment" method="post"> -->
            <input type="hidden" name="title" value="Korean Ramen" />
            <input type="hidden" name="price" id="priceForm" value="NA" />
            <input type="hidden" name="telephone" id="phoneInput" value="0" />
            </form>
            <p><b>Choose your meat</b></p>
            <label><input type="radio" name="meat" value="vegetarian"> Vegetarian</label>&nbsp;
            <label><input type="radio" name="meat" value="beef"> Beef</label>&nbsp;
            <label><input type="radio" name="meat" value="pork"> Pork</label>&nbsp;
            <label><input type="radio" name="meat" value="chicken"> Chicken</label>&nbsp;<br><br>
            <p><b>Choose spiciness level</b></p>
            <label><input type="radio" name="spicy" value="1"> 1</label>&nbsp;
            <label><input type="radio" name="spicy" value="2"> 2</label>&nbsp;
            <label><input type="radio" name="spicy" value="3"> 3</label>&nbsp;
            <label><input type="radio" name="spicy" value="4"> 4</label>&nbsp;
            <label><input type="radio" name="spicy" value="5"> 5</label>&nbsp;<br><br>
            <p><b>Side</b></p>
            <label><input type="checkbox" name="side" value="kimchi"> Kimchi</label>&nbsp;
            <label><input type="checkbox" name="side" value="sRadish"> Sweet Radish</label>&nbsp;<br><br>
            <p><b>Drink</b></p>
            <label><input type="checkbox" name="drink" value="coke"> Coke</label>&nbsp;<br><br>
            <button id="orderBtn">Order now</button>
            `;
        // });
        return sResult;
    }
}