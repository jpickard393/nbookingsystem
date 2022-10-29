import Room from './Room';
import Equipment from './Equipment';

describe ('Room',() => {
    // Arrange
    let room;
    let bookingMock = jest.requireMock('./Booking');

    jest.mock('./Booking', () => (
        {
            RoomId: "Room_1",
            Capacity: 10,
            EquipmentId: 1,
        }
    ));

    // **** Review - ensure test names and descriptions are informtive ****
    // create a before each to make sure its clean
    // All test
    beforeEach(()=>{
        room = new Room('Room_1',10,Equipment['Overhead Projector']);
    });

    // **** Review ****  Test constructor here
    // expect props to be correct
    it('Should return the correct values from the contsructor',() => {
        expect(room._roomId).toBe('Room_1');
        expect(room._capacity).toBe(10);
        expect(room._resource).toBe(Equipment['Overhead Projector']);
    });
             
    it('SHOULD have the correct roomId',() => {
        expect(room.RoomId).toBe('Room_1');
    });

    it('SHOULD have the correct capacity',() => {
        expect(room.Capacity).toBe(10);
    });

    it('SHOULD have Overhead Projector as the Rooms resource', () => {
        expect(room.getResource()).toBe(Equipment['Overhead Projector']);
    });

    it('SHOULD add the correct booking to the AllBookings array', () => {
        // Act
        room.addBooking(bookingMock);
        // Assert
        expect(room.AllBookings).toHaveLength(1);
        expect(room.AllBookings).toContain(bookingMock);
    });
});