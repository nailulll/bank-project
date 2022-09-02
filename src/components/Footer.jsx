import { logo } from "../assets";
import styles from "../style";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex flex-1 flex-col justify-start mr-10">
          <img src={logo} alt="logo" className="w-[266px] h-[72px] object-contain" />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, eos.</p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap sm:mt-0 mt-10">
          {footerLinks.map((val) => (
            <div key={val.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className="font-poppinss font-medium text-[18px] leading-[27px] text-white">{val.title}</h4>
              <ul className="list-none mt-4">
                {val.links.map((link, i) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondart cursor-pointer ${i !== val.links.length - 1 ? 'mb-4' : 'mb-0'} `}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col  pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppinss font-normal text-center text-[18px] leading-[27px] text-white">2021 HOOBANK All Right Reserved</p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, i) => (
            <img key={social.id} src={social.icon} alt={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${i !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;