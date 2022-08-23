import Booking from "./booking";

describe ('Booking',()=>{
    const booking = new Booking();
    booking.addBooking('08:00');

    // Green
    test('it SHOULD return a array of 1 bookedHours',() => {
        expect(booking.getBookedHours()).toHaveLength(1);
    });

    // no functionality yet.  Still red
    test('it SHOULD return true if bookedHour is valid', () => {
        expect (booking.validateBooking().toBeTruthy());
    });

    test('it SHOULD return true if bookedHour is correct time format', () => {
        expect (booking.isCorrectTimeFormat().toBeTruthy());
    });
});