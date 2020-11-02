import React from 'react';
import moment from 'moment';
import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import { events } from './data';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

import { addDays } from 'date-fns';

import CreateOrUpdateEvent from './CreateOrUpdateEvent';
const localizer: any = momentLocalizer(moment);

const DragAndDropCalendar = withDragAndDrop(Calendar);

function CalendarApp() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [actionType, setActionType] = React.useState('create');
  const [event, setEvent] = React.useState(null);

  const [state, setState] = React.useState({
    events: events,
  });
  function moveEvent({
    event,
    start,
    end,
    isAllDay: droppedOnAllDaySlot,
  }: any) {
    const { events } = state;

    const idx = events.indexOf(event);
    let allDay = event.allDay;

    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true;
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false;
    }

    const updatedEvent = { ...event, start, end, allDay };

    const nextEvents = [...events];
    nextEvents.splice(idx, 1, updatedEvent);

    setState({
      ...state,
      events: nextEvents,
    });

    // alert(`${event.title} was dropped onto ${updatedEvent.start}`)
  }

  function resizeEvent({ event, start, end }: any) {
    const { events } = state;

    const nextEvents = events.map((existingEvent) => {
      return existingEvent.id == event.id
        ? { ...existingEvent, start, end }
        : existingEvent;
    });

    setState({
      ...state,
      events: nextEvents,
    });

    //alert(`${event.title} was resized to ${start}-${end}`)
  }

  function newEvent(event: any) {
    let idList = state.events.map((a) => a.id);
    let newId = Math.max(...idList) + 1;
    let hour = {
      id: newId,
      title: event.title,
      allDay: event.slots.length == 1,
      desc: event.desc,
      start: event.slots.length == 1 ? event.start : event.slots[0],
      end: event.slots.length == 1 ? event.end : event.slots[1],
    };
    setState({
      ...state,
      events: state.events.concat([hour]),
    });
    return;
  }
  function updateEvent(event: any) {
    let updatedEvent = {
      id: event.id,
      title: event.title,
      allDay: event.slots.length == 1,
      desc: event.desc,
      start: event.slots.length == 1 ? event.start : event.slots[0],
      end: event.slots.length == 1 ? event.end : event.slots[1],
    };

    setState({
      ...state,
      events: state.events.map((item) =>
        item.id === updatedEvent.id ? updatedEvent : item
      ),
    });
    return;
  }

  function onSubmit(value: any) {
    setIsOpen(false);
    setEvent(null);
    if (actionType === 'create') {
      newEvent(value);
    }
    if (actionType === 'update') {
      updateEvent(value);
    }
  }
  function onSelectEvent(selectedEvent: any) {
    setIsOpen(true);
    setEvent(selectedEvent);
    setActionType('update');
  }
  function onSelectSlot(selectedSlot: any) {
    setEvent(selectedSlot);
    setActionType('create');
    setIsOpen(true);
  }
  function close() {
    setIsOpen(false);
    setEvent(null);
  }
  return (
    <>
      <DragAndDropCalendar
        popup
        selectable
        localizer={localizer}
        events={state.events}
        onEventDrop={moveEvent}
        resizable
        onEventResize={resizeEvent}
        onSelectSlot={onSelectSlot}
        onSelectEvent={onSelectEvent}
        onDragStart={console.log}
        defaultView={Views.MONTH}
        defaultDate={new Date()}
      />
      {event && (
        <CreateOrUpdateEvent
          onClose={close}
          isOpen={isOpen}
          event={event}
          type={actionType}
          onSubmit={(value: any) => onSubmit(value)}
        />
      )}
    </>
  );
}

export default CalendarApp;
