let inp = document.getElementById("input-text");

inp.addEventListener("input", ch);

function ch() {
  let a = inp;
  // console.log(a.value.length);
  let spa = document.getElementById("last");

  spa.textContent = 60 - a.value.length;
}
