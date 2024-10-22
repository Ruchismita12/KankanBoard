import React from 'react';
import KanbanCard from './KanbanCard';
import 'src/react-refresh-runtime.js';

const KanbanColumn = ({ title, icon, tickets, users, grouping }) => {
  return (
    <div className="kanban-column">
      <h2>
        <span className="column-icon">{icon}</span>
        {title} <span className="ticket-count">{tickets.length}</span>
      </h2>
      {tickets.map(ticket => (
        <KanbanCard key={ticket.id} ticket={ticket} user={users.find(user => user.id === ticket.userId)} grouping={grouping} />
      ))}
    </div>
  );
};

export default KanbanColumn;