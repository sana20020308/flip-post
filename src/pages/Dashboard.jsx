import { FiPlus, FiBarChart2, FiTrendingUp, FiUsers, FiClock, FiCalendar, FiCheckCircle, FiAlertCircle, FiDollarSign, FiRefreshCw } from 'react-icons/fi';

const Dashboard = () => {
  // Stats data
  const stats = [
    { name: 'Total Posts', value: '1,234', change: '+12%', changeType: 'increase', icon: <FiBarChart2 className="h-5 w-5 text-blue-500" /> },
    { name: 'Engagement', value: '8.2%', change: '+2.4%', changeType: 'increase', icon: <FiTrendingUp className="h-5 w-5 text-green-500" /> },
    { name: 'New Followers', value: '156', change: '+24%', changeType: 'increase', icon: <FiUsers className="h-5 w-5 text-purple-500" /> },
    { name: 'Revenue', value: '$3,845', change: '+8.1%', changeType: 'increase', icon: <FiDollarSign className="h-5 w-5 text-yellow-500" /> },
  ];

  // Recent activity data
  const recentActivity = [
    { id: 1, title: 'New post published', description: 'Your post has been published successfully', time: '2 min ago', status: 'success' },
    { id: 2, title: 'Scheduled post', description: 'Post scheduled for tomorrow at 9:00 AM', time: '1 hour ago', status: 'info' },
    { id: 3, title: 'New follower', description: 'You have a new follower', time: '3 hours ago', status: 'success' },
    { id: 4, title: 'Analytics updated', description: 'Your analytics have been updated', time: '5 hours ago', status: 'info' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">Welcome back! Here's what's happening with your account.</p>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Export Report
          </button>
          <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <FiPlus className="w-4 h-4 mr-2" />
            Create New
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="p-5 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                <p className="mt-1 text-2xl font-semibold text-gray-900">{stat.value}</p>
                <div className={`mt-2 flex items-center text-sm font-medium ${stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'}`}>
                  <span className="flex items-center">
                    {stat.change}
                    <FiTrendingUp className={`ml-1 h-4 w-4 ${stat.changeType === 'decrease' ? 'transform rotate-180' : ''}`} />
                  </span>
                  <span className="ml-1 text-xs text-gray-500">vs last week</span>
                </div>
              </div>
              <div className="p-2 rounded-lg bg-gray-50">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 gap-6 mt-6 lg:grid-cols-3">
        {/* Left Column */}
        <div className="lg:col-span-2">
          {/* Analytics Chart */}
          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Analytics Overview</h2>
              <div className="flex space-x-2">
                <select className="text-sm border-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                  <option>This Week</option>
                  <option>Last Week</option>
                  <option>This Month</option>
                  <option>Last Month</option>
                </select>
              </div>
            </div>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Chart will be displayed here</p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
            </div>
            <div className="divide-y divide-gray-100">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="p-4 hover:bg-gray-50">
                  <div className="flex items-start">
                    <div className={`flex-shrink-0 mt-1 mr-3 ${activity.status === 'success' ? 'text-green-500' : 'text-blue-500'}`}>
                      {activity.status === 'success' ? <FiCheckCircle className="w-5 h-5" /> : <FiAlertCircle className="w-5 h-5" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                      <p className="text-sm text-gray-500">{activity.description}</p>
                      <p className="mt-1 text-xs text-gray-400 flex items-center">
                        <FiClock className="w-3 h-3 mr-1" />
                        {activity.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 bg-gray-50 text-center">
              <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
                View all activity
              </button>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">Quick Actions</h2>
            <div className="space-y-3">
              <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-left text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100">
                <FiPlus className="w-5 h-5 mr-3 text-blue-500" />
                Create New Post
              </button>
              <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-left text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100">
                <FiBarChart2 className="w-5 h-5 mr-3 text-green-500" />
                View Analytics
              </button>
              <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-left text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100">
                <FiUsers className="w-5 h-5 mr-3 text-purple-500" />
                Manage Team
              </button>
              <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-left text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100">
                <FiSettings className="w-5 h-5 mr-3 text-yellow-500" />
                Settings
              </button>
            </div>
          </div>

          {/* Recent Updates */}
          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">Recent Updates</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 p-2 mr-3 text-blue-500 bg-blue-50 rounded-lg">
                  <FiRefreshCw className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">New feature released</p>
                  <p className="mt-1 text-sm text-gray-500">We've added new analytics tools to help you grow.</p>
                  <p className="mt-1 text-xs text-gray-400">2 days ago</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 p-2 mr-3 text-purple-500 bg-purple-50 rounded-lg">
                  <FiCalendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Scheduled maintenance</p>
                  <p className="mt-1 text-sm text-gray-500">We'll be performing maintenance on May 15th at 2:00 AM UTC.</p>
                  <p className="mt-1 text-xs text-gray-400">1 week ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Grid - You can add more sections here */}
      <div className="grid grid-cols-1 gap-6 mt-6 lg:grid-cols-3">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <div className="p-6 bg-white rounded-lg shadow dark:bg-gray-800">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Recent Activity</h2>
            <div className="mt-4 space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-start pb-4 border-b border-gray-200 dark:border-gray-700 last:border-0 last:pb-0">
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                    <FiMessageSquare className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">New comment on your post</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">2 hours ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div>
          <div className="p-6 bg-white rounded-lg shadow dark:bg-gray-800">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Quick Stats</h2>
            <div className="mt-4 space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Posts This Week</p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">24</p>
                <p className="text-sm text-green-600 dark:text-green-400">+12% from last week</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Engagement Rate</p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">8.2%</p>
                <p className="text-sm text-green-600 dark:text-green-400">+2.4% from last week</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
