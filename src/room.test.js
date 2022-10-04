import Room from './Room';
import Equipment from './Equipment';
import Booking from './Booking';

jest.mock('./Booking');

describe ('Room',() => {
    
    const room = new Room(1,10,Equipment['Overhead Projector']);
    const booking = new Booking(1,'01/00/2022','10:00',Equipment['Overhead Projector']);
       
    it('SHOULD return 1 as the ID of the new Room',() => {
        expect(room.RoomId).toBe(1);
    });

    it('SHOULD return 10 as the capacity of the new Room',() => {
        expect(room.Capacity).toBe(10);
    });

    it('SHOULD return projector as the resource of the room', () => {
        expect(room.Resource).toBe(Equipment['Overhead Projector']);
    });

    it('SHOULD add a booking to the allBookings list', () => {
        room.addBooking(booking);
        expect(room.AllBookings).toHaveLength(1);
    });

    // **** Review - is this a valid test toContain???  Looks OK
    it('SHOULD find the booking in the list added by the roomId', () => {
        expect(room.AllBookings).toContain(booking);
    });



});