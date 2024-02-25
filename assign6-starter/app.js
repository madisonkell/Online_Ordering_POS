import Menu from "./menudata.js";
console.log(Menu);



let hidden = false;
let cartCount = 0;
let cartTotalIDs = [];
let total = 0;
const tax = .065;

// selecting parts of the hmtl to run through. Menu.length is running through each of the menu items given.
// setting the attributes so we can change them in the js to what we are wanting, so each card is different 
// and not the same card 10 times
function cardFunction() {
  for (let i = 0; i < Menu.length; ++i) {
      const menuDiv = document.querySelector("#menu");
      const itemDiv = document.createElement("div");
      itemDiv.setAttribute("id","item-"+Menu[i].idMeal);
      itemDiv.setAttribute("class","col");
      const cardDiv = document.createElement("div");
      cardDiv.setAttribute("class","card h-100");
      const img = document.createElement("img");
      img.src=Menu[i].strMealThumb;
      img.className="card-img-top";
      img.alt="...";

// creating my body div, that we will append after we set its attributes
      const cardBodyDiv = document.createElement("div");
      cardBodyDiv.setAttribute("class","card-body");
    
// creating my card header, that we will append after we set its attributes
// setting innerText to each index looped through in strmeal
      const cardH5 = document.createElement("h5");
      cardH5.setAttribute("class","card-title");
      cardH5.innerText=Menu[i].strMeal;

// creating the card element set to p and setting the attribute, looping through each of the 
// str elements through each if loop. This also adds a comma between the ingredients in the list
      const cardText = document.createElement("p");
      cardText.setAttribute("class","card-text");
      if (Menu[i].strIngredient1)
          cardText.innerText=Menu[i].strIngredient1 + ",";
      if (Menu[i].strIngredient2)
          cardText.innerText+=" " + Menu[i].strIngredient2 + ",";
      if (Menu[i].strIngredient3)
          cardText.innerText+=" " + Menu[i].strIngredient3 + ",";
      if (Menu[i].strIngredient4)
          cardText.innerText+=" " + Menu[i].strIngredient4 + ",";
       if (Menu[i].strIngredient5)      
          cardText.innerText+=" " + Menu[i].strIngredient5 + ",";
      if (Menu[i].strIngredient6)
          cardText.innerText+=" " + Menu[i].strIngredient6 + ",";
      if (Menu[i].strIngredient7)
          cardText.innerText+=" " + Menu[i].strIngredient7 + ",";
      if (Menu[i].strIngredient8)
          cardText.innerText+=" " + Menu[i].strIngredient8 + ",";
      if (Menu[i].strIngredient9)
          cardText.innerText+=" " + Menu[i].strIngredient9 + ",";
      if (Menu[i].strIngredient10)
          cardText.innerText+=" " + Menu[i].strIngredient10 + ",";
      if (Menu[i].strIngredient11)
          cardText.innerText+=" " + Menu[i].strIngredient11 + ",";
      if (Menu[i].strIngredient12)
          cardText.innerText+=" " + Menu[i].strIngredient12 + ",";
      if (Menu[i].strIngredient13)
          cardText.innerText+=" " + Menu[i].strIngredient13 + ",";
      if (Menu[i].strIngredient14)
          cardText.innerText+=" " + Menu[i].strIngredient14 + ",";
      if (Menu[i].strIngredient15)
          cardText.innerText+=" " + Menu[i].strIngredient15 + ",";
      if (Menu[i].strIngredient16)
          cardText.innerText+=" " + Menu[i].strIngredient16 + ",";
      if (Menu[i].strIngredient17)
          cardText.innerText+=" " + Menu[i].strIngredient17 + ",";
      if (Menu[i].strIngredient18)
          cardText.innerText+=" " + Menu[i].strIngredient18 + ",";
      if (Menu[i].strIngredient19)
          cardText.innerText+=" " + Menu[i].strIngredient19 + ",";
      if (Menu[i].strIngredient20)
          cardText.innerText+=" " + Menu[i].strIngredient20 + ",";
// 
      let cardFooterDiv = document.createElement("div");
      cardFooterDiv.setAttribute("class","card-footer");
      let cardCost = document.createElement("p");
      cardCost.setAttribute("class","text-center");
      cardCost.innerText='$'+ Menu[i].price;
      let cardButton = document.createElement("button");
      cardButton.id="item-" + Menu[i].idMeal + "-add";
      cardButton.value=Menu[i].idMeal;
      cardButton.setAttribute("class","btn btn-warning col-12");
      cardButton.innerText="Add to Cart";

      cardDiv.appendChild(img);
      cardDiv.appendChild(cardBodyDiv);
      cardFooterDiv.appendChild(cardCost);
      cardFooterDiv.appendChild(cardButton);
      cardDiv.appendChild(cardFooterDiv);
      cardBodyDiv.appendChild(cardH5);
      cardBodyDiv.appendChild(cardText);
      itemDiv.appendChild(cardDiv);
      menuDiv.appendChild(itemDiv);
  }
}



      
  function addToCart(itemID) {
    cartCount++;
    if (!hidden) {
        var x = document.getElementById("empty-cart");
        if (x.style.display === "none") {
            x.style.display = "block";
          } else {
            x.style.display = "none";
          }
        hidden = true;
        document.getElementById("btnCheckout").disabled = false;
    }
    let valueIncrement = getItemNumber(itemID);
   
    const cartSection = document.querySelector("#cart");
    const itemThere = document.getElementById("cart-" + Menu[valueIncrement].idMeal + "-del");
    if (!itemThere) {

        const cartDiv = document.querySelector("#cart");
        const cardDiv = document.createElement("div");
        cardDiv.setAttribute("class","card");
        cardDiv.setAttribute("id","cart-" +  itemID);
        const rowDiv = document.createElement("div");
        rowDiv.setAttribute("class","row g-0");
        const colDiv = document.createElement("div");
        colDiv.setAttribute("class","col-md-4");
        const img = document.createElement("img");
        img.src=Menu[valueIncrement].strMealThumb;
        img.alt="...";
        img.className="img-fluid";
        const bodyDiv = document.createElement("div");
        bodyDiv.setAttribute("class","col-md-8");
        const cardBodyDiv = document.createElement("div");
        cardBodyDiv.setAttribute("class","card-body");
        const cardH5 = document.createElement("h5");
        cardH5.setAttribute("class","card-title");
        cardH5.innerText=Menu[valueIncrement].strMeal;
        const cardText = document.createElement("p");
        cardText.setAttribute("class","card-text");
        const smallText = document.createElement("small");
        smallText.setAttribute("class","text-muted");
        smallText.innerText='$' + Menu[valueIncrement].price;
        let cardButton = document.createElement("button");
        cardButton.id="cart-" + Menu[valueIncrement].idMeal + "-del";
        cardButton.value=Menu[valueIncrement].idMeal;
        cardButton.setAttribute("class","btn btn-danger");
        cardButton.innerText="Remove";

        cartDiv.appendChild(cardDiv);
        cardDiv.appendChild(rowDiv);
        rowDiv.appendChild(colDiv);
        rowDiv.appendChild(bodyDiv);
        colDiv.appendChild(img);
        bodyDiv.appendChild(cardBodyDiv);
        cardBodyDiv.appendChild(cardH5);
        cardText.appendChild(smallText);
        cardBodyDiv.appendChild(cardText);
        cardBodyDiv.appendChild(cardButton);
        cartTotalIDs.push(itemID);

        let checkoutButton = document.querySelector("#btnCheckout");
        checkoutButton.addEventListener('click',()=>{
            const modalFooter = document.querySelector("#total");
            const modalTotal = document.getElementById("total-row");
            if (modalTotal)
                modalTotal.remove();
            showSummary();
        });

        let button = document.querySelector("#cart-" + Menu[valueIncrement].idMeal + "-del");
        button.addEventListener('click', ()=>{
          const modalSummary = document.querySelector("#summary");
          const modalItem = document.getElementById("summary-" + Menu[valueIncrement].idMeal + "-row");
          if (modalItem) {
            modalItem.remove();
            total-=parseFloat(Menu[valueIncrement].price);
          }
          removeFromCart(button.value);
        });
    }
  }




  function removeFromCart(itemID) {
    cartCount--;
    if (cartCount === 0) {
        var x = document.getElementById("empty-cart");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
        hidden = false;
        document.getElementById("btnCheckout").disabled = true;
    }
    let valueIncrement = getItemNumber(itemID);
    const cartDiv = document.querySelector("#cart");
    const cardDiv = document.getElementById("cart-" + Menu[valueIncrement].idMeal);
    cardDiv.remove();

    for( var i = 0; i < cartTotalIDs.length; i++){
        if ( cartTotalIDs[i] === itemID) {
            cartTotalIDs.splice(i, 1);
            break;
        }
    }
}


  function showSummary() {
    for (let i = 0; i < cartTotalIDs.length; ++i) {
        const valueIncrement = getItemNumber(cartTotalIDs[i]);
        const summaryDiv = document.querySelector("#summary");
        const rowDiv = document.createElement("div");
        rowDiv.setAttribute("id","summary-" + Menu[valueIncrement].idMeal + "-row");
        rowDiv.setAttribute("class","row");
        const col1Div = document.createElement("div");
        col1Div.setAttribute("class","col-8");
        col1Div.innerText= Menu[valueIncrement].strMeal;
        const col2Div = document.createElement("div");
        col2Div.setAttribute("class","col-4");
        col2Div.innerText= '$' + Menu[valueIncrement].price;
        summaryDiv.appendChild(rowDiv);
        rowDiv.appendChild(col1Div);
        rowDiv.appendChild(col2Div);
        total+=parseFloat(Menu[valueIncrement].price);
        document.getElementById("cart-"+Menu[valueIncrement].idMeal+"-del").disabled = true;
    }
    /*

    */
    const summaryDiv = document.querySelector("#total");
    const rowDiv = document.createElement("div");
    rowDiv.setAttribute("id","total-row");
    rowDiv.setAttribute("class","row");
    const col1Div = document.createElement("div");
    col1Div.setAttribute("class","col-8");
    col1Div.innerText="SubTotal";
    const col2Div = document.createElement("div");
    col2Div.setAttribute("class","col-4");
    let taxTotal = parseFloat(total*tax);
    col2Div.innerText='$' + total.toFixed(2);
    const tax1Div = document.createElement("div");
    tax1Div.setAttribute("class","col-8");
    tax1Div.innerText="Taxes and Fees (6.5%)";
    const tax2Div = document.createElement("div");
    tax2Div.setAttribute("class","col-4");
    tax2Div.innerText='$' + taxTotal.toFixed(2);
    const grand1Div = document.createElement("div");
    grand1Div.setAttribute("class","col-8");
    grand1Div.innerText="Grand Total";
    const grand2Div = document.createElement("div");
    grand2Div.setAttribute("class","col-4");
    let grandTotal = parseFloat(total + taxTotal);
    grand2Div.innerText='$' + grandTotal.toFixed(2);

    summaryDiv.appendChild(rowDiv);
    rowDiv.appendChild(col1Div);
    rowDiv.appendChild(col2Div);
    rowDiv.appendChild(tax1Div);
    rowDiv.appendChild(tax2Div);
    rowDiv.appendChild(grand1Div);
    rowDiv.appendChild(grand2Div);
    cartTotalIDs = [];


// finding btncheckout and setting it to disabled until somehting is added to the cart
    document.getElementById("btnCheckout").disabled = true;
    for (let i = 0; i < Menu.length; ++i) {
      let delButton = document.getElementById("cart-"+Menu[i].idMeal+"-del")
            if (delButton && delButton.disabled === true) {
               document.getElementById("cart-"+Menu[i].idMeal+"-del").disabled = false;
               removeFromCart(delButton.value);
            }
      };
// closing the 'alert' once the checkout is clicked 
    let checkoutButton = document.querySelector("#close-modal");
    checkoutButton.addEventListener('click',()=>{
        for (let i = 0; i < Menu.length; ++i) {
            const modalSummary = document.querySelector("#summary");
            const modalItem = document.getElementById("summary-" + Menu[i].idMeal + "-row");
            if (modalItem) {
                modalItem.remove();
                total-=parseFloat(Menu[i].price);
            }
        }
        const modalFooter = document.querySelector("#total");
        const modalTotal = document.getElementById("total-row");
        if (modalTotal)
            modalTotal.remove();
        total = 0;
    });
    let checkoutXButton = document.querySelector("#close-x-modal");
    checkoutXButton.addEventListener('click',()=>{
        for (let i = 0; i < Menu.length; ++i) {
            const modalSummary = document.querySelector("#summary");
            const modalItem = document.getElementById("summary-" + Menu[i].idMeal + "-row");
            if (modalItem) {
                modalItem.remove();
                total-=parseFloat(Menu[i].price);
            }
        }
        const modalFooter = document.querySelector("#total");
        const modalTotal = document.getElementById("total-row");
        if (modalTotal)
            modalTotal.remove();
        total = 0;
    });

}

    cardFunction();
    document.getElementById("btnCheckout").disabled = true;

    for (let i = 0; i < Menu.length; ++i) {
        let button = document.querySelector("#item-" + Menu[i].idMeal + "-add");
        button.addEventListener('click', ()=>{
          addToCart(button.value);
        });
    }
    function getItemNumber(itemID) {
      for (let i = 0; i < Menu.length; ++i) {
          if (Menu[i].idMeal === itemID)
              return i;
      }
  }

