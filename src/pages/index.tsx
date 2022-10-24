import { FC } from "react";
import { Routes, Route, Outlet } from "react-router";
import { GamePage } from "./GamePage";
import { IndexPage } from "./IndexPage";

export const Pages: FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Outlet />
          </div>
        }
      >
        <Route index element={<IndexPage />} />
        <Route path="game/:provider/:game" element={<GamePage />} />
      </Route>
    </Routes>
  );
};
