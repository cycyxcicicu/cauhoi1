import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Card from '../components/Card';
import Setting  from './SettingsPage';
import { Navigate    } from "react-router-dom";
const Trangchu = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false); // Trạng thái Sidebar
  const [activeItem, setActiveItem] = useState("explore"); // Trạng thái mục được chọn
  const cards = [
	{ title: 'VUI TẾT TRUNG THU', description: '15 câu hỏi ', image: './image/trungthu.jpg' },
	{ title: 'ÔN TẬP 2 - GS6_Lever1', description: '98 câu hỏi ', image: './image/ontap.jpg' },
	{ title: 'TRÒ CHƠI CON MỰC', description: '12 câu hỏi ', image: './image/conmuc.jpg' },
	{ title: 'VUI TẾT TRUNG THU', description: '15 câu hỏi ', image: './image/trungthu.jpg' },
	{ title: 'ÔN TẬP 2 - GS6_Lever1', description: '98 câu hỏi ', image: './image/ontap.jpg' },
	{ title: 'TRÒ CHƠI CON MỰC', description: '12 câu hỏi ', image: './image/conmuc.jpg' },
	{ title: 'VUI TẾT TRUNG THU', description: '15 câu hỏi ', image: './image/trungthu.jpg' },
	{ title: 'ÔN TẬP 2 - GS6_Lever1', description: '98 câu hỏi ', image: './image/ontap.jpg' },
	{ title: 'TRÒ CHƠI CON MỰC', description: '12 câu hỏi ', image: './image/conmuc.jpg' },
	{ title: 'VUI TẾT TRUNG THU', description: '15 câu hỏi ', image: './image/trungthu.jpg' },
	{ title: 'ÔN TẬP 2 - GS6_Lever1', description: '98 câu hỏi ', image: './image/ontap.jpg' },
	{ title: 'TRÒ CHƠI CON MỰC', description: '12 câu hỏi ', image: './image/conmuc.jpg' },
	{ title: 'VUI TẾT TRUNG THU', description: '15 câu hỏi ', image: './image/trungthu.jpg' },
	{ title: 'ÔN TẬP 2 - GS6_Lever1', description: '98 câu hỏi ', image: './image/ontap.jpg' },
	{ title: 'TRÒ CHƠI CON MỰC', description: '12 câu hỏi ', image: './image/conmuc.jpg' },
	{ title: 'VUI TẾT TRUNG THU', description: '15 câu hỏi ', image: './image/trungthu.jpg' },
	{ title: 'ÔN TẬP 2 - GS6_Lever1', description: '98 câu hỏi ', image: './image/ontap.jpg' },
	{ title: 'TRÒ CHƠI CON MỰC', description: '12 câu hỏi ', image: './image/conmuc.jpg' },
];
const lophoc = [
	{ title: 'LỚP HỌC 1', description: '15 câu hỏi', image: './image/trungthu.jpg' },
    { title: 'LỚP HỌC 2', description: '98 câu hỏi', image: './image/ontap.jpg' },
    { title: 'LỚP HỌC 3', description: '12 câu hỏi', image: './image/conmuc.jpg' },
    { title: 'LỚP HỌC 4', description: '15 câu hỏi', image: './image/trungthu.jpg' },
    { title: 'LỚP HỌC 5', description: '98 câu hỏi', image: './image/ontap.jpg' },
    { title: 'LỚP HỌC 6', description: '12 câu hỏi', image: './image/conmuc.jpg' },
    { title: 'LỚP HỌC 7', description: '15 câu hỏi', image: './image/trungthu.jpg' },
    { title: 'LỚP HỌC 8', description: '98 câu hỏi', image: './image/ontap.jpg' },
    { title: 'LỚP HỌC 9', description: '12 câu hỏi', image: './image/conmuc.jpg' },
    { title: 'LỚP HỌC 10', description: '15 câu hỏi', image: './image/trungthu.jpg' },
    { title: 'LỚP HỌC 11', description: '98 câu hỏi', image: './image/ontap.jpg' },
    { title: 'LỚP HỌC 12', description: '12 câu hỏi', image: './image/conmuc.jpg' },
    { title: 'LỚP HỌC 13', description: '15 câu hỏi', image: './image/trungthu.jpg' },
    { title: 'LỚP HỌC 14', description: '98 câu hỏi', image: './image/ontap.jpg' },
    { title: 'LỚP HỌC 15', description: '12 câu hỏi', image: './image/conmuc.jpg' },
    { title: 'LỚP HỌC 16', description: '15 câu hỏi', image: './image/trungthu.jpg' },
    { title: 'LỚP HỌC 17', description: '98 câu hỏi', image: './image/ontap.jpg' },
    { title: 'LỚP HỌC 18', description: '12 câu hỏi', image: './image/conmuc.jpg' },
];
const getModalData = () => {
    if (activeItem === "explore") {
      return {
        buttonLabel: "Nhập mã",
        modalTitle: "Nhập mã tham gia",
        modalPlaceholder: "Nhập mã tham gia",
        modalButtonText: "Join",
      };
    } else if (activeItem === "classes") {
      return {
        buttonLabel: "Tạo lớp học",
        modalTitle: "Tạo lớp học mới",
        modalPlaceholder: "Nhập tên lớp học",
        modalButtonText: "Tạo",
      };
    }
    return {};
  };

  const renderContent = () => {
    switch (activeItem) {
      case "explore":
        return (
			
			<div >
					{/* Navbar */}
					<Navbar {...getModalData()}/>

					{/* Main Content */}
					<div className="p-4">
						<h2 className="text-2xl font-bold mb-4">Khám phá các hoạt động thú vị</h2>
						<div className="grid grid-cols-4 gap-4">
							{cards.map((card, index) => (
								<Card key={index} {...card} />
							))}
						</div>
					</div>
			</div>
		);
      case "classes":
        return (
			<div>
			<Navbar {...getModalData()}/>
			<div className="p-4">
			<h2 className="text-2xl font-bold mb-4">Khám phá các hoạt động thú vị</h2>
			<div className="grid grid-cols-4 gap-4">
				{lophoc.map((card, index) => (
					<Card key={index} {...card} />
				))}
			</div>
		</div>
		</div>
        );
      case "profile":
        return (
          <div className="p-10">
            <h2 className="text-2xl font-bold mb-4">Hồ sơ cá nhân</h2>
          </div>
        );
		case "logout":
			// replace để kiểm soát việc lưu hoặc thay thế trang hiện tại trong lịch sử trình duyệt.
			return <Navigate to="/dangnhap" replace />;
		case "settings":
        return (
          <div className="p-10">
            <Setting/>
          </div>
        );
      default:
        return (
          <div className="p-10">
            <h2 className="text-2xl font-bold mb-4">Trang không tồn tại</h2>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar
        isExpanded={isSidebarExpanded}
        toggleSidebar={setIsSidebarExpanded}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />

      {/* Nội dung chính */}
      <div
        className={`flex-1 transition-all duration-300 ${
          isSidebarExpanded ? "ml-64" : "ml-16"
        }`}
      >
        {/* Nội dung động */}
        {renderContent()}
      </div>
    </div>
  );
};

export default Trangchu;
