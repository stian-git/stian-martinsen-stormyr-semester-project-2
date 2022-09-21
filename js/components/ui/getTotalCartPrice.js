import { totalPriceContainer } from "../variables.js";

export default function getTotalCartPrice() {
    const linePrices = document.querySelectorAll(".lineprice");
    let sum = 0;
    linePrices.forEach((element) => {
        const lineprice = parseFloat(element.innerHTML);
        sum += lineprice;
    });
    totalPriceContainer.innerHTML = sum.toFixed(2);
}
