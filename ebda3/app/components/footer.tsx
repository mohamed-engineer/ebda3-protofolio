const Footer = () => {
    return (
<footer className="bg-gray-900 text-white py-6 border-t border-gray-700">
<div className="container mx-auto px-4 text-center">
        
          <h2 className="text-2xl font-bold mb-2">فريق إبداع</h2>
          <p className="text-gray-400 text-sm mb-4">
            نهتم بتقديم أفضل الدورات والخدمات التقنية لمساعدتك على التطور 🚀
          </p>
  
          {/* 🔹 روابط التواصل الاجتماعي */}
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="hover:text-blue-400 transition">
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <i className="fab fa-github text-xl"></i>
            </a>
          </div>
  
          {/* 🔹 حقوق النشر */}
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} فريق إبداع. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  