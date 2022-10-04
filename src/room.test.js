import Room from './Room';
import Equipment from './Equipment';
import Booking from './Booking';

describe ('Room',() => {
    // Arrange
    const room = new Room(1,10,Equipment['Overhead Projector']);
    const bookingMock1 = jest.requireMock('./Booking');
    
    jest.mock('./Booking', () => (
        {
            RoomId: 1,
            Capacity: 10,
            EquipmentId: 1,
        }
    ));
          
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
        // Act
        room.addBooking(bookingMock1);
        // Assert
        expect(room.AllBookings).toHaveLength(1);
    });

    // **** Review - is this a valid test toContain???  Looks OK
    it('SHOULD find the booking in the list', () => {
        expect(room.AllBookings).toContain(bookingMock1);
    });

    it('SHOULD find the booking in the list by roomId, capacity and equipment', () => {
        expect(room.AllBookings.find(
            r => r.RoomId === 1
            && r.Capacity === 10
            && r.EquipmentId === 1)).toBeDefined();
    });


});