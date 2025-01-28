'use client'

import { useState, useEffect } from 'react'

type CategoryType = 'Government' | 'Community' | 'Business' | 'Recreation';

interface CategoryColors {
  Government: {
    bg: string;
    text: string;
    dot: string;
  };
  Community: {
    bg: string;
    text: string;
    dot: string;
  };
  Business: {
    bg: string;
    text: string;
    dot: string;
  };
  Recreation: {
    bg: string;
    text: string;
    dot: string;
  };
}

const categoryColors: CategoryColors = {
  Government: { bg: 'bg-[#EBF8FF]', text: 'text-[#2C5282]', dot: 'bg-[#2C5282]' },
  Community: { bg: 'bg-[#F0FFF4]', text: 'text-[#276749]', dot: 'bg-[#276749]' },
  Business: { bg: 'bg-[#FAF5FF]', text: 'text-[#553C9A]', dot: 'bg-[#553C9A]' },
  Recreation: { bg: 'bg-[#FFFAF0]', text: 'text-[#9C4221]', dot: 'bg-[#9C4221]' }
}

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 0))
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const eventsPerPage = 3

  const [events, setEvents] = useState([
    {
      name: 'City Council Meeting',
      date: '2024-01-24',
      time: '14:00:00',
      category: 'Government',
      location: 'City Hall Commission Chambers',
      description: 'Regular city council meeting discussing community matters.'
    },
    {
      name: 'Community Festival',
      date: '2024-01-24',
      time: '10:00:00',
      category: 'Community',
      location: 'Daytona Beach Bandshell',
      description: 'Annual community festival with local vendors, food, and entertainment.'
    },
    {
      name: 'Beach Cleanup Drive',
      date: '2024-01-25',
      time: '09:00:00',
      category: 'Community',
      location: 'Main Street Pier',
      description: 'Join us for our monthly beach cleanup initiative.'
    },
    {
      name: 'Business Networking Event',
      date: '2024-01-26',
      time: '18:30:00',
      category: 'Business',
      location: 'Ocean Center - Grand Ballroom',
      description: 'Local business networking and mixer event. Connect with entrepreneurs and business leaders.'
    },
    {
      name: 'Youth Sports Tournament',
      date: '2024-01-27',
      time: '09:00:00',
      category: 'Recreation',
      location: 'Jackie Robinson Ballpark',
      description: 'Annual youth sports competition featuring local teams.'
    },
    {
      name: 'Town Hall Meeting',
      date: '2024-01-28',
      time: '15:00:00',
      category: 'Government',
      location: 'City Hall - Auditorium',
      description: 'Public town hall meeting with city officials to discuss upcoming projects.'
    },
    {
      name: 'Farmers Market',
      date: '2024-01-20',
      time: '08:00:00',
      category: 'Community',
      location: 'Downtown Riverfront',
      description: 'Weekly farmers market featuring local produce and artisanal goods.'
    },
    {
      name: 'Tech Startup Pitch Night',
      date: '2024-01-22',
      time: '19:00:00',
      category: 'Business',
      location: 'Innovation Hub',
      description: 'Local startups pitch their ideas to investors and community members.'
    },
    {
      name: 'Beach Volleyball Tournament',
      date: '2024-01-21',
      time: '10:00:00',
      category: 'Recreation',
      location: 'Main Beach',
      description: 'Professional and amateur beach volleyball competition.'
    },
    {
      name: 'Planning Commission Meeting',
      date: '2024-01-23',
      time: '13:00:00',
      category: 'Government',
      location: 'City Hall - Room 150',
      description: 'Monthly planning commission meeting to review development proposals.'
    },
    {
      name: 'Art Walk',
      date: '2024-01-29',
      time: '17:00:00',
      category: 'Community',
      location: 'Downtown Arts District',
      description: 'Monthly art walk featuring local galleries and street performers.'
    },
    {
      name: 'Chamber of Commerce Breakfast',
      date: '2024-01-30',
      time: '08:30:00',
      category: 'Business',
      location: 'Plaza Resort & Spa',
      description: 'Monthly networking breakfast for chamber members and guests.'
    }
  ])

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const formatDisplayDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('default', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
  }

  const prevMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))
  }

  const getFilteredEvents = () => {
    if (selectedDate) {
      return events.filter(event => event.date === selectedDate)
    }
    const currentMonth = currentDate.getMonth()
    const currentYear = currentDate.getFullYear()
    return events.filter(event => {
      const eventDate = new Date(event.date)
      return eventDate.getMonth() === currentMonth && eventDate.getFullYear() === currentYear
    })
  }

  const getCurrentPageEvents = () => {
    const start = (currentPage - 1) * eventsPerPage
    const end = start + eventsPerPage
    return getFilteredEvents().slice(start, end)
  }

  const totalPages = Math.ceil(getFilteredEvents().length / eventsPerPage)

  const clearDateFilter = () => {
    setSelectedDate(null)
  }

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate)
    const firstDay = getFirstDayOfMonth(currentDate)
    
    // Create empty cells for days before the first day of the month
    const emptyCells = Array(firstDay).fill(null).map((_, i) => (
      <div key={`empty-${i}`} className="min-h-[100px] p-2 border border-gray-100 bg-gray-50"></div>
    ))
    
    // Create cells for each day of the month
    const dayCells = Array.from({ length: daysInMonth }, (_, i) => {
      const day = i + 1
      const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
      const dayEvents = events.filter(event => event.date === dateStr)
      const isSelected = dateStr === selectedDate
      const isToday = day === new Date().getDate() && 
                     currentDate.getMonth() === new Date().getMonth() && 
                     currentDate.getFullYear() === new Date().getFullYear()

      return (
        <div
          key={day}
          onClick={() => setSelectedDate(dateStr)}
          className={`min-h-[100px] p-2 border border-gray-100 transition-colors hover:bg-gray-50 cursor-pointer
            ${isToday ? 'ring-2 ring-primary ring-opacity-50 bg-primary bg-opacity-5' : ''}
            ${isSelected ? 'bg-gray-100' : ''}`}
        >
          <div className={`font-semibold ${isToday ? 'text-primary' : ''}`}>{day}</div>
          {dayEvents.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-1">
              {dayEvents.slice(0, 2).map((event, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${categoryColors[event.category as CategoryType].dot}`}
                ></div>
              ))}
              {dayEvents.length > 2 && (
                <div className="text-xs text-gray-600">+{dayEvents.length - 2} more</div>
              )}
            </div>
          )}
        </div>
      )
    })
    
    // Calculate remaining cells to complete the grid
    const totalCells = Math.ceil((daysInMonth + firstDay) / 7) * 7
    const remainingCells = Array(totalCells - (daysInMonth + firstDay))
      .fill(null)
      .map((_, i) => (
        <div
          key={`remaining-${i}`}
          className="min-h-[100px] p-2 border border-gray-100 bg-gray-50"
        ></div>
      ))

    return [...emptyCells, ...dayCells, ...remainingCells]
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-dunbar text-5xl md:text-6xl xl:text-7xl font-bold text-[#154777] text-center mb-6">
          Upcoming Events
        </h2>
        <p className="header-special text-xl md:text-2xl text-center mb-16">
          Stay updated with the latest events in Daytona Beach
        </p>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Calendar Section */}
          <div className="w-full md:w-2/3">
            {/* Calendar Controls */}
            <div className="flex justify-between items-center mb-8 bg-white rounded-lg p-4 shadow-sm">
              <div className="flex space-x-4">
                <button
                  onClick={prevMonth}
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition duration-300"
                >
                  <i className="fas fa-chevron-left mr-2"></i>Previous
                </button>
                <button
                  onClick={nextMonth}
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition duration-300"
                >
                  Next<i className="fas fa-chevron-right ml-2"></i>
                </button>
              </div>
              
              <h3 className="text-2xl font-dunbar font-bold text-primary">
                {currentDate.toLocaleString('default', {
                  month: 'long',
                  year: 'numeric'
                })}
                {selectedDate && (
                  <button
                    onClick={clearDateFilter}
                    className="text-sm ml-2 text-gray-500 hover:text-primary"
                  >
                    <i className="fas fa-times"></i> Clear filter
                  </button>
                )}
              </h3>
            </div>

            {/* Calendar Grid */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Days of Week */}
              <div className="grid grid-cols-7 bg-gray-50">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div
                    key={day}
                    className="py-3 text-center font-semibold text-gray-700"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Days */}
              <div className="grid grid-cols-7">
                {renderCalendar()}
              </div>
            </div>
          </div>

          {/* Events Section */}
          <div className="w-full md:w-1/3">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-dunbar font-bold mb-6">
                {selectedDate
                  ? `Events for ${formatDisplayDate(selectedDate)}`
                  : "This Month's Events"}
                {selectedDate && (
                  <button
                    onClick={clearDateFilter}
                    className="text-sm ml-2 text-gray-500 hover:text-primary"
                  >
                    <i className="fas fa-times"></i> Clear filter
                  </button>
                )}
              </h3>

              <div className="space-y-4">
                {getCurrentPageEvents().map((event, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg ${categoryColors[event.category as CategoryType].bg}`}
                  >
                    <div className="flex justify-between items-start">
                      <h4 className={`font-semibold ${categoryColors[event.category as CategoryType].text}`}>
                        {event.name}
                      </h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${categoryColors[event.category as CategoryType].bg} ${categoryColors[event.category as CategoryType].text}`}>
                        {event.category}
                      </span>
                    </div>

                    <div className="mt-3">
                      <div className="text-sm text-gray-600">
                        <i className="fas fa-map-marker-alt mr-2"></i>
                        {event.location}
                      </div>
                      <div className="text-sm text-gray-600">
                        <i className="far fa-calendar mr-2"></i>
                        {formatDisplayDate(event.date)}
                      </div>
                      <div className="text-sm text-gray-600">
                        <i className="far fa-clock mr-2"></i>
                        {new Date(`2000-01-01T${event.time}`).toLocaleTimeString('en-US', {
                          hour: 'numeric',
                          minute: 'numeric',
                          hour12: true
                        })}
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        {event.description}
                      </p>
                    </div>
                  </div>
                ))}

                {getFilteredEvents().length === 0 && (
                  <p className="text-center text-gray-500 py-4">
                    No events found for this {selectedDate ? 'day' : 'month'}.
                  </p>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center space-x-2 mt-6 pt-4 border-t border-gray-200">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-3 py-1 rounded ${
                          currentPage === page
                            ? 'bg-primary text-white'
                            : 'text-gray-500 hover:text-primary'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
