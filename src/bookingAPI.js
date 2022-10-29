import Booking from "./booking";

export default class BookingAPI {
    _allAvailableRooms=[];
    _allRooms =[];

    constructor(){
        this._allAvailableRooms=[];
        this._allRooms=[];
       };

    getAllRooms() {
        return this._allRooms;
    }

    getAllRoomIds = () => {
        this._allRooms.forEach(r => console.log(r.RoomId));
    }

    // Adds a room to allRooms if it does not exist already
    addRoom(room){
        const existingRoom = this._allRooms.find(r => r.RoomId === room.RoomId);
        if(!existingRoom){
            this._allRooms.push(room);
        }
    }

    removeAllRooms() {
        this._allRooms = [];
    }

    // rooms that have no bookings
    getAvailableRooms(){
        return this._allAvailableRooms;
    }

    // Find the room and add a booking
    bookRoom(booking) {
        if(!booking) return false;
        
        const room = this._allRooms.find(r => r.RoomId === booking.RoomId);
        
        try {
            if(room !== undefined){
                room.addBooking(booking);
                return true;
            }
        } catch (error) {
            console.log(error);
        }
        
        return false;
    }

    bookRoomByConstraint(booking) {
        // find a room in allRooms that has the correct equipment and capacity
        const room = this._allRooms.find(r => r.Capacity === booking.Capacity);
        
        try {
            if(room !== undefined){
                room.addBooking(booking);
                return true;
            }
        } catch (error) {
            console.log(error);
        }
        return false;
    }
}

// must 
// list all rooms
// book a specfic room by constraints
// ToDo - list all available rooms for a given day and hour