import { Link, useLocation } from 'react-router-dom';
import { 
  FiHome, 
  FiBarChart2, 
  FiFileText, 
  FiUsers, 
  FiSettings, 
  FiHelpCircle, 
  FiChevronLeft, 
  FiChevronRight,
  FiMessageSquare,
  FiCalendar,
  FiBell,
  FiSearch
} from 'react-icons/fi';

const Sidebar = ({ isOpen, onToggle }) => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Dashboard', icon: <FiHome className="w-5 h-5" />, path: '/dashboard' },
    { name: 'Analytics', icon: <FiBarChart2 className="w-5 h-5" />, path: '/analytics' },
    { name: 'Content', icon: <FiFileText className="w-5 h-5" />, path: '/content' },
    { name: 'Audience', icon: <FiUsers className="w-5 h-5" />, path: '/audience' },
    { name: 'Messages', icon: <FiMessageSquare className="w-5 h-5" />, path: '/messages' },
    { name: 'Calendar', icon: <FiCalendar className="w-5 h-5" />, path: '/calendar' },
  ];

  return (
    <div className={`${isOpen ? 'w-72' : 'w-20'} bg-gradient-to-b from-gray-900 to-gray-800 text-white transition-all duration-300 flex flex-col h-screen shadow-2xl`}>
      {/* Logo and Toggle */}
      <div className="flex items-center justify-between p-5 border-b border-gray-700">
        {isOpen ? (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
              FP
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              FlipPost
            </h1>
          </div>
        ) : (
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg mx-auto">
            FP
          </div>
        )}
        <button
          onClick={onToggle}
          className="p-1.5 rounded-lg bg-gray-700 hover:bg-gray-600 text-white/80 hover:text-white transition-all duration-200 hover:shadow-md hover:-translate-x-0.5"
        >
          {isOpen ? (
            <FiChevronLeft className="w-5 h-5" />
          ) : (
            <FiChevronRight className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Search Bar (Visible only when expanded) */}
      {isOpen && (
        <div className="px-4 py-3">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 transition-all duration-200"
            />
          </div>
        </div>
      )}

      {/* Main Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-2">
        <div className="mb-6">
          {isOpen && (
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-4 mb-3">
              Navigation
            </p>
          )}
          <ul className="space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.name} className="px-2">
                  <Link
                    to={item.path}
                    className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white shadow-lg shadow-blue-500/10'
                        : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                    } ${!isOpen ? 'justify-center px-0' : ''}`}
                  >
                    <span className={`flex-shrink-0 ${isActive ? 'text-blue-400' : 'text-gray-400'}`}>
                      {item.icon}
                    </span>
                    {isOpen && <span className="ml-3">{item.name}</span>}
                    {isActive && isOpen && (
                      <span className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-auto">
          {isOpen && (
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-4 mb-3">
              Preferences
            </p>
          )}
          <ul className="space-y-1">
            <li className="px-2">
              <Link
                to="/settings"
                className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  location.pathname === '/settings'
                    ? 'bg-gray-700/50 text-white'
                    : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                } ${!isOpen ? 'justify-center px-0' : ''}`}
              >
                <FiSettings className="w-5 h-5" />
                {isOpen && <span className="ml-3">Settings</span>}
              </Link>
            </li>
            <li className="px-2">
              <Link
                to="/help"
                className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  location.pathname === '/help'
                    ? 'bg-gray-700/50 text-white'
                    : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                } ${!isOpen ? 'justify-center px-0' : ''}`}
              >
                <FiHelpCircle className="w-5 h-5" />
                {isOpen && <span className="ml-3">Help & Support</span>}
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* User profile */}
      <div 
        className={`p-4 border-t border-gray-700 bg-gradient-to-r from-gray-800 to-gray-800/80 ${
          isOpen ? 'flex items-center' : 'flex justify-center'
        }`}
      >
        <div className="relative">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-medium shadow-lg">
            U
          </div>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 border-2 border-gray-800 rounded-full"></span>
        </div>
        {isOpen && (
          <div className="ml-3 overflow-hidden">
            <p className="text-sm font-medium text-white truncate">User Name</p>
            <p className="text-xs text-gray-400 truncate">user@example.com</p>
          </div>
        )}
        {isOpen && (
          <div className="ml-auto relative">
            <button className="p-1.5 rounded-lg hover:bg-gray-700/50 text-gray-300 hover:text-white transition-colors">
              <FiBell className="w-5 h-5" />
            </button>
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
