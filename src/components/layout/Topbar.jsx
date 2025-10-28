import { FiSearch, FiBell, FiMessageSquare, FiPlus, FiMenu, FiChevronDown } from 'react-icons/fi';

const Topbar = ({ onMenuClick }) => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center">
          <button
            onClick={onMenuClick}
            className="p-2 rounded-md text-gray-500 hover:bg-gray-100 mr-2 lg:hidden"
          >
            <FiMenu className="w-5 h-5" />
          </button>
          
          {/* Search bar */}
          <div className="relative max-w-md w-full hidden lg:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent text-sm"
              placeholder="Search for posts, analytics..."
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Create new button */}
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
            <FiPlus className="-ml-1 mr-2 h-4 w-4" />
            Create New
          </button>

          {/* Icons */}
          <div className="flex items-center space-x-1">
            <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100 relative">
              <FiBell className="h-5 w-5" />
              <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-red-500"></span>
            </button>

            <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100 relative">
              <FiMessageSquare className="h-5 w-5" />
              <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-blue-500"></span>
            </button>
          </div>

          {/* User profile */}
          <div className="flex items-center space-x-2 pl-2 border-l border-gray-200">
            <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-medium text-sm">
              UN
            </div>
            <span className="hidden md:inline-block text-sm font-medium text-gray-700">User Name</span>
            <FiChevronDown className="h-4 w-4 text-gray-500" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
