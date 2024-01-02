import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from  "react-router-dom";


import StampPaper from "./Component/StampPaper";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/:id" element={<StampPaper />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
