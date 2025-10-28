import { FiArrowUpRight, FiUsers, FiEye, FiHeart, FiMessageSquare, FiFileText } from 'react-icons/fi';

const Dashboard = () => {
  // Sample data - replace with actual data in a real app
  const stats = [
    { name: 'Total Posts', value: '1,234', change: '+12%', changeType: 'increase', icon: <FiFileText className="h-6 w-6 text-primary-500" /> },
    { name: 'Engagement', value: '8.2%', change: '+2.4%', changeType: 'increase', icon: <FiHeart className="h-6 w-6 text-pink-500" /> },
    { name: 'Impressions', value: '24.5K', change: '+5.1%', changeType: 'increase', icon: <FiEye className="h-6 w-6 text-blue-500" /> },
    { name: 'New Followers', value: '156', change: '-3.2%', changeType: 'decrease', icon: <FiUsers className="h-6 w-6 text-green-500" /> },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Welcome back! Here's what's happening with your account.</p>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
            Export
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-primary-600 border border-transparent rounded-md shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
            Create New
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="px-4 py-5 overflow-hidden bg-white rounded-lg shadow dark:bg-gray-800">
            <div className="flex items-center">
              <div className="p-3 rounded-md bg-opacity-10" style={{ backgroundColor: `${stat.icon.props.className.includes('text-') ? stat.icon.props.className.split('text-')[1].split(' ')[0] + '20' : 'rgba(99, 102, 241, 0.1)'}` }}>
                {stat.icon}
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 truncate dark:text-gray-400">{stat.name}</p>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900 dark:text-white">{stat.value}</p>
                  <span className={`ml-2 flex items-center text-sm font-medium ${stat.changeType === 'increase' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    {stat.change}
                    <FiArrowUpRight className={`${stat.changeType === 'decrease' ? 'transform rotate-180' : ''} h-4 w-4 ml-0.5`} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
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
