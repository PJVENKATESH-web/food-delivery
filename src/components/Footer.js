const Footer = () => {
  return (
    <div className="border-t border-gray-300 mt-16 px-10 py-10 flex  flex-col md:flex-row items-center justify-between gap-6 bg-orange-500">
      
      {/* Left Text */}
      <div className="md:w-1/2">
        <h1 className="text-2xl md:text-3xl font-bold leading-snug text-gray-800">
          For better experience, download the{" "}
          <span className="text-red-500">Foody</span> app now
        </h1>
      </div>

      {/* Right Buttons */}
      <div className="flex gap-4 md:w-1/2 justify-start md:justify-end">
        
        {/* Google Play */}
        <button className="flex items-center gap-3 bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition">
          <img
            className="w-8 h-8"
            src="https://play.google.com/favicon.ico"
            alt="playstore"
          />
          <div className="flex flex-col text-left leading-tight">
            <span className="text-xs">GET IT ON</span>
            <span className="font-semibold text-sm">Google Play</span>
          </div>
        </button>

        {/* App Store */}
        <button className="flex items-center gap-3 bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition">
          <img
            className="w-8 h-8"
            src="https://apple.com/favicon.ico"
            alt="appstore"
          />
          <div className="flex flex-col text-left leading-tight">
            <span className="text-xs">Download on the</span>
            <span className="font-semibold text-sm">App Store</span>
          </div>
        </button>

      </div>
    </div>
  );
};

export default Footer;