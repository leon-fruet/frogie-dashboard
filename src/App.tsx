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
import { PartialGuild } from "./utils/types/PartialGuild.type";

function App() {
  const [guild, setGuild] = useState<PartialGuild>({} as PartialGuild);
  const { user, error, isLoading } = useFetchUser();
  const updateGuild = (guild: PartialGuild) => setGuild(guild);

  return (
    <GuildContext.Provider value={{ guild, updateGuild }}>
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
