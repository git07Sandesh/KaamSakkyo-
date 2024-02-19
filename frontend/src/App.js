import { BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import HomePage from './pages/Homepage';
import GroupPage from './pages/GroupPage';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/:groupName' element={<GroupPage />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
