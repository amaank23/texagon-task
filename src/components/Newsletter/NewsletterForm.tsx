import React from "react";
import NewsletterInputButton from "./NewsletterInputButton";

type Props = {};

const NewsletterForm = (props: Props) => {
  return (
    <div className="flex flex-col items-center gap-7">
      <h4 className="text-white font-bold text-2xl">Stay Up to Date</h4>
      <NewsletterInputButton />
      <p className="text-white">
        By subscribing you agree with our Privacy Policy
      </p>
    </div>
  );
};

export default NewsletterForm;
