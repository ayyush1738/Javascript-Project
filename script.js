const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const container = document.querySelector('.container');

let ticketPrice = +movieSelect.value;

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  // const seatIndex = [...selectedSeats].map(function(Seat) {
  //   return [...seats].indexOf(seat)
  // });

  // console.log(seatIndex)

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// Movie select event
movieSelect.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});

// Seat click event
for (let seat of seats) {
  seat.addEventListener('click', e => {
    if (!seat.classList.contains('occupied')) {
      seat.classList.toggle('selected');

      updateSelectedCount();
    }
  });
}
