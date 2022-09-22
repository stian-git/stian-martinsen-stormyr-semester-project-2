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
            <tr data-productid="${prodId}">
                <td><img src="${prodThumb}" class="thumbnail"></td>
                <td>${prodModel}</td>
                <td>${prodTitle}</td>
                <td>${prodPrice}</td>
            </tr>
            <tr class="additionalinfo" data-productid="${prodId}">
                    <td colspan="3" class="proddescription">
                        ${prodDescriptionHTML}
                    </td>
                    <td>
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
