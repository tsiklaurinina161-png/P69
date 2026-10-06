let products = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Strawberry",
    "Watermelon",
    "Pineapple"
];

let searchInput = document.getElementById("searchInput");
let results = document.getElementById("results");

searchInput.onkeyup = function(){

    let value = searchInput.value.trim();

    
if (value === "") {
    results.innerHTML = "";
    return;
}

    let filteredResults = products.filter(function(product){
        return product.toLowerCase().includes(value.toLowerCase());
    });

    let content = filteredResults.map(function(product){
        return `<li onclick="selectedProduct(this)">${product}</li>`;
    });
    results.innerHTML = `<ul>${content.join("")}</ul>`;
};
