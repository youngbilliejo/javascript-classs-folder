// 2. Describe a hotel booking as an object.  Make sure you include the room,
// the name of the person or people staying in the room, the start date, the
// end date, and the total price.  Research how it is optimal to represent dates.

let booking = {
    roomNumber: 275,
    guest: ['Mr. First Last', 'Ms.First Last'],
    startDate: '2026.03.16',  //opt1ions: Date object, timestamp or a different 
    // option is such as the following;; 
    // startDate;{
        // year: 2026
        //month: 03, // 03 = March}
        //day:16  (todays date when I did this)},

    // endDate:{
        // year: 2016,
        // month: 03,
        //} day: 16}
};
booking.priceUSCents= 15000;
