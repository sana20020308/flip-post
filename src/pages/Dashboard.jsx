import React from 'react';
import {
  FiBarChart2,
  FiCalendar,
  FiPlus,
  FiChevronRight,
  FiTrendingUp,
  FiUsers,
  FiClock,
  FiLayers,
  FiMenu,
  FiSearch,
  FiBell,
  FiChevronDown,
  FiGrid,
  FiFileText,
  FiPieChart,
  FiMail,
  FiSettings,
  FiLogOut
} from 'react-icons/fi';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200">
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-800">FlipPost</h1>
          <button className="text-gray-500 hover:text-gray-700">
            <FiMenu className="w-5 h-5" />
          </button>
        </div>
        
        <nav className="flex-1 px-3 py-4 space-y-1">
          <a href="#" className="flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg">
            <FiGrid className="w-5 h-5 mr-3" />
            Dashboard
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg">
            <FiFileText className="w-5 h-5 mr-3" />
            Posts
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg">
            <FiBarChart2 className="w-5 h-5 mr-3" />
            Analytics
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg">
            <FiUsers className="w-5 h-5 mr-3" />
            Audience
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg">
            <FiPieChart className="w-5 h-5 mr-3" />
            Insights
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg">
            <FiMail className="w-5 h-5 mr-3" />
            Messages
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg">
            <FiSettings className="w-5 h-5 mr-3" />
            Settings
          </a>
        </nav>
        
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
              JD
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-800">John Doe</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
            <button className="ml-auto text-gray-400 hover:text-gray-600">
              <FiLogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-6">
            <div className="flex items-center">
              <button className="md:hidden text-gray-500 hover:text-gray-700">
                <FiMenu className="w-6 h-6" />
              </button>
              <div className="relative ml-4 max-w-xs w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm"
                  placeholder="Search..."
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
                <FiBell className="h-6 w-6" />
              </button>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                  JD
                </div>
                <span className="ml-2 text-sm font-medium text-gray-700">John</span>
                <FiChevronDown className="ml-1 w-4 h-4 text-gray-500" />
              </div>
            </div>
          </div>
        </header>
        
        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Welcome back, <span className="text-blue-600">John</span>!</h1>
            <p className="text-gray-500">Here's what's happening with your account today.</p>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Stats Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Posts</p>
                  <p className="text-2xl font-bold mt-1">1,234</p>
                  <div className="flex items-center mt-2 text-sm text-green-500">
                    <FiTrendingUp className="mr-1" />
                    <span>12% from last month</span>
                  </div>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <FiBarChart2 className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>

            {/* Stats Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500">Engagement</p>
                  <p className="text-2xl font-bold mt-1">8.2%</p>
                  <div className="flex items-center mt-2 text-sm text-green-500">
                    <FiTrendingUp className="mr-1" />
                    <span>2.3% from last week</span>
                  </div>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <FiTrendingUp className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>

            {/* Stats Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500">Followers</p>
                  <p className="text-2xl font-bold mt-1">5,678</p>
                  <div className="flex items-center mt-2 text-sm text-green-500">
                    <FiTrendingUp className="mr-1" />
                    <span>102 new this week</span>
                  </div>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <FiUsers className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>

            {/* Stats Card 4 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500">Scheduled</p>
                  <p className="text-2xl font-bold mt-1">24</p>
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <FiClock className="mr-1" />
                    <span>5 pending approval</span>
                  </div>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg">
                  <FiCalendar className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Content Calendar */}
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold text-gray-800">Content Calendar</h2>
                  <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">View All</button>
                </div>
                
                {/* Calendar Placeholder */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">October 2023</h3>
                    <div className="flex space-x-2">
                      <button className="p-1 rounded hover:bg-gray-100">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button className="p-1 rounded hover:bg-gray-100">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-1 text-center text-sm">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                      <div key={index} className="text-gray-500 font-medium py-2">{day}</div>
                    ))}
                    
                    {Array.from({length: 31}).map((_, index) => {
                      const day = index + 1;
                      const isToday = day === 28; // Example: highlight the 28th
                      const hasEvent = [5, 12, 19, 26].includes(day); // Example days with events
                      
                      return (
                        <div 
                          key={day} 
                          className={`relative py-2 rounded-full ${isToday ? 'bg-blue-100 text-blue-600 font-medium' : ''} ${hasEvent ? 'after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-blue-500 after:rounded-full' : ''}`}
                        >
                          {day}
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                {/* Upcoming Posts */}
                <div>
                  <h3 className="font-medium text-gray-700 mb-3">Upcoming Posts</h3>
                  <div className="space-y-3">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                          <FiLayers className="w-5 h-5" />
                        </div>
                        <div className="ml-3 flex-1">
                          <p className="text-sm font-medium">New Product Launch</p>
                          <p className="text-xs text-gray-500">Scheduled for Oct 30, 2023</p>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600">
                          <FiChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Quick Actions */}
            <div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-between p-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                    <div className="flex items-center">
                      <FiPlus className="w-5 h-5" />
                      <span className="ml-2 font-medium">Create New Post</span>
                    </div>
                    <FiChevronRight className="w-5 h-5" />
                  </button>
                  
                  <button className="w-full flex items-center justify-between p-3 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors">
                    <div className="flex items-center">
                      <FiCalendar className="w-5 h-5" />
                      <span className="ml-2 font-medium">Schedule Post</span>
                    </div>
                    <FiChevronRight className="w-5 h-5" />
                  </button>
                  
                  <button className="w-full flex items-center justify-between p-3 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors">
                    <div className="flex items-center">
                      <FiBarChart2 className="w-5 h-5" />
                      <span className="ml-2 font-medium">View Analytics</span>
                    </div>
                    <FiChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              {/* Recent Activity */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-gray-800">Recent Activity</h2>
                  <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">View All</button>
                </div>
                
                <div className="space-y-4">
                  {[
                    { id: 1, title: 'New post published', time: '2 min ago', status: 'success' },
                    { id: 2, title: 'Post scheduled', time: '1 hour ago', status: 'info' },
                    { id: 3, title: 'New follower', time: '3 hours ago', status: 'success' },
                    { id: 4, title: 'Analytics updated', time: '5 hours ago', status: 'info' },
                  ].map((activity) => (
                    <div key={activity.id} className="flex items-start">
                      <div className={`flex-shrink-0 mt-1 w-2 h-2 rounded-full ${
                        activity.status === 'success' ? 'bg-green-500' : 'bg-blue-500'
                      }`}></div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-800">{activity.title}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;