import { useEffect } from 'react';

const GoogleCalendarButton = () => {
  useEffect(() => {
    // Dynamically load the Google Calendar script
    const script = document.createElement('script');
    script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
    script.async = true;
    document.body.appendChild(script);

    // Attach the scheduling button initialization on script load
    script.onload = () => {
      calendar.schedulingButton.load({
        url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3xWKgPDNTeM_-zWq-7kqBr1WXEowmnueHafW3TxYdyTFBPng2jd4Rw7CN-RJ8r9eqHIqA49Iwp?gv=true',
        color: '#039BE5',
        label: 'Book an appointment',
      });
    };

    return () => {
      // Cleanup the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <link
        href="https://calendar.google.com/calendar/scheduling-button-script.css"
        rel="stylesheet"
      />
      <div className="google-calendar-button">Ijas</div>
    </div>
  );
};

export default GoogleCalendarButton;
