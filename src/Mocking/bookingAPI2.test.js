import BookingAPI from "../BookingAPI";
import Equipment from "../Equipment";

jest.mock('../Equipment');

const bookingApi = new BookingAPI();
let roomMock;

// Factory
// uses createFromModule to create a new mock each time it is called
// jest.createMockFromModule - generates auto-mocked module and returns it as a value. 
const createMockRoomFromModule = (id) => {
    const mockRoom = jest.createMockFromModule("../Room");
    mockRoom.RoomId = id;
    mockRoom.Capacity = 10;
    mockRoom.Resource = Equipment["Overhead Projector"];
    mockRoom.addBooking = jest.fn();
    mockRoom.AllBookings = jest.fn();

    return mockRoom;
};

roomMock = jest.requireMock('../Room');
jest.mock('../Room', () => (
    {
        addBooking: jest.fn(),
        allBookings: jest.fn(),
        RoomId: 'Manual_Mock_Room',
    }
));

afterEach(()=>{
    jest.clearAllMocks();
    // Clear the collections
    bookingApi.removeAllRooms();
});

describe ('bookingApi mocking experiments',() => {
    // using factory
    it('SHOULD add two rooms to the allRooms list',() => {
        const room = createMockRoomFromModule("Room_1");
        const room2 = createMockRoomFromModule("Blue Room");

        bookingApi.addRoom(room);
        bookingApi.addRoom(room2);

        expect(bookingApi.getAllRooms()).toHaveLength(2);
    });
    
    
    // ------------------------------------------------------
    // ES6 Manual Mock
    // ------------------------------------------------------

    it('SHOULD add a room to the allRooms List', () => {       
        console.log(roomMock);
        bookingApi.addRoom(roomMock);
    });


    // booking factory - creates new rooms
    const createBooking = (mockRoomId, mockBookingDate, mockEquipmentId, mockCapacity) => {
        jest.resetModules();  // resets the cache of all required modules
        const bookingMock = jest.requireMock('../Booking');

        jest.mock('../Booking', () => (
            {
                RoomId: mockRoomId,
                BookingDate: mockBookingDate,
                EquipmentId: mockEquipmentId,
                Capacity: mockCapacity
            }
        ));
    
        return bookingMock;
    };

    // test the factory method
    it('SHOULD return a new booking object with the correct roomId', () => {
        // Arrange
        const name1 = 'My New Room';
        const name2 = 'My Second New Room';

        const mockBooking = createBooking(name1,'01/10/2022',1,20);
        const mockBooking2 = createBooking(name2);
        
        // Assert
        expect(mockBooking.RoomId).toBe(name1);
        expect(mockBooking.BookingDate).toBe('01/10/2022');
        expect(mockBooking.EquipmentId).toBe(1);
        expect(mockBooking.Capacity).toBe(20);

        expect(mockBooking2.RoomId).toBe(name2);
    }); 

    it('SHOULD return TRUE when an existing room is booked successfully', () => {
        // Arrange
        bookingApi.addRoom(roomMock);
        const mockBooking = createBooking(roomMock.RoomId);
        
        // Assert
        expect(bookingApi.bookRoom(mockBooking)).toBe(true);
    }); 
});