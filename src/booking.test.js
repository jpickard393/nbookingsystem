import Booking from "./booking";

// SUT
let booking = new Booking();
let bookedHour = null;

describe ('Booking',()=>{
    // Arrange
    beforeEach(()=>{
        bookedHour = {timeBooked: '08:00'};
    });

    afterEach(()=>{
        booking._bookedHours = [];
    });

    test('it SHOULD return true when a booking is added successfully',() => {
        expect(booking.createBooking(bookedHour)).toBe(true);
    });

    // **** Review - looks OK but we are testing two functions ****
    test('it SHOULD return an array of 1 bookedHour after adding a booking',() => {
        // Act
        booking.createBooking(bookedHour)

        // Assert
        expect(booking.getBookedHours()).toHaveLength(1);
    });

    test('it SHOULD return False when bookedHour is not a duplicate', () => {
        expect (booking.isNotDoubleBooked(bookedHour)).toBe(true);
    });

    test('it SHOULD return true if bookedHour is correct time format', () => {
        expect (booking.isCorrectTimeFormat(bookedHour)).toBe(true);
    });

    test('it SHOULD return true if bookedHour is not double booked and in correct time format', () => {
        expect (booking.validateBooking(bookedHour)).toBe(true);
    });
});