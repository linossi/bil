function calculateTotal() {
    var carType = document.getElementById('car-type').value;
    var rentalDate = new Date(document.getElementById('rental-date').value);
    var returnDate = new Date(document.getElementById('return-date').value);
    var extrasTotal = 0;

    if (document.getElementById('gps').checked) {
        extrasTotal += 50; // Pris for GPS
    }
    if (document.getElementById('child-seat').checked) {
        extrasTotal += 30; // Pris for barnesete
    }
    if (document.getElementById('extra-driver').checked) {
        extrasTotal += 40; // Pris for ekstra sjåfør
    }

    var rentalDays = Math.ceil((returnDate - rentalDate) / (1000 * 60 * 60 * 24)); // Antall dager utleid
    var basePricePerDay = getBasePricePerDay(carType); // Basert pris per dag avhengig av biltype
    var total = (basePricePerDay * rentalDays) + extrasTotal; // Totalsum

    document.getElementById('total').textContent = total + ' kr';
}

function getBasePricePerDay(carType) {
    // Her kan du implementere en logikk for å hente pris per dag basert på biltype fra en database eller en hardkodet liste
    switch (carType) {
        case 'compact':
            return 300;
        case 'sedan':
            return 400;
        case 'suv':
            return 500;
        case 'van':
            return 600;
        default:
            return 0;
    }
}
