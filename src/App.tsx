import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {CategoryPage} from "./pages/CategoryPage";
import {MenuPage} from "./pages/MenuPage";
import {CommandPrefixPage} from "./pages/CommandPrefixPage";
import {WelcomeMessagePage} from "./pages/WelcomeMessagePage";
import {GuildContext} from "./utils/contexts/GuildContext";

function App() {
    const [guildId, setGuildId] = useState('');

    const updateGuildId = (id: string) => setGuildId(id);
  return (
      <GuildContext.Provider value={{guildId, updateGuildId}}>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/menu" element={<MenuPage />} />
              {/*<Route path="/dashboard" element={<DashboardPage />} />*/}
              <Route path="/categories" element={<CategoryPage />} />
              <Route path="/guild/command-prefix" element={<CommandPrefixPage />} />
              <Route path="/guild/welcome-message" element={<WelcomeMessagePage />} />
          </Routes>
      </GuildContext.Provider>
  );
}

export default App;
