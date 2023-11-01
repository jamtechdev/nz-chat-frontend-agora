// MainLayout.js
import React from "react";
import { Container, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InformationMessageProvider from "../../_contexts/InformationMessageContext";
const MessengerLayout = ({ children }) => (
  <>
    <InformationMessageProvider>
      <Container>
        <Row>{children}</Row>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={true}
          closeOnClick={() => {
            return true;
          }}
          rtl={false}
          pauseOnHover={true}
          theme="dark"
        />
      </Container>
    </InformationMessageProvider>
  </>
);

export default MessengerLayout;
