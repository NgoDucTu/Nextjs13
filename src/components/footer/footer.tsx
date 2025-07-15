"use client";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Về chúng tôi</h3>
            <p className="text-sm text-gray-300">
              Chúng tôi cung cấp giải pháp công nghệ số, truyền thông và nội
              dung số toàn diện.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Dịch vụ</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:underline">
                  Phát triển Web
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  VR/AR
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Nội dung số
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Truyền thông
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>Email: contact@techcity.cloud</li>
              <li>Hotline: 1900 123 456</li>
              <li>Địa chỉ: Hà Nội, Việt Nam</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Mạng xã hội</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">
                Facebook
              </a>
              <a href="#" className="hover:text-gray-400">
                YouTube
              </a>
              <a href="#" className="hover:text-gray-400">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Techcity. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
