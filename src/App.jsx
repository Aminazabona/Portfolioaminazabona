import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        {/* Les autres sections arriveront ici */}
        <div className="h-[200vh]"></div> {/* Temporaire pour tester le scroll flou */}
      </main>
    </div>
  );
}

export default App;