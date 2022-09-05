export default class bookingApi {
    _allBookings;
    _allAvailableBookings;
    _allExistingRooms;

    constructor(){
        this._allBookings=[];
        this._allAvailableBookings=[];
        this._allExistingRooms=[];
       };

       getAllExistingRooms() {
        return this._allExistingRooms;
       }
}