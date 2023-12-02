// components/WelcomePage.tsx

import React from 'react';
import { useUser } from "../contexts/UserContext";

const App: React.FC = () => {
  const { user } = useUser();

  return (
      <div>
        <h2>Welcome, {user?.name}!</h2>
      </div>
  );
};

export default App;
