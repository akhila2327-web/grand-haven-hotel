const bookingForm = document.getElementById("booking-form");

if (bookingForm) {
  bookingForm.addEventListener('submit', function (event) {
    event.preventDefault();



    const checkIn = document.getElementById("check-in").value;
    const checkOut = document.getElementById("check-out").value;
    const guests = document.getElementById("guests").value;

    if (!checkIn || !checkOut) {
      alert("Please select both a check-in and checkout date.");
      return;
    }

    if (checkOut <= checkIn) {
      alert("Check-out date must be after check-in date.");
      return;
    }

    window.location.href =
      "reservations.html?checkIn=" + checkIn +
      "&checkOut=" + checkOut +
      "&guests=" + guests;

  })

};

const roomPrices = {
  "deluxe-king": 189,
  "ocean-view": 350,
  "suite-room": 500
};


const reservationForm = document.getElementById("reservation-form");

if (reservationForm) {

  const params = new URLSearchParams(window.location.search);

  const checkInFromHome = params.get("checkIn");
  const checkOutFromHome = params.get("checkOut");
  const guestsFromHome = params.get("guests");

  if (checkInFromHome) {
    document.getElementById("check-in").value = checkInFromHome;
  }

  if (checkOutFromHome) {
    document.getElementById("check-out").value = checkOutFromHome;
  }

  if (guestsFromHome) {
    document.getElementById("guests").value = guestsFromHome;
  }





  reservationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const checkIn = document.getElementById("check-in").value;
    const checkOut = document.getElementById("check-out").value;
    const guests = document.getElementById("guests").value;
    const room = document.getElementById("room").value;

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    if (!firstName || !lastName || !email || !phone) {
      alert("Please complete all guest information.");
      return;
    }

    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!checkIn || !checkOut) {
      alert("Please select both a check-in and checkout date.");
      return;
    }

    if (checkOut <= checkIn) {
      alert("Check-out date must be after check-in date.");
      return;
    }

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    const difference = checkOutDate - checkInDate;

    const nights = difference / (1000 * 60 * 60 * 24);

    const pricePerNight = roomPrices[room];
    const totalPrice = nights * pricePerNight;

    document.getElementById("total-price").textContent =
      "Total: $" + totalPrice;
  });
}


