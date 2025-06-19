import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Globalstyle from "./styles/GlobalStyles"; // Import global styles
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound"; // Import a 404 page component
import AppLayout from "./ui/AppLayout";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 60 seconds
    },
  },
}); // Initialize QueryClient for React Query

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Globalstyle />
        <BrowserRouter>
          <Routes>
            {/* Define your main layout here if needed */}
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="Dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="bookings" element={<Bookings />} />
              <Route path="cabins" element={<Cabins />} />
              <Route path="users" element={<Users />} />
              <Route path="settings" element={<Settings />} />
              <Route path="account" element={<Account />} />
            </Route>
            {/* Define your routes here */}
            <Route path="login" element={<Login />} /> {/* Fallback route */}
            <Route path="*" element={<PageNotFound />} /> {/* Default route */}
            {/* Add more routes as needed */}
          </Routes>
        </BrowserRouter>
        <Toaster
          position="right-top"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: { duration: 5000 },

            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px ",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
};

export default App;
