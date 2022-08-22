export default class Booking {
    constructor(room, timeFrom, timeTo){
        this.timeFrom = timeFrom;
        this.timeTo = timeTo;
        this.room = room;
    };

    // return a list of booked hours
    getBookings(){
        return null;
    }

    validateBooking(){
        return false;
    }

    isCorrectTimeFormat(){
        return false;
    }

}
