import React, { useState } from 'react';

const DisplayMenu = ({ grouping, ordering, onDisplayChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleGroupingChange = (e) => {
    onDisplayChange(e.target.value, ordering);
  };

  const handleOrderingChange = (e) => {
    onDisplayChange(grouping, e.target.value);
  };

  return (
    <div className="display-menu">
      <button onClick={() => setIsOpen(!isOpen)}>
        ☰ Display
      </button>
      {isOpen && (
        <div className="menu-dropdown">
          <div>
            <label>Grouping</label>
            <select value={grouping} onChange={handleGroupingChange}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div>
            <label>Ordering</label>
            <select value={ordering} onChange={handleOrderingChange}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayMenu;