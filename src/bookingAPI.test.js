import bookingApi from "./bookingAPI";

describe ('bookingApi',() => {
    // SUT
    const bookingAPI = new bookingApi();

    it('SHOULD return a list of 3 Rooms',() => {
        expext(bookingAPI.getAllRooms()).toHaveLength(3);
    });

    it('SHOULD return a list of 3 Available Rooms',() => {
        // No rooms booked at this stage
        expext(bookingAPI.getAvailableRooms()).toHaveLength(3);
    });

    it('SHOULD return a list of 0 booked Rooms',() => {
        // No rooms booked at this stage
        expext(bookingAPI.getBookedRooms()).toHaveLength(0);
    });

    it('SHOULD return TRUE when a room is booked successfully',() => {
        expext(bookingAPI.bookRoom()).toBe(true);

        // now we have booked a room bookedRooms should be 1
        expext(bookingAPI.getBookedRooms()).toHaveLength(1);
    });

    it('SHOULD return FALSE when a room is NOT booked successfully',() => {
        expext(bookingAPI.bookRoom()).toBe(false);
    });

    // constrints are parameters such as equipment, capacity, time.
    it('SHOULD return TRUE when a room is booked with constraints successfully',() => {
        expext(bookingAPI.bookRoomByConstraint()).toBe(true);
    });

    it('SHOULD return FALSE when a room is NOT booked with constraint',() => {
        expext(bookingAPI.bookRoomByConstraint()).toBe(false);
    });

    it('SHOULD return TRUE when a room is booked with specified hour',() => {
        expext(bookingAPI.bookRoomByHour(10)).toBe(true);
    });

    it('SHOULD return FALSE when a room is NOT booked with specified hour',() => {
        // this room is already booked
        expext(bookingAPI.bookRoomByHour(10)).toBe(false);
    });
});