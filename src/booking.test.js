import Booking from "./booking";

describe('Booking',()=>{
    // SUT is Booking
    
    let booking;

    // Test Names  -- fix

    // dont forget the test names and descriptions are very important.

    // make a checklist for next week

    beforeEach(() =>{
        booking = new Booking(1, "20/09/2022", "09:00:00");
    });

    it('SHOULD return a booking with the id 1',()=>{
        expect(booking.RoomId).toBe(1);
    });

    it('SHOULD return the correct booking date',()=>{
        expect(booking.BookingDate).toBe("20/09/2022");
    });

    it('SHOULD return the correct booking time',()=>{
        expect(booking.BookingTime).toBe("09:00:00");
    });
});