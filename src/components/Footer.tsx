import Newletter from "./Newsletter/Newletter";
import MainFooter from "./MainFooter/MainFooter";

const Footer = () => {
  return (
    <div className="mx-7 bg-[#090808] p-20 rounded-[2.5rem] mt-2">
      <Newletter />
      <MainFooter />
    </div>
  );
};

export default Footer;
