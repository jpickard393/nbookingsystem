import BookingAPI from "./BookingAPI";
import Equipment from "./Equipment";

jest.mock('./Room');
jest.mock('./Equipment');


const bookingApi = new BookingAPI()
let bookingMock;
let mockRoom1;
let mockRoom2

// Arrange

beforeEach(()=>{
    bookingMock = jest.requireMock('./Booking');

    jest.mock('./Booking', () => (
        {
            RoomId: "Room_1",
            BookingDate: '01/10/2022',
            EquipmentId: 1,
            Capacity: 20
        }
    ));

    mockRoom1 = jest.createMockFromModule('./Room');
    mockRoom2 = jest.createMockFromModule('./Room');

    mockRoom1.RoomId = "Room_1";
    mockRoom1.Capacity= 10;
    mockRoom1.setResource = Equipment["Overhead Projector"];
    mockRoom1.addBooking = jest.fn();
    mockRoom1.AllBookings = jest.fn();
    
    mockRoom2.RoomId = "Room_2";
    mockRoom2.Capacity= 20;
    mockRoom2.setResource = Equipment["Slide Projector"]
    mockRoom2.addBooking = jest.fn();
    mockRoom2.AllBookings = jest.fn();
});

afterEach(()=>{
    bookingApi.removeAllRooms();
    jest.clearAllMocks();
});

describe ('bookingApi',() => {
    it('SHOULD add 2 rooms to the AllRooms list',() => {
      
        // Act
        bookingApi.addRoom(mockRoom1);
        bookingApi.addRoom(mockRoom2);

        // Assert
        expect(bookingApi.getAllRooms()).toHaveLength(2);
    });

    it('SHOULD NOT allow a room to be added to allRooms list twice',() => {
        // Act
        bookingApi.addRoom(mockRoom1);
        bookingApi.addRoom(mockRoom1);

        // Assert
        expect(bookingApi.getAllRooms()).toHaveLength(1);
    });

    it('SHOULD return TRUE when an existing room is booked successfully',() => {
        bookingApi.addRoom(mockRoom1);
        expect(bookingApi.bookRoom(bookingMock)).toBe(true);
    });

    it('SHOULD return false if booking is null',() => {
        const bookingMockNull = null;
        expect(bookingApi.bookRoom(bookingMockNull)).toBe(false);
    });

    it('SHOULD return FALSE when a room that does not exist is booked',() => {
        // Act
       bookingMock.RoomId=10;

       // Assert
       expect(bookingApi.bookRoom(bookingMock)).toBe(false);
    });

    it('SHOULD log all existing rooms to the console', () => {
        console.log = jest.fn();
        // Arrange
        bookingApi.addRoom(mockRoom1);

        // Act
        bookingApi.getAllRoomIds();

        // Assert
        expect(console.log).toHaveBeenCalledWith("Room_1");
    });

    it('SHOULD book a room with specific constraints',() => {
        // Act
        bookingApi.addRoom(mockRoom2);
        // Assert
        expect(bookingApi.bookRoomByConstraint(bookingMock)).toBe(true);
    });

    it('SHOULD return FALSE when booking constraints do not match any existing room',() => {
        // Act
        bookingApi.addRoom(mockRoom1);
        // Assert
        expect(bookingApi.bookRoomByConstraint(bookingMock)).toBe(false);
    });


});