import React from 'react';
import KanbanColumn from './KanbanColumn';

const KanbanBoard = ({ tickets, users, grouping, ordering }) => {
  const groupTickets = () => {
    const grouped = {};

    if (grouping === 'status') {
      grouped['Todo'] = tickets.filter(ticket => ticket.status === 'Todo');
      grouped['In progress'] = tickets.filter(ticket => ticket.status === 'In progress');
      grouped['Done'] = tickets.filter(ticket => ticket.status === 'Done');
      grouped['Canceled'] = tickets.filter(ticket => ticket.status === 'Canceled');
    } else if (grouping === 'user') {
      users.forEach(user => {
        grouped[user.name] = tickets.filter(ticket => ticket.userId === user.id);
      });
    } else if (grouping === 'priority') {
      grouped['No priority'] = tickets.filter(ticket => ticket.priority === 0);
      grouped['Low'] = tickets.filter(ticket => ticket.priority === 1);
      grouped['Medium'] = tickets.filter(ticket => ticket.priority === 2);
      grouped['High'] = tickets.filter(ticket => ticket.priority === 3);
      grouped['Urgent'] = tickets.filter(ticket => ticket.priority === 4);
    }

    return grouped;
  };

  const sortTickets = (tickets) => {
    if (ordering === 'priority') {
      return tickets.sort((a, b) => b.priority - a.priority);
    } else if (ordering === 'title') {
      return tickets.sort((a, b) => a.title.localeCompare(b.title));
    }
    return tickets;
  };

  const groupedTickets = groupTickets();

  return (
    <div className="kanban-board">
      {Object.entries(groupedTickets).map(([key, tickets]) => (
        <KanbanColumn key={key} title={key} tickets={sortTickets(tickets)} users={users} />
      ))}
    </div>
  );
};

export default KanbanBoard;