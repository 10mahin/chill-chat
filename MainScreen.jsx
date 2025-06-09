import React, { useState } from 'react';
import TalksTab from './TalksTab';
import MomentsTab from './MomentsTab';
import SearchTab from './SearchTab';
import AnonymousTab from './AnonymousTab';
import MeTab from './MeTab';

const MainScreen = () => {
  const [activeTab, setActiveTab] = useState('talks');

  const renderTab = () => {
    switch (activeTab) {
      case 'talks': return <TalksTab />;
      case 'moments': return <MomentsTab />;
      case 'search': return <SearchTab />;
      case 'anonymous': return <AnonymousTab />;
      case 'me': return <MeTab />;
      default: return <TalksTab />;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto bg-gray-100">
        {renderTab()}
      </div>
      <div className="flex justify-around items-center bg-white border-t p-2">
        <button onClick={() => setActiveTab('talks')} className={activeTab === 'talks' ? 'text-blue-600 font-bold' : ''}>💬 Talks</button>
        <button onClick={() => setActiveTab('moments')} className={activeTab === 'moments' ? 'text-blue-600 font-bold' : ''}>📸 Moments</button>
        <button onClick={() => setActiveTab('search')} className={activeTab === 'search' ? 'text-blue-600 font-bold' : ''}>🔍 Search</button>
        <button onClick={() => setActiveTab('anonymous')} className={activeTab === 'anonymous' ? 'text-blue-600 font-bold' : ''}>🕶️ Anonymous</button>
        <button onClick={() => setActiveTab('me')} className={activeTab === 'me' ? 'text-blue-600 font-bold' : ''}>🙋 Me</button>
      </div>
    </div>
  );
};

export default MainScreen;
