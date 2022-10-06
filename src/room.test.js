import Room from './Room';
import Equipment from './Equipment';
// import Booking from './Booking';

describe ('Room',() => {
    // Arrange
    let room; //= new Room(1,10,Equipment['Overhead Projector']);
    let bookingMock = jest.requireMock('./Booking');

    jest.mock('./Booking', () => (
        {
            RoomId: 1,
            Capacity: 10,
            EquipmentId: 1,
        }
    ));

    beforeEach(()=>{
        room = new Room(1,10,Equipment['Overhead Projector']);
    });

    // test constructor here
    // expect props to be correct

    // create a before each to make sure its clean

    // rename test names and description
          
    it('SHOULD created a room with the correct id',() => {
        expect(room.RoomId).toBe(1);
    });

    it('SHOULD return 10 as the capacity of the new Room',() => {
        expect(room.Capacity).toBe(10);
    });

    it('SHOULD return projector as the resource of the room', () => {
        expect(room.Resource).toBe(Equipment['Overhead Projector']);
    });

    it('SHOULD add a booking to the AllBookings array', () => {
        // Act
        room.addBooking(bookingMock);
        // Assert
        expect(room.AllBookings).toHaveLength(1);
        expect(room.AllBookings).toContain(bookingMock);
    });
});