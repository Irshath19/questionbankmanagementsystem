import React, { useState } from 'react';
import '../CSS/Newcontainer.css';
import { useNavigate } from 'react-router-dom';

const DropdownContent = ({ container, onClose }) => {
  const navigate = useNavigate();

  const handleContentClick = (contentNumber) => {
    navigate(`/${container}year${contentNumber}`);
    onClose();
  };

  return (
    <div className="dropdown-content">
      <div onClick={() => handleContentClick(1)}>Year 1</div>
      <div onClick={() => handleContentClick(2)}>Year 2</div>
      <div onClick={() => handleContentClick(3)}>Year 3</div>
      <div onClick={() => handleContentClick(4)}>Year 4</div>
    </div>
  );
};

const Newcontainer = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  // const navigate = useNavigate();

  const containerNames = ['CSE', 'IT', 'AIML', 'AIDS', 'BME', 'BT', 'FT', 'AGRI', 'EEE', 'ECE', 'MECH', 'CIVIL', 'CYBER'];

  const handleDropdownClick = (container) => {
    setActiveDropdown((prevActiveDropdown) =>
      prevActiveDropdown === container ? null : container
    );
  };

  return (
    <div className="App">
      {containerNames.map((container, index) => (
        <div
          key={index}
          className={`container ${activeDropdown === container ? 'active' : ''}`}
          onClick={() => handleDropdownClick(container)}
        >
          {container}
          {activeDropdown === container && (
            <DropdownContent
              container={container}
              onClose={() => handleDropdownClick(container)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Newcontainer;
