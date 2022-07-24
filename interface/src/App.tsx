import React from "react";
import "./style.pcss";
import { getSdk } from "generated/graphql";
import { GraphQLClient } from "graphql-request";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "components/Layout";
import Marketplace from "pages/Marketplace";
import MyAccount from "pages/MyAccount";
import NewCollection from "pages/NewCollection";
import HarbPage from "pages/HarbPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const api = getSdk(new GraphQLClient("https://thegraph"));

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="account" element={<MyAccount />} />
          <Route path="new-collection" element={<NewCollection />} />
          <Route path=":address/:tokenID" element={<HarbPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
