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


    const createBooking = (roomId) => {
        const bookingMock = jest.requireMock('../Booking');
        const id = roomId;
        jest.mock('../Booking', () => (
            {
                RoomId: id,
                BookingDate: '01/10/2022',
                EquipmentId: 1,
                Capacity: 20
            }
        ));
    
        return bookingMock;
    };

    // test the factory
    it.only('SHOULD return a new booking object with the correct roomId', () => {
        const mockBooking = createBooking('My New Room');
        
        // Assert
        expect(mockBooking.RoomId).toBe('My New Room');
    }); 

    it('SHOULD return TRUE when an existing room is booked successfully', () => {
        bookingApi.addRoom(roomMock);
        const mockBooking = createBooking(roomMock.RoomId);
        
        // Assert
        expect(bookingApi.bookRoom(mockBooking)).toBe(true);
    }); 
});