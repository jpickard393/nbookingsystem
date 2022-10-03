import bookingApi from "./BookingAPI";
import Room from "./Room";

jest.mock('./Room');

describe ('bookingApi',() => {
    // SUT is bookingAPI
    
    let bookingAPI = new bookingApi();  
    const classroom1 = new Room(1,20);
    const classroom2 = new Room(2,10);
    const classroom3 = new Room(3,30);

    bookingAPI.AddRoom(classroom1);
    bookingAPI.AddRoom(classroom2);
    bookingAPI.AddRoom(classroom3);

    beforeEach(() =>{
     });

     afterEach(() =>{
        jest.clearAllMocks();
     });

    it('SHOULD return a list of 3 Rooms',() => {
        expect(bookingAPI.AllRooms).toHaveLength(3);
    });

    it('SHOULD return a list of 0 Available Rooms',() => {
        // No rooms booked at this stage
        expect(bookingAPI.AvailableRooms).toHaveLength(0);
    });

    
    it('SHOULD return FALSE when a room is NOT booked successfully',() => {
        expect(bookingAPI.bookRoom()).toBe(false);
    });

    // constrints are parameters such as equipment, capacity, time.
    // it('SHOULD return TRUE when a room is booked with constraints successfully',() => {
    //     expext(bookingAPI.bookRoomByConstraint()).toBe(true);
    // });

    // it('SHOULD return FALSE when a room is NOT booked with constraint',() => {
    //     expect(bookingAPI.bookRoomByConstraint()).toBe(false);
    // });

    // it('SHOULD return TRUE when a room is booked with specified hour',() => {
    //     expect(bookingAPI.bookRoomByHour(10)).toBe(true);
    // });

    // it('SHOULD return FALSE when a room is NOT booked with specified hour',() => {
    //     // this room is already booked
    //     expect(bookingAPI.bookRoomByHour(10)).toBe(false);
    // });
});