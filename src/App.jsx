import React from "react";
import EmailListPage from "./components/EmailListPage";
import EmailDetailPage from "./components/EmailDetailPage";
import "./App.scss";
import { Outlet } from "react-router-dom";

import useFetch from "./hooks/use-fetch";
import { Route, Routes } from "react-router-dom";

function App() {
  const { data, isLoading, error } = useFetch(
    "https://flipkart-email-mock.now.sh/"
  );

  return (
    <div className="app">
      <div className="filter">
        <div className="filter-title">filter by:</div>
        <div className="filter-btns">
          <button>unread</button>
          <button>read</button>
          <button>favourite</button>
        </div>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <main>
              {data && <EmailListPage data={data?.list} />}
              <Outlet />
            </main>
          }
        >
          <Route path="/:id" element={<EmailDetailPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

{
  /* <Route path="/:id" element={<p>detail</p>}></Route> */
}
{
  /* <main>
          {data && <EmailListPage data={data?.list} />}
          <EmailDetailPage />
        </main> */
}
