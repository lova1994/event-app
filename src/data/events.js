const events = [
    { tag: "Adventure", id: 1, date: "Thu, oct 1, 18:00", title: "Hot Air Balloon Ride", description: "Group Adventure, LA", img: "https://images.pexels.com/photos/670061/pexels-photo-670061.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", attendees: 0
},
   { tag: "Art", id: 2, date: "Tue, sep 2, 12:00", title: "Street Art Guide", description: "Artistic Event, LA", img: "https://images.pexels.com/photos/959314/pexels-photo-959314.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", attendees: 1
},
 { tag: "Nature", id: 3, date: "Tue, oct 10, 09:00", title: "High Mountains Hike", description: "Nature Event, LA", img: "https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", attendees: 2
},
{ tag: "Nature", id: 4, date: "Tue, oct 10, 09:00", title: "Look at cute cows", description: "Nature Event, LA", img: "https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", attendees: 2
}
];

const attendedEvents = [
    { tag: "Nature", id: 3, date: "Tue, oct 10, 09:00", title: "High Mountains Hike", description: "Nature Event, LA", img: "https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", attendees: 2
},
{ tag: "Nature", id: 4, date: "Tue, oct 10, 09:00", title: "Look at cute cows", description: "Nature Event, LA", img: "https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", attendees: 2
}
]





function getEvents() {
    const LS_KEY = 'events';
    let fromLs = localStorage.getItem(LS_KEY);

    if( !fromLs ) {
        localStorage.setItem(LS_KEY, JSON.stringify(events));
        fromLs = localStorage.getItem(LS_KEY);
    }

    return JSON.parse(fromLs);
}

function getAttendedEvents() {
    const LS_KEY = 'events';
    let fromLs = localStorage.getItem(LS_KEY);

    if( !fromLs ) {
        localStorage.setItem(LS_KEY, JSON.stringify(attendedEvents));
        fromLs = localStorage.getItem(LS_KEY);
    }

    return JSON.parse(fromLs);
}



export { getEvents, getAttendedEvents }