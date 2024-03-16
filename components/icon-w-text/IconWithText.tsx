import React, { useState } from 'react';
import { IconType } from 'react-icons/lib';
import "./IconWithText.css"

interface IconWithTextProps {
  icon: IconType;
  text: string;
}

const IconWithText: React.FC<IconWithTextProps> = ({ icon: Icon, text }) => {
  const [isHovered, setIsHovered] = useState<any>(false);

  return (
    <div
      className={`icon-container ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon className="icon" />
      <span className="icon-text">{isHovered ? text : ''}</span>
    </div>
  );
};

export default IconWithText;
