import React from 'react';
import KanbanCard from './KanbanCard';

const KanbanColumn = ({ title, tickets, users }) => {
  return (
    <div className="kanban-column">
      <h2>{title} {tickets.length}</h2>
      {tickets.map(ticket => (
        <KanbanCard key={ticket.id} ticket={ticket} user={users.find(user => user.id === ticket.userId)} />
      ))}
    </div>
  );
};

export default KanbanColumn;