import React, { useState } from 'react';

const MeTab = () => {
  const [anonymous, setAnonymous] = useState(false);
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">🙋 Me</h2>
      <div>
        <h3 className="font-semibold mb-2">📘 Learn</h3>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={anonymous}
            onChange={() => setAnonymous(!anonymous)}
            className="form-checkbox"
          />
          <span>Anonymous Chat</span>
        </label>
      </div>
    </div>
  );
};
export default MeTab;
