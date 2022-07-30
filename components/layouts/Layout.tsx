import Navbar from "./navbar/Navbar";
import ButtonScrollTop from "./button-to-top/ButtonScrollTop";

export default function Layout(props: Props) {
  return (
    <>
      <ButtonScrollTop />
      <Navbar />
      <main>{props.children}</main>
    </>
  );
}

type Props = {
  children: React.ReactNode;
};
