import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find the better card deal <br className="sm:block hidden" /> in few easy steps</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quis esse possimus explicabo quasi, unde perspiciatis molestias iste veniam suscipit impedit sunt distinctio. Nobis saepe assumenda suscipit voluptas totam omnis!</p>
      <Button styles='mt-10 rounded-xl' />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
