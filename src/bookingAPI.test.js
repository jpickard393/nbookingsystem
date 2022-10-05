import BookingAPI from "./BookingAPI";
import Room from "./Room";

jest.mock('./Room');

describe ('bookingApi',() => {
    // SUT is bookingAPI
    
    // Arrage
    let bookingApi = new BookingAPI();  
    const classroom1 = new Room(1,20);
    const classroom2 = new Room(2,10);
    const classroom3 = new Room(3,30);

    bookingApi.AddRoom(classroom1);
    bookingApi.AddRoom(classroom2);
    bookingApi.AddRoom(classroom3);

    beforeEach(() =>{
        
     });

     afterEach(() =>{
        //jest.clearAllMocks();
     });

    it('SHOULD return a list of 3 Rooms',() => {
        expect(bookingApi.AllRooms).toHaveLength(3);
    });

    it('SHOULD return a list of 0 Available Rooms',() => {
        // No rooms booked at this stage
        expect(bookingApi.AvailableRooms).toHaveLength(0);
    });

    it('SHOULD return TRUE when a room is booked successfully',() => {
        const bookingMock = jest.requireMock('./Booking');
    
        jest.mock('./Booking', () => (
            {
                RoomId: 1,
                Capacity: 10,
                EquipmentId: 1,
            }
        ));

        expect(bookingApi.bookRoom(bookingMock)).toBe(true);
    });

    it.only('SHOULD return FALSE when we try to book a room that does not exist',() => {
        const bookingMock = jest.requireMock('./Booking');
        
        jest.mock('./Booking', () => (
            {
                RoomId: 10,
                Capacity: 10,
                EquipmentId: 1,
            }
        ));

        expect(bookingApi.bookRoom(bookingMock)).toBe(false);
    });
});