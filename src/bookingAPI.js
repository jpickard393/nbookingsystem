export default class bookingApi {
    _allAvailableRooms;
    _allExistingRooms;
    _bookedRooms;

    constructor(){
        this._allAvailableRooms=[];
        this._allExistingRooms=[];
       };

    get AllExistingRooms() {
        return this._allExistingRooms;
       }

    AddRoom(room){
        this._allExistingRooms.push(room);
    }

    get AvailableRooms(){
        return this._allAvailableRooms;
    }

    BookedRooms(){
        return this._bookedRooms;
    }

}