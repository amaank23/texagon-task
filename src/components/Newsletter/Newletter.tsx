import MessageIcon from "./../../assets/message.png";
import NewsletterForm from "./NewsletterForm";

type Props = {};

const Newletter = (props: Props) => {
  return (
    <div className="flex items-center border-b pb-20 flex-col lg:flex-row">
      <div className="flex-1 flex flex-col gap-6 justify-center items-center lg:justify-start lg:items-start">
        <div>
          <img src={MessageIcon} alt="" />
        </div>
        <h2 className="text-white text-[3.75rem]">Keep up with the latest</h2>
        <p className="text-white text-[1.25rem]">
          Join our newsletter to stay up to date on features and releases.
        </p>
      </div>
      <div className="flex-1">
        <NewsletterForm />
      </div>
    </div>
  );
};

export default Newletter;
