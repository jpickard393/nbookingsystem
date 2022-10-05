import BookingAPI from "./BookingAPI";

jest.mock('./Room');

let roomMock = jest.requireMock('./Room');
let bookingMock = jest.requireMock('./Booking');

// Arrange

// ***** Can these go inside the describe, don't work
jest.mock('./Booking', () => (
    {
        RoomId: 1,
        BookingDate: '01/10/2022',
        EquipmentId: 1,
    }
));

jest.mock('./Room', () => (
    {
        RoomId: 1,
        Capacity: 10,
        EquipmentId: 1,
        addBooking: jest.fn(),
        AllBookings: jest.fn()
    }
));

afterEach(()=>{
    jest.clearAllMocks();
})

describe ('bookingApi',() => {
    // SUT is bookingAPI
    const bookingApi = new BookingAPI(); 
    
    // Act

    bookingApi.AddRoom(roomMock);

    it('SHOULD return a list of 3 Rooms',() => {
        expect(bookingApi.AllRooms).toHaveLength(1);
    });

    it('SHOULD return a list of 0 Available Rooms',() => {
        // No rooms booked at this stage
        expect(bookingApi.AvailableRooms).toHaveLength(0);
    });

    it('SHOULD return TRUE when a room is booked successfully',() => {
        bookingMock.RoomId =1;

        expect(bookingApi.bookRoom(bookingMock)).toBe(true);
    });

    it('SHOULD return FALSE when we try to book a room that does not exist',() => {
       bookingMock = jest.requireMock('./Booking');
       bookingMock.RoomId=10;

       expect(bookingApi.bookRoom(bookingMock)).toBe(false);
    });
});