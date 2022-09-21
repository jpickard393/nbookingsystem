import Booking from "./booking";
import Equipment from './Eqipment';

describe('Booking',()=>{
    // SUT is Booking
    
    let booking;

    beforeEach(() =>{
        booking = new Booking(1, "20/09/2022", "09:00:00", Equipment["Overhead Projector"]);
    });

    it('SHOULD return a booking with the id 1',()=>{
        expect(booking.getRoomId()).toBe(1);
    });

    it('SHOULD return the correct booking date',()=>{
        expect(booking.getBookingDate()).toBe("20/09/2022");
    });

    it('SHOULD return the correct booking time',()=>{
        expect(booking.getBookingTime()).toBe("09:00:00");
    });

    it('SHOULD return the correct equipment id',()=>{
        expect(booking.getEquipmentId()).toBe(1);
    });
});