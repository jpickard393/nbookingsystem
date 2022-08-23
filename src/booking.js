export default class Booking {
    _bookedHours;

    constructor(){
        if (this._bookedHours === undefined || 
            this._bookedHours.length===0) 
            this._bookedHours = [];
    };

    addBooking(hourBooked){
        this._bookedHours.push ({hourBooked: hourBooked});
    }
    // return a list of booked hours
    getBookedHours(){
        console.log(this._bookedHours);
        return this._bookedHours;
    }

    validateBooking(){
        return false;
    }

    isCorrectTimeFormat(){
        return false;
    }

}
