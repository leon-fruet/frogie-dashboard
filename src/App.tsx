import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CategoryPage } from "./pages/CategoryPage";
import { MenuPage } from "./pages/MenuPage";
import { CommandPrefixPage } from "./pages/CommandPrefixPage";
import { WelcomeMessagePage } from "./pages/WelcomeMessagePage";
import { GuildContext } from "./utils/contexts/GuildContext";
import { AppBar } from "./components/AppBar";
import { useFetchUser } from "./utils/hooks/useFetchUser";
import { MoonLoader } from "react-spinners";
import { Flex } from "./utils/styles/index";

function App() {
  const [guildId, setGuildId] = useState("");
  const { user, error, isLoading } = useFetchUser();
  const updateGuildId = (id: string) => setGuildId(id);

  return (
    <GuildContext.Provider value={{ guildId, updateGuildId }}>
      {isLoading ? (
        <Flex justifyContent="center" alignItems="center">
          <MoonLoader size={40} color="white" />
        </Flex>
      ) : user && !error ? (
        <>
          <Routes>
            <Route path="/dashboard/*" element={<AppBar />} />
          </Routes>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            {/*<Route path="/dashboard" element={<DashboardPage />}/>*/}
            <Route path="/dashboard/categories" element={<CategoryPage />} />
            <Route path="/dashboard/prefix" element={<CommandPrefixPage />} />
            <Route
              path="/dashboard/welcome-message"
              element={<WelcomeMessagePage />}
            />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </>
      )}
    </GuildContext.Provider>
  );
}

export default App;
