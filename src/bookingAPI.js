export default class bookingApi {
    _allAvailableRooms;
    _allExistingRooms;

    constructor(){
        this._allAvailableRooms=[];
        this._allExistingRooms=[];
       };

    getAllExistingRooms() {
        return this._allExistingRooms;
       }

    getAvailableRooms(){
        return this._allAvailableRooms;
    }

}