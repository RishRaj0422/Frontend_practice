
// function x(){
//     var i =1;
//     setTimeout(function() {
//         console.log(i);
//     }, 3000);
//     console.log("you can do it man");
// }
// x();

function attachEventListeners() {
    let count = 0;
    document.getElementById("clickMe").addEventListener("click", function rish(){
        console.log("button clicked", ++count);
    });
}
attachEventListeners();


// function rish() {
//     console.log("button clicked");
// }

// document.getElementById("clickMe").addEventListener("click", rish);

// document.getElementById("clickMe").addEventListener("click", function() {
//     console.log("Button clicked");
// });
