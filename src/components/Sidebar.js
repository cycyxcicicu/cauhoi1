import React from "react";

const Sidebar = ({ isExpanded, toggleSidebar, activeItem, setActiveItem }) => {
  const menuItems = [
    { id: "explore", label: "Khám phá", icon: "explore" },
    { id: "classes", label: "Các lớp học", icon: "class" },
    { id: "profile", label: "Hồ sơ", icon: "account_circle" },
    { id: "logout", label: "Đăng xuất", icon: "logout" },
    { id: "settings", label: "Cài đặt", icon: "settings" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-purple-50 shadow-lg ${
        isExpanded ? "w-64" : "w-16"
      } transition-all duration-300 flex flex-col`}
      onMouseEnter={() => toggleSidebar(true)}
      onMouseLeave={() => toggleSidebar(false)}
    >
      {/* Logo */}
      <div className="my-4 flex justify-center">
        <img src="./image/meo.jpg" alt="Logo" className="w-12 h-12" />
      </div>

      {/* Nút Tạo mới */}
      <div className="flex flex-col items-center w-full gap-4">
        <button className="bg-purple-500 text-white px-4 py-4 rounded-lg shadow-lg hover:bg-purple-600 transition-all flex items-center justify-center w-full">
          <span className="material-icons text-white">add_circle</span>
          <span
            className={`ml-4 text-sm font-medium ${
              isExpanded ? "inline-block" : "hidden"
            }`}
          >
            Tạo mới
          </span>
        </button>
      </div>

      {/* Các nút danh mục */}
      <div className="flex flex-col w-full gap-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`w-full flex items-center p-2 rounded-lg ${
              activeItem === item.id
                ? "bg-purple-200 text-purple-800 font-bold"
                : "hover:bg-purple-100 text-purple-500"
            }`}
            onClick={() => setActiveItem(item.id)}
          >
            <div
              className={`flex items-center ${
                isExpanded ? "justify-start pl-6" : "justify-center"
              } w-full`}
            >
              <span className="material-icons">{item.icon}</span>
              <span
                className={`ml-2 text-sm ${
                  isExpanded ? "inline-block" : "hidden"
                }`}
              >
                {item.label}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
