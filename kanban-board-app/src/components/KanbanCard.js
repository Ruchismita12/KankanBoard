import React from 'react';
import 'src/react-refresh-runtime.js';

const KanbanCard = ({ ticket, user, grouping }) => {
  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 4: return '🔴';
      case 3: return '🟠';
      case 2: return '🟡';
      case 1: return '🔵';
      default: return '⚪';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Backlog': return '📋';
      case 'Todo': return '📝';
      case 'In progress': return '🔄';
      case 'Done': return '✅';
      case 'Canceled': return '❌';
      default: return '❓';
    }
  };

  return (
    <div className="kanban-card">
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        {grouping !== 'user' && user && <img src={user.avatar} alt={user.name} className="user-avatar" />}
      </div>
      <h3>{ticket.title}</h3>
      <div className="card-footer">
        {grouping !== 'priority' && <span className="priority-icon">{getPriorityIcon(ticket.priority)}</span>}
        {grouping !== 'status' && <span className="status-icon">{getStatusIcon(ticket.status)}</span>}
        <span className="feature-request">• Feature Request</span>
      </div>
    </div>
  );
};

export default KanbanCard;