import Layout from "../Layout/Index";

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
  ],
};

export default MainRoutes;
