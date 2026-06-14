let count = 0;

function addToCart(){

    count++;

    document.getElementById("cart").innerHTML =
    "Cart Items : " + count;

}