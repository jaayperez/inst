const now = new Date();
function subtractDateByDay(day) {
  return new Date(now.getTime() - day * 24 * 60 * 60 * 1000);
}
export const events = [
  {
    id: 0,
    title: 'All Day Event very long title',
    allDay: true,
    start: subtractDateByDay(5),
    end: subtractDateByDay(5),
  },
  {
    id: 1,
    title: 'Long Event',
    start: subtractDateByDay(3),
    end: subtractDateByDay(2),
  },

  {
    id: 2,
    title: 'DTS STARTS',
    start: subtractDateByDay(4),
    end: subtractDateByDay(3),
  },

  {
    id: 4,
    title: 'Some Event',
    start: subtractDateByDay(7),
    end: subtractDateByDay(6),
  },
  {
    id: 5,
    title: 'Conference',
    start: subtractDateByDay(10),
    end: subtractDateByDay(7),
    desc: 'Big conference for important people',
  },
  {
    id: 6,
    title: 'Meeting',
    start: subtractDateByDay(3),
    end: subtractDateByDay(3),
    desc: 'Pre-meeting meeting, to prepare for the meeting',
  },

  {
    id: 14,
    title: 'Today',
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
  },

  {
    id: 21,
    title: 'Phone Interview',
    start: subtractDateByDay(13),
    end: subtractDateByDay(13),
  },

  {
    id: 23,
    title: 'Go to the gym',
    start: subtractDateByDay(15),
    end: subtractDateByDay(15),
  },
];
