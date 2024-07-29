function printPastEvents() {
    let today = new Date()
    let upcomingEventsList = document.createElement('div');
    upcomingEventsList.className = "event-list";

    for (let i = 0; i < events.length; ++i) {
        if (today.getTime() > events[i].threshold.getTime()) {
            let event = document.createElement('div');
            event.className = 'event';

            let date = document.createElement('div');
            date.className = 'event-date';
            date.innerHTML = events[i].date;

            event.appendChild(date);

            let topic = document.createElement('div');
            topic.className = 'event-topic';
            topic.innerHTML = '<b><u>Topic:</u></b><br>'+ events[i].topic;

            event.appendChild(topic)

            if (events[i].speaker != undefined) {
                let speaker = document.createElement('div');
                speaker.className = 'event-speaker';
                speaker.innerHTML = '<b>Speaker:</b> ' + events[i].speaker;
                event.appendChild(speaker);
            }

            if (events[i].abstract !== undefined) {
                let abstract = document.createElement('div');
                abstract.className = 'event-abstarct';
                abstract.innerHTML = events[i].abstract;
                event.appendChild(abstract);
            }

            if (events[i].record !== undefined) {
                let record = document.createElement('div');
                record.className = 'event-record';
                record.innerHTML = '<a href="' + events[i].record + '">Video</a>';
                event.appendChild(record)
            }

            upcomingEventsList.appendChild(event)
        }
    }

    document.getElementById('main').appendChild(upcomingEventsList);
}




function pastMeetings() {
    document.getElementById('main').innerHTML = '';
    printPastEvents();
    setState('past');
}