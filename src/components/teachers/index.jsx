import { motion, Variants } from "framer-motion";
import { Wrapper, WrapperTeachers } from "./styled-index";
import img from "../.../../../assets/boss/user.png";
import { WrapperContainer } from "../../App-styled";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

const cardVariants = {
  offscreen: {
    y: 350,
  },
  onscreen: {
    y: 10,
    rotate: 10,
    transition: {
      type: "spring",
      bounce: 0.1,
      duration: 0.9,
    },
  },
};

const hue = (h) => `hsl(${h}, 100%, 50%)`;

function Card({ emoji, hueA, hueB }) {
  const background = `linear-gradient(30deg, ${hue(hueA)}, ${hue(hueB)})`;

  const { t, i18n } = useTranslation();
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.9 }}
    >
      <div className="splash" style={{ background }} />
      <motion.div className="card" variants={cardVariants}>
        <img src={img} alt="photo" />
        <h3>Azam Qahramoniy</h3>
        <p>Kurs muallifi</p>
        <ul>
          <li>
            <p>
              12 yildan ortiq vaqtdan beri dars beradi va bolaligida boqqan
              sigiridan ham dangasaroq odamga ingliz tilini o’rgata oladi
            </p>
          </li>
          <li>
            <p>
              O’zbekistondagi birinchi raqamli ingliz tili blogeri va
              o’qituvchisi
            </p>
          </li>
          <li>
            <p>"The best speech of the year" — 2021 yil</p>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
}

const food = [
  ["", 30, 10],
  ["", 20, 40],
];

export default function Teachers() {
  return (
    <WrapperTeachers id="spikers">
      <WrapperContainer>
        <Wrapper>
          <h2>{t("Teach.0")}</h2>
          <div className="cards">
            {food.map(([emoji, hueA, hueB]) => (
              <Card emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
            ))}
          </div>
        </Wrapper>
      </WrapperContainer>
    </WrapperTeachers>
  );
}
