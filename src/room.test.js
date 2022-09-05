import Room from './Room';

describe ('Room',() => {
    const resourceName = 'Projector';
    const room = new Room(1,10,resourceName);

    it('SHOULD return 1 as the ID of the new Room',() => {
        expect(room.getId()).toBe(1);
    });

    it('SHOULD return 10 as the capacity of the new Room',() => {
        expect(room.getCapacity()).toBe(10);
    });

    it('SHOULD return projector as the resource of teh room', () => {
        expect(room.getResource()).toBe(resourceName)
    });


});