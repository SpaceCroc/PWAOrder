const fetch = require('sync-fetch');
const Page = require("./_layout/Default");

module.exports = class extends Page {
    constructor(){
        super({title:"Home", sName:"Sungsoo Kim"});
    }
    render(sPage) {
        const oJson = fetch("https://prog8110summer2021-default-rtdb.firebaseio.com/meals.json").json();
        console.log(oJson);
        let sResult = "<h1>Upcoming Popup Meals</h1>";
        let n = 0;
        Object.keys(oJson).map((key) => {
            const oEntity = oJson[key];
            console.log(oEntity);
            oEntity.id = key;
            sResult += `
            <div class="main_div">
                <h2>Kim's Ramen</h2>
                <p><img src="img/ramyun.png" alt="Kim's Ramen"</p>
                <p>Delicious Ramen</p>

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
                <button id="orderBtn">Order Now</button>
                <br>
                <h2 id="totalMsg"></h2>
                <br>
                <form>
                    <input type="hidden" id="totalPrice" name="totalPrice" value="0">
                    <button id="button_${n++}" disabled class="paypal_button" style="display:none;">
                    Order now
                    </button>
                </form>
            </div>
            `;
        });
        return sResult;
    }
}