// import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/router";
import { GlobalProvider } from "./global/globalProvider";
import { useEffect } from "react";
import { spinUp } from "./API/userApi";

const App = () => {
  useEffect(() => {
    spinUp();
  }, []);
  return (
    <GlobalProvider>
      {" "}
      <RouterProvider router={router} />
    </GlobalProvider>
  );
};

export default App;
