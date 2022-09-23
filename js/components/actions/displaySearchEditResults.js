export default function displaySearchEditResults(arr) {
    const rowContainer = document.querySelector(".producttable tbody");
    const productTable = document.querySelector("table.producttable");
    productTable.style.display = "table";
    rowContainer.innerHTML = "";
    arr.forEach((product) => {
        const prodId = product.id;
        const prodModel = product.attributes.productnumber;
        const prodPrice = product.attributes.price;
        const prodTitle = product.attributes.title;
        const prodStock = product.attributes.stock;
        const prodThumb = product.attributes.image_url;
        const prodIsStopped = product.attributes.isProductionStopped;
        const prodIsFeatured = product.attributes.featured;
        const prodDescription = product.attributes.description;
        const prodDescriptionHTML = prodDescription.replace(/(\r\n|\n|\r)/gm, "<br>");
        rowContainer.innerHTML += `
            <tr data-productid="${prodId}" class="producttable__row">
                <td class="producttable__row-field"><img src="${prodThumb}" class="thumbnail producttable__row-img"></td>
                <td class="producttable__row-field">${prodModel}</td>
                <td class="producttable__row-field">${prodTitle}</td>
                <td class="producttable__row-field">${prodPrice}</td>
            </tr>
            <tr class="additionalinfo producttable__row" data-productid="${prodId}">
                    <td colspan="3" class="proddescription producttable__row-field producttable__row-field-description">
                        ${prodDescriptionHTML}
                    </td>
                    <td class="producttable__row-field">
                        <p>Stock: ${prodStock}</p>
                        <p>Featured: ${prodIsFeatured}</p>
                        <p>End-Of-Sale: ${prodIsStopped}</p> 
                    </td>
                
            </tr>`;
    });
    const allProductLines = document.querySelectorAll(".producttable tbody tr");
    allProductLines.forEach((line) => {
        line.addEventListener("click", (e) => {
            let currentProdId = e.target.parentElement.dataset.productid;
            if (!currentProdId) {
                // Avoids a bug when clicking the thumbnail.
                currentProdId = e.target.parentElement.parentElement.dataset.productid;
            }
            window.location.href = "/admin/edit.html?id=" + currentProdId;
        });
        line.addEventListener("mouseover", (e) => {
            let currentProdId = e.target.parentElement.dataset.productid;
            if (!currentProdId) {
                // Avoids a bug caused by hovering the image.
                currentProdId = e.target.parentElement.parentElement.dataset.productid;
            }

            document.querySelector(`.additionalinfo[data-productid="${currentProdId}"]`).style.display = "table-row";
        });
        line.addEventListener("mouseout", (e) => {
            let currentProdId = e.target.parentElement.dataset.productid;
            if (!currentProdId) {
                //Avoids a bug when the current element is the thumbnail.
                currentProdId = e.fromElement.parentElement.parentElement.dataset.productid;
            }
            document.querySelector(`.additionalinfo[data-productid="${currentProdId}"]`).style.display = "none";
        });
    });
}
