import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

function DoctorCalendar() {
  const events = [{ title: 'Meeting', start: new Date() }];


  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }

  return (
    <div>
      <div>
        <h1>Demo App</h1>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          weekends={false}
          events={events}
          eventContent={renderEventContent}
        />
      </div>
    </div>
  );
}

export default DoctorCalendar;
