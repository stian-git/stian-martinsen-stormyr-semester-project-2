export default function getTotalCartPrice() {
    const priceContainer = document.querySelector(".cartsummary-price");
    const linePrices = document.querySelectorAll(".lineprice");
    let sum = 0;
    linePrices.forEach((element) => {
        const lineprice = parseFloat(element.innerHTML);
        sum += lineprice;
    });
    console.log(sum);
    priceContainer.innerHTML = sum.toFixed(2);
}
