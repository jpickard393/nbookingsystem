import Booking from "./booking";
import Equipment from './Equipment';

describe('Booking',()=>{
    // SUT is Booking
    
    let booking;

    beforeEach(() =>{
        booking = new Booking(1, "20/09/2022", "09:00:00",Equipment['Overhead Projector']);
    });

    it('SHOUD return the correct values from the consructor',() => {
        expect(booking._roomId).toBe(1);
        expect(booking._bookingDate).toBe("20/09/2022");
        expect(booking._bookingTime).toBe("09:00:00");
        expect(booking._equipment).toBe(Equipment['Overhead Projector']);
    });

    it('SHOULD have the correct roomId',()=>{
        expect(booking.RoomId).toBe(1);
    });

    it('SHOULD have the correct booking date',()=>{
        expect(booking.BookingDate).toBe("20/09/2022");
    });

    it('SHOULD have the correct booking time',()=>{
        expect(booking.BookingTime).toBe("09:00:00");
    });
});