import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="feedback-card mr-0 mt-5 flex max-w-[370px] flex-col justify-between rounded-[20px] px-10 py-12 sm:mr-5 md:mr-10">
    <img src={quotes} alt="quotes" className="w-[42px] h-[27px] object-contain" />
    <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">{content}</p>
    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">{name}</h4>
        <h4 className="font-poppins font-semibold text-[16px] leading-[24px] text-dimWhite">{title}</h4>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
