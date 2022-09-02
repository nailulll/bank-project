import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `} id="client">
    <div className="absolute z-0 w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
    <div className="w-full flex justify-content-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className={styles.heading2}>What people are <br className="sm:block hidden" /> saying about us</h1>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quibusdam quia earum quos quisquam nulla numquam placeat. Vero, natus, magni aliquam possimus praesentium quod consequatur debitis dicta ab quasi voluptatem?</p>
      </div>
    </div>
    <div className="flex flex-wrap sm:flex-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;