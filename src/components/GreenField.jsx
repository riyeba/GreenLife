import React, { useState } from 'react';
import { Home, Calendar, User, LogOut, Heart, MessageCircle, Share, Clock, MapPin, Users } from 'lucide-react';

export default function GreenLeafFeed() {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleComment = () => {
    setComments(comments + 1);
  };

  const handleShare = () => {
    console.log('Share clicked');
  };

  const handleViewProfile = () => {
    console.log('View Profile clicked');
  };

  const handleViewAllEvents = () => {
    console.log('View All Events clicked');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
     

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-8">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          {/* Left Sidebar - Profile Card */}
          <div className="lg:w-80 order-2 lg:order-1">
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 sticky top-24">
              {/* Profile Header */}
              <div className="text-center mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold mx-auto mb-3">
                  H
                </div>
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1 break-all">Hamdsola@yahoo.com</h3>
                <p className="text-gray-600 text-xs sm:text-sm break-all">Lorem ipsum qui ullum</p>
              </div>

              {/* Stats */}
              <div className="flex justify-center space-x-6 gap-12 sm:space-x-8 mb-4 text-center">
                <div>
                  <div className="text-lg sm:text-xl font-bold text-gray-900">0</div>
                  <div className="text-xs text-gray-600">Network</div>
                </div>
                {/* <div>
                  <div className="text-lg sm:text-xl font-bold text-gray-900">0</div>
                  <div className="text-xs text-gray-600">Events</div>
                </div> */}
                <div>
                  <div className="text-lg sm:text-xl font-bold text-gray-900">0</div>
                  <div className="text-xs text-gray-600">Fans</div>
                </div>
              </div>

              {/* View Profile Button */}
              <button
                onClick={handleViewProfile}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2.5 px-4 rounded-lg transition duration-200 text-sm"
              >
                View Profile
              </button>
            </div>
          </div>

          {/* Center - Main Feed */}
          <div className="flex-1 order-1 lg:order-2">
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              {/* Post Header */}
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-bold flex-shrink-0">
                  H
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base truncate">Hamdsola@yahoo.com</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">1s ago</p>
                </div>
              </div>

              {/* Post Content */}
              <div className="mb-4">
                <p className="text-sm sm:text-base text-gray-800 mb-4 leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                  unknown printer took a galley of type a...
                </p>
                <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                  See more
                </button>
              </div>

              {/* Post Image */}
              <div className="mb-4">
                <img
                  src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop&crop=center"
                  alt="Soccer players on field"
                  className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-lg"
                />
              </div>

              {/* Post Actions */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div className="flex items-center space-x-6">
                  <button
                    onClick={handleLike}
                    className={`flex items-center space-x-2 ${
                      isLiked ? 'text-red-500' : 'text-gray-600 hover:text-red-500'
                    } transition duration-200`}
                  >
                    <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                    <span className="text-sm font-medium">{likes}</span>
                  </button>
                  <button
                    onClick={handleComment}
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition duration-200"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">{comments}</span>
                  </button>
                </div>
                <button
                  onClick={handleShare}
                  className="text-gray-600 hover:text-gray-800 transition duration-200"
                >
                  <Share className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Upcoming Events */}
          <div className="lg:w-80 order-3">
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 sticky top-24">
              <h3 className="font-semibold text-gray-900 text-lg mb-4">Upcoming Events</h3>

              {/* Event 1 */}
              <div className="mb-4 pb-4 border-b border-gray-100 last:border-b-0 last:pb-0">
                <h4 className="font-medium text-gray-900 text-sm mb-2">What is Lorem Ipsum?</h4>
                <div className="text-xs text-gray-600 mb-1 flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  Tomorrow 02:38 PM
                </div>
                <div className="text-xs text-gray-600 mb-1 flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  5th2FL
                </div>
                <div className="text-xs text-gray-600 flex items-center">
                  <Users className="w-3 h-3 mr-1" />
                  2 attending
                </div>
              </div>

              {/* Event 2 */}
              <div className="mb-4 pb-4 border-b border-gray-100 last:border-b-0 last:pb-0">
                <h4 className="font-medium text-gray-900 text-sm mb-2">Movie SHOW</h4>
                <div className="text-xs text-gray-600 mb-1 flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  Fri Nov 18, 08:13 AM
                </div>
                <div className="text-xs text-gray-600 mb-1 flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  North Central Avenue
                </div>
                <div className="text-xs text-gray-600 flex items-center">
                  <Users className="w-3 h-3 mr-1" />
                  5 attending
                </div>
              </div>

              {/* View All Events Button */}
              <button
                onClick={handleViewAllEvents}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2.5 px-4 rounded-lg transition duration-200 text-sm mt-4"
              >
                View All Events
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}