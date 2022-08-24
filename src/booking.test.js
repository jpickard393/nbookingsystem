import Booking from "./booking";

// SUT
const booking = new Booking();

describe ('Booking',()=>{
    // Arrange
    const bookedHour = {timeBooked: '08:00'};

    test('it SHOULD return true when a booking is added successfully',() => {
        expect(booking.addBooking(bookedHour)).toBe(true);
    });

    // Green
    test('it SHOULD return an array of 1 bookedHour',() => {
        expect(booking.getBookedHours()).toHaveLength(1);
    });

    test('it SHOULD return False when bookedHour is not a duplicate', () => {
        expect (booking.isNotDoubleBooked(bookedHour)).toBe(true);
    });

    // Red
    test('it SHOULD return true if bookedHour is correct time format', () => {
        expect (booking.isCorrectTimeFormat(bookedHour)).toBe(true);
    });
});