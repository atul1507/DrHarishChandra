import { useState, useEffect } from "react";

const ProfileSidebar = () => {
  const [slideClass, setSlideClass] = useState("-translate-x-full");

  useEffect(() => {
    const timer = setTimeout(() => setSlideClass("translate-x-0"), 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <aside className="w-full lg:w-1/4">

      {/* Profile Image */}
      <div className="border border-[#e6ccbb] p-2">
        <img
          src="/profile.jpg"
          alt="Dr. Harish Chandra"
          className={`w-full h-auto transition-transform duration-500 ${slideClass}`}
        />
      </div>

      {/* Office Hours */}
      <div className="mt-4 text-center">
        <h3 className="font-semibold text-lg text-[#3C2F2B]">
          Office Hours
        </h3>
        <p className="text-gray-600 mt-1">
          Monday to Friday<br />
          9:00 to 5:30 pm
        </p>
      </div>

    </aside>
  );
};

export default ProfileSidebar;
