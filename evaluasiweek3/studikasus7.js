const myPromise = new Promise(function(myResolve) {
  setTimeout(function(){ myResolve("data telah didapatkan"); }, 3000);
});

myPromise.then(function(value) {
  document.getElementById("demo").innerHTML = value;
})