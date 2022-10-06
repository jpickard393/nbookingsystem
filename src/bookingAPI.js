import Booking from "./booking";

export default class BookingAPI {
    _allAvailableRooms=[];
    _allRooms =[];

    constructor(){
        this._allAvailableRooms=[];
        this._allRooms=[];
       };

    get AllRooms() {
        return this._allRooms;
       }

    AddRoom(room){
        this._allRooms.push(room);
    }

    get AvailableRooms(){
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
}

// must 
// list all rooms
// book a specfic room by constraints
// ToDo - list all available rooms for a given day and hour