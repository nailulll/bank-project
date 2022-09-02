import { features } from "../constants";
import styles, { layout } from "../style";
import Button from './Button';

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[19px] leading-[28px] mb-1">{title}</h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">{content}</p>
    </div>
  </div>
)

const Business = () => {
  return (
    <section id="features" class={`${layout.section}`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You do the business, <br className="sm:block hidden" /> we'll handle the money</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, laborum vel accusantium non porro consequatur architecto tempore minima quod dolorem soluta omnis debitis nam assumenda culpa veniam corrupti labore dignissimos?</p>
        <Button styles="mt-10 rounded-xl" />
      </div>
      <div className={`${layout.sectionImg} flex-col hover:cursor-pointer`}>
        {features.map((features, i) => (
          <FeatureCard key={features.id} {...features} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Business;
