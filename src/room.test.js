import Room from './Room';

describe ('Room',() => {
    const resourceName = 'Projector';
    const room = new Room(1,10,resourceName);

    it('SHOULD return 1 as the ID of the new Room',() => {
        expect(room.RoomId).toBe(1);
    });

    it('SHOULD return 10 as the capacity of the new Room',() => {
        expect(room.Capacity).toBe(10);
    });

    it('SHOULD return projector as the resource of the room', () => {
        expect(room.Resource).toBe(resourceName)
    });

    it('SHOULD return 0 bookings', () => {
        expect(room.AllBookings).toHaveLength(0);
    });

    

});