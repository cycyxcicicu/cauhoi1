import React from 'react';
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div className="min-h-screen bg-purple-900 flex flex-col items-center justify-center">
      {/* Navbar */}
      <header className="w-full flex justify-between items-center px-8 lg:px-80 py-4 text-white fixed top-0 bg-purple-900">
     
          <h1 className="text-xl font-bold">Quizizz</h1>
     
        <div className="flex  space-x-4" >
          <Link to="/dangki" className="bg-white text-purple-900 py-1 px-4 rounded">Đăng Kí</Link>
        </div>
      </header>
      {/* Spacer để tránh nội dung bị ẩn dưới navbar */}
      {/* Main Container */}
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg mx-auto lg:max-w-4xl lg:flex">
        
        {/* Form Section */}
        <div className="lg:w-1/2 lg:p-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Log in to Quizizz</h2>
        
          {/* Registration Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
              Đăng Nhập
            </button>
          </form>
          
          {/* Additional Info */}
          <p className="text-gray-500 text-center mt-4 text-sm">
            By signing up, you agree to our <a href="#" className="text-purple-600">Terms of Service</a> & <a href="#" className="text-purple-600">Privacy Policy</a>.
          </p>
          <p className="text-center mt-2">
            Already have an account? <a href="/dangki" className="text-purple-600 font-semibold">Đăng Kí</a>
          </p>
        </div>
        
        {/* Image Section */}
        <div className="hidden lg:block lg:w-1/2 lg:relative">
          <img
            src="https://img.giaoduc.net.vn/w1000/Uploaded/2024/edxwpcqdh/2021_07_21/cogiao-4136.jpg" // Đặt đường dẫn ảnh tương tự ảnh bạn gửi vào đây
            alt="Welcome"
            className="rounded-r-lg h-full w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white">
            <p className="font-semibold">Teachers love us ❤️</p>
            <p>Join over 200 million educators and learners on Quizizz</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
