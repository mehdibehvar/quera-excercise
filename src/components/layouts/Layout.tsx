import { ReactNode } from "react";
import Footer from "../Footer";
import MYNavbar from "../Navbar";
import { Container } from "reactstrap";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div style={{ border: "1px solid black" }}>
      <Container style={{border:"1px solid black" }}>
        <MYNavbar color={"info"} expand={"md"} />
        <main>{children}</main>
        <Footer />
      </Container>
    </div>
  );
}
