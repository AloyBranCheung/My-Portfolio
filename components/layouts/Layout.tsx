import Navbar from "./navbar/Navbar";
import ButtonScrollTop from "./button-to-top/ButtonScrollTop";
import Footer from "./footer/Footer";

export default function Layout(props: Props) {
  return (
    <>
      <ButtonScrollTop />
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}

type Props = {
  children: React.ReactNode;
};
