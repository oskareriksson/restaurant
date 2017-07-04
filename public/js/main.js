const seats = document.querySelectorAll(".seat");
let selected = false;

function selectSeat(e) {
  console.log(selected);
  if(selected === false){
    this.style.backgroundColor = "yellow";
    selected = true;
    return;
  } else {
    this.style.backgroundColor = "green";
    selected = false;
    return;
  }
}

seats.forEach(seat => seat.addEventListener("click", selectSeat));