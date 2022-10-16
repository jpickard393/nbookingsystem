import BookingAPI from "./BookingAPI";

jest.mock('./Room');

const bookingApi = new BookingAPI()
let roomMock;
let bookingMock;

// Arrange

beforeEach(()=>{
    roomMock = jest.requireMock('./Room');
    bookingMock = jest.requireMock('./Booking');

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

    // Add rooms to the AllRooms list
    bookingApi.AddRoom(roomMock);
});

afterEach(()=>{
    bookingApi.removeAllRooms();
    jest.clearAllMocks();
});

describe ('bookingApi',() => {
    it('SHOULD have added 1 room to the AllRooms list',() => {
        // Arrange - Create a second room
        const room2Mock = jest.requireMock('./Room');
        jest.mock('./Room', () => (
            {
                RoomId: 2,
                Capacity: 10,
                EquipmentId: 1,
                addBooking: jest.fn(),
                AllBookings: jest.fn()
            }
        ));
       
        // Act - Add the room the the AllRooms List
        bookingApi.AddRoom(room2Mock);

        // Assert
        expect(bookingApi.AllRooms).toHaveLength(2);
    });

    it('SHOULD return TRUE when an existing room is booked successfully',() => {
        expect(bookingApi.bookRoom(bookingMock)).toBe(true);
    });

    it('SHOULD return false if booking is null',() => {
        const bookingMockNull = null;
        expect(bookingApi.bookRoom(bookingMockNull)).toBe(false);
    });

    it('SHOULD return FALSE when we try to book a room that does not exist',() => {
       bookingMock = jest.requireMock('./Booking');
       bookingMock.RoomId=10;

       expect(bookingApi.bookRoom(bookingMock)).toBe(false);
    });

    it('SHOULD list all existing rooms', () => {
        let room2Mock = jest.requireMock('./Room');
        jest.mock('./Room', () => (
            {
                RoomId: 2,
                Capacity: 10,
                EquipmentId: 1,
                addBooking: jest.fn(),
                AllBookings: jest.fn()
            }
        ));
       
        // Act - Add the room the the AllRooms List
        bookingApi.AddRoom(room2Mock);
        bookingApi.AllRooms.forEach(r => console.log(r.RoomId));
    });
});