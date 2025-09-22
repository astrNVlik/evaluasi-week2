function Displayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function hitungluas(x, y) {
  let sum = x + y;
  return sum;
}

let result = hitungluas(5, 5);
Displayer(result); 