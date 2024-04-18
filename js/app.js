document.querySelector("button").addEventListener("click", function () {
    document.querySelector("div").textContent = "Anda Umur, " + document.querySelector("input").value;
    var myLight = parseInt(document.querySelector("input").value);
    console.log(myLight);
    if (myLight <= 18) {
        console.log("Tidak boleh masuk");
    } else {
        console.log("Silahkan Masuk")
    }
})


// var message;
// console.log(message);
// message = null;
// console.log(message);

// var score1, score2, score3, score4;
// var a = "Hello”;
// var b = 10;
// var c = false; 
// console.log(a);

