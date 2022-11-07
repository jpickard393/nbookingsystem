import BookingAPI from "../BookingAPI";
import Equipment from "../Equipment";
import Room from "../Room";

jest.mock('../Equipment');
jest.mock('../Room');

const bookingApi = new BookingAPI();
let bookingMock;

const createMockRoom = (id) => {
    const mockRoom = jest.createMockFromModule("../Room");
    mockRoom.RoomId = id;
    mockRoom.Capacity = 10;
    mockRoom.Resource = Equipment["Overhead Projector"];
    mockRoom.addBooking = jest.fn();
    mockRoom.AllBookings = jest.fn();

    return mockRoom;
};

// Arrange

beforeEach(()=>{
    bookingMock = jest.requireMock('../Booking');

    jest.mock('../Booking', () => (
        {
            RoomId: "Room_1",
            BookingDate: '01/10/2022',
            EquipmentId: 1,
            Capacity: 20
        }
    ));
});

afterEach(()=>{
    jest.clearAllMocks();
});

describe ('bookingApi mocking experiments',() => {
    it('SHOULD add two room to the allRooms list',() => {
        const room = createMockRoom("Room_1");
        const room2 = createMockRoom("Blue Room");

        bookingApi.addRoom(room);
        bookingApi.addRoom(room2);

        expect(bookingApi.getAllRooms()).toHaveLength(2);
    });
    

    it('SHOULD book a room if the room does not already exist', () => {
        const room = createMockRoom("Room_1");
        bookingApi.addRoom(room);
        expect(bookingApi.bookRoom(bookingMock)).toBe(true);
    });
});