import BookingAPI from "../BookingAPI";
import Equipment from "../Equipment";

jest.mock('../Equipment');

const bookingApi = new BookingAPI();
let roomMock;

// uses createFromModule to create a new mock each time it is called
// jest.createMockFromModule - generates auto-mocked module and returns it as a value. 
// It is useful in the manual mocking. You can override the module values:
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

const createBookingFactory = () => {
    jest.requireActual("../Booking", () => {
        const originalBooking = jest.require('../Booking');
        return {
            __esModule: true,
            ...originalBooking,
            RoomId: "Manual_Mock_Room",
            BookingDate: '01/10/2022',
            EquipmentId: 1,
            Capacity: 20
        };
    });
};

afterEach(()=>{
    jest.clearAllMocks();
    // Clear the collections
    bookingApi.removeAllRooms();
});

describe ('bookingApi mocking experiments',() => {
    it('SHOULD add two room to the allRooms list',() => {
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
});