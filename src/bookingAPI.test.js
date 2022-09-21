import { findAllInRenderedTree } from "react-dom/test-utils";
import bookingApi from "./BookingAPI";
import Room from "./Room";

jest.mock('./Room');

describe ('bookingApi',() => {
    // SUT is bookingAPI
    
    let bookingAPI;

    beforeEach(() =>{
        const classroom1 = new Room(1,20,'Classroom 1');
        const classroom2 = new Room(2,10,'Classroom 2');
        const classroom3 = new Room(3,30,'Classroom 3');

        bookingAPI = new bookingApi();    
        bookingAPI._allExistingRooms.push(classroom1,classroom2,classroom3);
     });

     afterEach(() =>{
        // not sure if this is needed
        jest.clearAllMocks();
     });

    it('SHOULD return a list of 3 Rooms',() => {
        expect(bookingAPI.getAllExistingRooms()).toHaveLength(3);
    });

    it('SHOULD return a list of 0 Available Rooms',() => {
        // No rooms booked at this stage
        expect(bookingAPI.getAvailableRooms()).toHaveLength(0);
    });

    it('SHOULD return a list of 0 booked Rooms',() => {
        // No rooms booked at this stage
        expect(bookingAPI.getBookedRooms()).toHaveLength(0);
    });

    it('SHOULD return TRUE when a room is booked successfully',() => {
        expect(bookingAPI.bookRoom()).toBe(true);

        // now we have booked a room bookedRooms should be 1
        expect(bookingAPI.getBookedRooms()).toHaveLength(1);
    });

    it('SHOULD return FALSE when a room is NOT booked successfully',() => {
        expect(bookingAPI.bookRoom()).toBe(false);
    });

    // constrints are parameters such as equipment, capacity, time.
    it('SHOULD return TRUE when a room is booked with constraints successfully',() => {
        expext(bookingAPI.bookRoomByConstraint()).toBe(true);
    });

    it('SHOULD return FALSE when a room is NOT booked with constraint',() => {
        expect(bookingAPI.bookRoomByConstraint()).toBe(false);
    });

    it('SHOULD return TRUE when a room is booked with specified hour',() => {
        expect(bookingAPI.bookRoomByHour(10)).toBe(true);
    });

    it('SHOULD return FALSE when a room is NOT booked with specified hour',() => {
        // this room is already booked
        expect(bookingAPI.bookRoomByHour(10)).toBe(false);
    });
});