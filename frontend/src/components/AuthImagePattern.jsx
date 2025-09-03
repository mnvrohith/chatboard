import React from "react";
import avatar1 from "../assets/avatar1.png";
import avatar3 from "../assets/avatar3.png";
import avatar5 from "../assets/avatar5.png";
import avatar6 from "../assets/avatar6.png";
import avatar9 from "../assets/avatar9.png";
import avatar2 from "../assets/avatar2.png";
import avatar4 from "../assets/avatar4.png";
import avatar7 from "../assets/avatar7.png";
import avatar8 from "../assets/avatar8.png";
// Example avatar URLs (replace with your Ghibli-style avatars)
const avatars = [
  avatar1,
  avatar2,
 avatar3,
  avatar4,
  avatar5,
  avatar7,
  avatar6,
  avatar8,
  avatar9,
];

const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {avatars.map((avatar, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl overflow-hidden animate-float`}
              style={{ animationDelay: `${i * 0.2}s` }} // staggered float
            >
              <img
                src={avatar}
                alt={`avatar ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
