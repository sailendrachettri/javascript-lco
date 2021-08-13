// var num1 = 34;
// var num2 = 5;

// D =(L - S)/L * 100
// Discount = (ListPrice - SellingPrice)/ ListPrice * 100

var sellingPrice = 199;
var listingPrice = 799;

var discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100;

// console.log("Discount percentage is " + discountPercent.toFixed(0) + "% off.");

var result = listingPrice > sellingPrice;

console.log(result)
console.log(typeof result)