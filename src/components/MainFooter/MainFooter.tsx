type Props = {};
import Logo from "./../../assets/iq-test.svg";
import NavMenu from "./NavMenu";
const MainFooter = (props: Props) => {
  return (
    <div className="flex pt-20 flex-col md:flex-row">
      <div className="flex-1">
        <div className="flex gap-2 mb-4">
          <div>
            <img src={Logo} alt="" />
          </div>
          <h2 className="text-[1.875rem] text-white">IQTEST.ai</h2>
        </div>
        <p className="text-[1.25rem] text-[#808080] max-w-[452px]">
          Test your IQ in a very easy and simple step not complex.
        </p>
      </div>
      <div className="flex-1">
        <NavMenu />
      </div>
    </div>
  );
};

export default MainFooter;
