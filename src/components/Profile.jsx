import React, { useState } from 'react';
import { Home, Calendar, User, LogOut, Edit, Image, Plus } from 'lucide-react';

export default function GreenLeafProfile() {
  const [activeTab, setActiveTab] = useState('Posts');
  const [postText, setPostText] = useState("What's happening in your green world?");

  const handlePost = () => {
    console.log('Post submitted:', postText);
    setPostText("What's happening in your green world?");
  };

  const handleNewEvent = () => {
    console.log('New Event clicked');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="relative mx-auto sm:mx-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl font-bold">
                H
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="flex-1 text-center sm:text-left w-full">
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-2 mb-2">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 break-all">Hammed Sola</h2>
                <button className="text-gray-600 hover:text-gray-800 flex items-center">
                  <Edit className="w-4 h-4" />
                  <span className="text-sm ml-1">Edit</span>
                </button>
              </div>
              <p className="text-gray-600 mb-3 text-sm sm:text-base break-all">@Hamdsola@yahoo.com</p>
              <div className="flex justify-center sm:justify-start space-x-4 sm:space-x-6 text-sm text-gray-600">
                <span><strong className="text-gray-900">2</strong> Posts</span>
                <span><strong className="text-gray-900">1</strong> Events</span>
                <span><strong className="text-gray-900">2</strong> Comments</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-4 sm:mb-6">
          <div className="flex border-b border-gray-200 overflow-x-auto">
            <button
              onClick={() => setActiveTab('Posts')}
              className={`flex-shrink-0 px-4 sm:px-6 py-3 sm:py-4 text-sm font-medium ${
                activeTab === 'Posts'
                  ? 'text-gray-900 border-b-2 border-gray-900'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Posts
            </button>
            <button
              onClick={() => setActiveTab('Events')}
              className={`flex-shrink-0 px-4 sm:px-6 py-3 sm:py-4 text-sm font-medium ${
                activeTab === 'Events'
                  ? 'text-gray-900 border-b-2 border-gray-900'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Events
            </button>
            <div className="flex-1"></div>
            <div className="p-2 sm:p-4 flex-shrink-0">
              <button
                onClick={handleNewEvent}
                className="bg-green-500 hover:bg-green-600 text-white text-xs sm:text-sm font-medium py-2 px-3 sm:px-4 rounded-lg flex items-center space-x-1 transition duration-200"
              >
                <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">New Event</span>
                <span className="sm:hidden">New</span>
              </button>
            </div>
          </div>

          {/* Post Creation Area */}
          <div className="p-4 sm:p-6">
            <div className="flex items-start space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-sm sm:text-lg font-bold flex-shrink-0">
                H
              </div>
              <div className="flex-1 min-w-0">
                <textarea
                  value={postText}
                  onChange={(e) => setPostText(e.target.value)}
                  className="w-full p-3 text-sm sm:text-base text-gray-700 placeholder-gray-500 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  rows="3"
                  placeholder="What's happening in your green world?"
                />
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0 mt-3">
                  <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 self-start">
                    <Image className="w-4 h-4" />
                    <span className="text-sm">Add Photo</span>
                  </button>
                  <button
                    onClick={handlePost}
                    className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 px-4 sm:px-6 rounded-lg transition duration-200 self-end sm:self-auto"
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Posts/Events Content */}
        <div className="space-y-4 sm:space-y-6">
          {activeTab === 'Posts' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {/* Post 1 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&crop=center"
                  alt="Urban cityscape with buildings"
                  className="w-full h-40 sm:h-48 object-cover"
                />
              </div>
              
              {/* Post 2 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center"
                  alt="Group of people outdoors"
                  className="w-full h-40 sm:h-48 object-cover"
                />
              </div>
            </div>
          )}

          {activeTab === 'Events' && (
            <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 text-center">
              <div className="text-gray-500 mb-4">
                <Calendar className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 opacity-50" />
                <p className="text-sm sm:text-base">No events created yet</p>
              </div>
              <button
                onClick={handleNewEvent}
                className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 sm:px-6 rounded-lg transition duration-200 text-sm sm:text-base"
              >
                Create Your First Event
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}