
const myTimeout = setTimeout(myGreeting, 2000);

function myGreeting() {
  document.getElementById("demo").innerHTML = "Hello!"
}

function myFirst() {
  myDisplayer(myGreeting);
}

function mySecond() {

myDisplayer(myGreeting)

}

myFirst(console.log);
mySecond(console.log);