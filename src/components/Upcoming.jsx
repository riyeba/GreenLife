import React, { useState } from 'react';
import { Home, Calendar, User, LogOut, Clock, MapPin, Users } from 'lucide-react';

export default function GreenLeafEvents() {
  const [rsvpStatus, setRsvpStatus] = useState({
    event1: { attending: 2, notAttending: 0 },
    event2: { attending: 0, notAttending: 0 }
  });

  const handleRSVP = (eventId, status) => {
    setRsvpStatus(prev => ({
      ...prev,
      [eventId]: {
        attending: status === 'attending' ? prev[eventId].attending + 1 : prev[eventId].attending,
        notAttending: status === 'not-attending' ? prev[eventId].notAttending + 1 : prev[eventId].notAttending
      }
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      {/* <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-green-500">GreenLeaf</h1>
            </div>
            <nav className="flex items-center space-x-6">
              <a href="#" className="flex items-center text-gray-600 hover:text-gray-800">
                <Home className="w-4 h-4 mr-1" />
                Feed
              </a>
              <a href="#" className="flex items-center text-green-600 hover:text-green-700">
                <Calendar className="w-4 h-4 mr-1" />
                Events
              </a>
              <a href="#" className="flex items-center text-gray-600 hover:text-gray-800">
                <User className="w-4 h-4 mr-1" />
                Profile
              </a>
              <a href="#" className="flex items-center text-gray-600 hover:text-gray-800">
                <LogOut className="w-4 h-4 mr-1" />
                Sign Out
              </a>
            </nav>
          </div>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Upcoming Events</h2>
          <p className="text-gray-600">Discover and join community events</p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Event 1 - What is Lorem Ipsum? */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">What is Lorem Ipsum?</h3>
                  <div className="flex items-center text-sm text-gray-600 mb-1">
                    <Clock className="w-4 h-4 mr-1" />
                    July 15, 2025 at 02:38 AM
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    5th2Fl
                  </div>
                  <p className="text-sm text-gray-500">by @writersworkshops</p>
                </div>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">Event</span>
              </div>

              {/* Event Image */}
              <div className="mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop&crop=center" 
                  alt="Lorem Ipsum Event" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              {/* RSVP Section */}
              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-3">RSVP</h4>
                <div className="flex space-x-4 mb-4">
                  <button
                    onClick={() => handleRSVP('event1', 'attending')}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition duration-200"
                  >
                    Attending
                  </button>
                  <button
                    onClick={() => handleRSVP('event1', 'not-attending')}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium transition duration-200"
                  >
                    Not Attending
                  </button>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    {rsvpStatus.event1.attending} Attending
                  </span>
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                    {rsvpStatus.event1.notAttending} Not Attending
                  </span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Description</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                  unknown printer took a galley of type and scrambled it to make a type specimen 
                  book. It has survived not only five centuries, but also the leap into electronic 
                  typesetting, remaining essentially unchanged.
                </p>
              </div>
            </div>
          </div>

          {/* Event 2 - Movie SHOW */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Movie SHOW</h3>
                  <div className="flex items-center text-sm text-gray-600 mb-1">
                    <Clock className="w-4 h-4 mr-1" />
                    November 18, 2025 at 08:13 AM
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    North Central Avenue
                  </div>
                  <p className="text-sm text-gray-500">by @cinematicexperience</p>
                </div>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">Event</span>
              </div>

              {/* Event Image Grid */}
              <div className="mb-4">
                <div className="grid grid-cols-2 gap-2 h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1550591927-391fccf9934b?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Movie 1" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="grid grid-rows-2 gap-2">
                    <img 
                      src="https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=200&h=100&fit=crop&crop=center" 
                      alt="Movie 2" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=200&h=100&fit=crop&crop=center" 
                      alt="Movie 3" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* RSVP Section */}
              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-3">RSVP</h4>
                <div className="flex space-x-4 mb-4">
                  <button
                    onClick={() => handleRSVP('event2', 'attending')}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition duration-200"
                  >
                    Attending
                  </button>
                  <button
                    onClick={() => handleRSVP('event2', 'not-attending')}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium transition duration-200"
                  >
                    Not Attending
                  </button>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    {rsvpStatus.event2.attending} Attending
                  </span>
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                    {rsvpStatus.event2.notAttending} Not Attending
                  </span>
                </div>
              </div>

              {/* Description and Location */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Description</h4>
                  <p className="text-sm text-gray-600">Movie show</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Location</h4>
                  <p className="text-sm text-gray-600">123 London street, London</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}