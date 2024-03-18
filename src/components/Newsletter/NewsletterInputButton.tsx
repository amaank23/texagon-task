const NewsletterInputButton = () => {
  return (
    <div className="flex gap-4 w-full">
      <input
        type="text"
        className="text-white rounded-full w-full h-[3rem] flex-grow px-3"
        placeholder="Enter Your Email"
      />
      <button className="rounded-full bg-[#5235E8] w-[200px] text-white">
        Subscribe
      </button>
    </div>
  );
};

export default NewsletterInputButton;
