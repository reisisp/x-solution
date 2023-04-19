import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
// import Spinner from "shared/ui/spinner";

export const withRouter = (component: () => React.ReactNode) => () =>
(
  <BrowserRouter>
    <Suspense fallback={"loading"}>{component()}</Suspense>
  </BrowserRouter>
);
