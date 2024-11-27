import React, { useState } from "react";

const Navbar = ({ buttonLabel, modalTitle, modalPlaceholder, modalButtonText }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [imagePreview, setImagePreview] = useState(null);
	const [className, setClassName] = useState("");
	// Hàm mở modal
	const openModal = () => setIsModalOpen(true);

	// Hàm đóng modal
	const closeModal = () => setIsModalOpen(false);
	const handleImageUpload = (event) => {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				const imageUrl = URL.createObjectURL(file); // Tạo URL tạm thời
				setImagePreview(imageUrl); // Cập nhật URL cho imagePreview 
			};
			reader.readAsDataURL(file); // Đọc file dưới dạng URL
		}
	};

	// Gửi dữ liệu lớp học
	const handleSubmit = () => {
		console.log("Tên lớp học:", className);
		console.log("Ảnh đại diện:", imagePreview);
		// Thực hiện các hành động tiếp theo (API call, lưu trữ,...)
	};
	const handleButtonClick = () => {
		if (modalButtonText !== "Join") {
		  handleSubmit();
		} else {
		  console.log("Join button clicked");
		}
	  };
	return (
		<div className="flex items-center justify-between bg-purple-100 p-4 pl-16">
			{/* Phần trái: Tiêu đề */}
			<div className="text-xl font-bold flex items-center space-x-5">
				<span>Quizizz</span>
			</div>

			{/* Thanh tìm kiếm */}
			<div className="flex items-center bg-white shadow-md rounded-full px-4 py-2 w-full max-w-lg mx-auto">
				<span className="material-icons text-gray-400">search</span>
				<input
					type="text"
					placeholder={`Tìm kiếm trong ${buttonLabel === "Tạo lớp học" ? "lớp học" : "chủ đề"}`}
					className="flex-1 outline-none px-4 text-sm text-gray-600"
				/>
			</div>

			{/* Nút mở modal */}
			<button
				onClick={openModal}
				className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
			>

				{buttonLabel}
			</button>

			{/* Modal */}
			{isModalOpen && (
				<>
					{/* Lớp nền tối */}
					<div className="fixed inset-0 bg-black bg-opacity-50 z-[50]"></div>

					{/* Nội dung modal */}
					<div className="fixed inset-0 flex justify-center items-center z-[60]">
						<div
							className="bg-gradient-to-b from-purple-700 to-purple-900 p-8 rounded-xl relative shadow-lg flex flex-col items-center pointer-events-auto"
						>
							{/* Nút X để đóng modal */}
							<button
								className="absolute top-2 right-2 text-white bg-transparent rounded-full w-8 h-8 flex items-center justify-center hover:text-red-600 hover:scale-110 transition-all duration-200"
								onClick={closeModal}
							>
								✕
							</button>

							<h3 className="text-white text-2xl font-bold mb-4">{modalTitle}</h3>
							<div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md w-full max-w-md">

								<input
									type="text"
									placeholder={modalPlaceholder}
									className="flex-1 outline-none px-2 text-gray-600"
									onChange={(e) => setClassName(e.target.value)}
								/>
								<button
									className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 ml-2"
									onClick={handleButtonClick}
								>
									{modalButtonText}
								</button>

							</div>
							{
								modalButtonText !== "Join" && (
									<div className="flex flex-col items-center bg-white rounded-lg px-2 py-2 shadow-md w-full max-w-md mb-4 mt-2">
										<input
											type="file"
											accept="image/*"
											onChange={handleImageUpload}
											className="mb-2"
										/>
										{imagePreview && (
											<div className="border rounded-lg overflow-hidden w-40 h-40">
												<img
													src={imagePreview}
													alt="Ảnh đại diện"
													className="object-cover w-full h-full"
												/>
											</div>
										)}
									</div>
								)
							}

						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Navbar;
