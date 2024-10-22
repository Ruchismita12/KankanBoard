import React, { useState, useEffect } from 'react';
import './App.css';
import KanbanBoard from './components/KanbanBoard';
import DisplayMenu from './components/DisplayMenu';
import 'src/react-refresh-runtime.js';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState('status');
  const [ordering, setOrdering] = useState('priority');

  useEffect(() => {
    fetchData();
    loadViewState();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await response.json();
      setTickets(data.tickets);
      setUsers(data.users);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDisplayChange = (newGrouping, newOrdering) => {
    setGrouping(newGrouping);
    setOrdering(newOrdering);
    saveViewState(newGrouping, newOrdering);
  };

  const saveViewState = (grouping, ordering) => {
    localStorage.setItem('viewState', JSON.stringify({ grouping, ordering }));
  };

  const loadViewState = () => {
    const savedViewState = localStorage.getItem('viewState');
    if (savedViewState) {
      const { grouping: savedGrouping, ordering: savedOrdering } = JSON.parse(savedViewState);
      setGrouping(savedGrouping);
      setOrdering(savedOrdering);
    }
  };

  return (
    <div className="App">
      <DisplayMenu grouping={grouping} ordering={ordering} onDisplayChange={handleDisplayChange} />
      <KanbanBoard tickets={tickets} users={users} grouping={grouping} ordering={ordering} />
    </div>
  );
}

export default App;