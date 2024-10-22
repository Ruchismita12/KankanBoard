import React from 'react';

const KanbanCard = ({ ticket, user }) => {
  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 4: return '!!!';
      case 3: return '!!';
      case 2: return '!';
      case 1: return '▼';
      default: return '...';
    }
  };

  return (
    <div className="kanban-card">
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        {user && <img src={user.avatar} alt={user.name} className="user-avatar" />}
      </div>
      <h3>{ticket.title}</h3>
      <div className="card-footer">
        <span className="priority-icon">{getPriorityIcon(ticket.priority)}</span>
        <span className="feature-request">• Feature Request</span>
      </div>
    </div>
  );
};

export default KanbanCard;