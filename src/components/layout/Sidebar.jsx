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
  FiSearch,
  FiPlus,
  FiChevronDown,
  FiFolder,
  FiChevronUp
} from 'react-icons/fi';

const Sidebar = ({ isOpen, onToggle }) => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Dashboard', icon: <FiHome className="w-5 h-5" />, path: '/dashboard', count: 0 },
    { name: 'Analytics', icon: <FiBarChart2 className="w-5 h-5" />, path: '/analytics', count: 0 },
    { name: 'Content', icon: <FiFileText className="w-5 h-5" />, path: '/content', count: 12 },
    { name: 'Audience', icon: <FiUsers className="w-5 h-5" />, path: '/audience', count: 0 },
    { name: 'Messages', icon: <FiMessageSquare className="w-5 h-5" />, path: '/messages', count: 0 },
    { name: 'Calendar', icon: <FiCalendar className="w-5 h-5" />, path: '/calendar', count: 0 },
  ];

  const projects = [
    { name: 'Project 1', color: 'bg-blue-500', count: 12 },
    { name: 'Project 2', color: 'bg-green-500', count: 8 },
    { name: 'Project 3', color: 'bg-yellow-500', count: 3 },
  ];
  
  const [showProjects, setShowProjects] = useState(true);

  return (
    <div className={`${isOpen ? 'w-64' : 'w-16'} bg-white border-r border-gray-100 flex flex-col h-screen transition-all duration-200`}>
      {/* Logo */}
      <div className="flex items-center justify-between p-4 h-16 border-b border-gray-100">
        {isOpen ? (
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center text-white font-semibold">
              F
            </div>
            <span className="ml-3 text-lg font-semibold text-gray-800">FlipPost</span>
          </div>
        ) : (
          <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center text-white font-semibold mx-auto">
            F
          </div>
        )}
        {isOpen && (
          <button 
            onClick={onToggle}
            className="p-1.5 rounded-md hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <FiChevronLeft className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.name} className="relative">
                <Link
                  to={item.path}
                  className={`flex items-center px-3 py-2.5 text-sm font-medium ${
                    isActive
                      ? 'text-blue-600 font-medium'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <span className={`flex-shrink-0 ${isActive ? 'text-blue-500' : 'text-gray-400'}`}>
                    {item.icon}
                  </span>
                  {isOpen && <span className="ml-3">{item.name}</span>}
                  {item.count > 0 && (
                    <span className="ml-auto text-xs bg-gray-100 text-gray-500 rounded-full px-2 py-0.5">
                      {item.count}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-500 rounded-r"></span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Projects Section */}
        <div className={`${isOpen ? 'block' : 'hidden'} mt-6`}>
          <button 
            onClick={() => setShowProjects(!showProjects)}
            className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 rounded-md transition-colors"
          >
            <div className="flex items-center">
              <FiFolder className="w-4 h-4 mr-3 text-gray-400" />
              <span>Projects</span>
            </div>
            {showProjects ? (
              <FiChevronUp className="w-4 h-4 text-gray-400" />
            ) : (
              <FiChevronDown className="w-4 h-4 text-gray-400" />
            )}
          </button>
          
          {showProjects && (
            <ul className="mt-1 pl-9 space-y-1">
              {projects.map((project, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="flex items-center px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-50"
                  >
                    <span className={`w-2 h-2 ${project.color} rounded-full mr-3`}></span>
                    <span className="truncate">{project.name}</span>
                    <span className="ml-auto text-xs text-gray-400">{project.count}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className="flex items-center px-3 py-2 text-sm text-blue-500 hover:text-blue-600 rounded-md hover:bg-blue-50"
                >
                  <FiPlus className="w-4 h-4 mr-3" />
                  <span>Add Project</span>
                </a>
              </li>
            </ul>
          )}
        </div>
      </nav>

      {/* User profile */}
      <div className={`mt-auto p-3 border-t border-gray-100 ${isOpen ? 'flex items-center' : 'flex flex-col items-center py-4'}`}>
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
          U
        </div>
        {isOpen && (
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-gray-800">User Name</p>
            <p className="text-xs text-gray-400">Free Plan</p>
          </div>
        )}
        
        {isOpen && (
          <button className="text-gray-400 hover:text-gray-600 p-1 rounded-md hover:bg-gray-100">
            <FiChevronDown className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
