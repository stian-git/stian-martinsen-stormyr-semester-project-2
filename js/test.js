import addProduct from "./components/api/addProduct.js";

const addButton = document.querySelector("button.add");
addButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Click!");
    const prodObj = JSON.stringify({
        data: {
            title: "Test Product 3",
            description: "This is a test product.",
            price: 666,
            stock: 666,
            productnumber: "66666",
            image_url: "https://www.google.com",
            isProductionStopped: true,
            featured: false,
        },
    });

    addProduct(prodObj);
});
