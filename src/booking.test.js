import Booking from "./booking";

describe ('Booking',()=>{
    const booking = new Booking('board room','08:00','10:00');

    test('it SHOULD return a list of bookings',() => {
        expect(booking.getBookings()).toBeTruthy();
    });

    test('it SHOULD return true if booking is valid', () => {
        expect (booking.validateBooking().toBeTruthy());
    });

    test('it SHOULD return true if booking is correct time format', () => {
        expect (booking.isCorrectTimeFormat().toBeTruthy());
    });
});