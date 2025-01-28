export interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

export const events: Event[] = [
  {
    title: 'City Council Meeting',
    date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    time: '19:00:00',
    location: 'City Hall',
    description: 'Regular city council meeting discussing community matters.'
  },
  {
    title: 'Beach Cleanup Day',
    date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    time: '09:00:00',
    location: 'Main Beach',
    description: 'Community beach cleanup event. Bring gloves and join us!'
  },
  {
    title: 'Farmers Market',
    date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    time: '08:00:00',
    location: 'Downtown Square',
    description: 'Weekly farmers market featuring local produce and crafts.'
  },
  {
    title: 'Summer Concert Series',
    date: new Date(Date.now() + 9 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    time: '20:00:00',
    location: 'Bandshell',
    description: 'Live music performance featuring local bands.'
  },
  {
    title: 'Youth Sports Registration',
    date: new Date(Date.now() + 12 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    time: '10:00:00',
    location: 'Community Center',
    description: 'Registration for summer youth sports programs.'
  }
];
