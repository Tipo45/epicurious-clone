import "./Subscription.css";
import image1 from "../assets/Images/img-001.png"
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Subscription = () => {
  return (
    <>
      <div className="holder">
        <img src={image1} alt="subscription image" />
        <p>
          Just Launched: Our New Subscription Box. <span>JOIN NOW <MdOutlineKeyboardDoubleArrowRight /></span>
        </p>
      </div>
    </>
  );
};

export default Subscription;
