import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { initializeCart } from "./utils/cartCleanup";

const App = () => {
  useEffect(() => {
    // Initialize and cleanup cart on app startup
    initializeCart();
  }, []);

  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
