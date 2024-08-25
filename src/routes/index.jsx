import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import App from "../App";
const Home = lazy(() => import("../pages/Home"));
const ExplorePage = lazy(() => import("../pages/ExplorePage"));
const DetailsPage = lazy(() => import("../pages/DetailsPage"));
const SearchPage = lazy(() => import("../pages/SearchPage"));



const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: ":explore",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <ExplorePage />
            </Suspense>
          ),
        },
        {
          path: ":explore/:id",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <DetailsPage />
            </Suspense>
          ),
        },
        {
          path: "search",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <SearchPage />
            </Suspense>
          ),
        },
      ],
    },
  ]);
  

export default router;