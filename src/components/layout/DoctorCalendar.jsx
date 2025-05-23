import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

function DoctorCalendar() {
  const events = [{ title: 'Patient_Meeting', start: new Date() }];


  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        
        <i>{eventInfo.event.title}</i>
      </>
    );
  }

  return (
    <div className='flex'>
      <div className="max-h-fit max-w-fit pb-1 bg-lime-200">
        <h1>Doctor Calender</h1>

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
