import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import "../assets/css/card.css";
import { Link } from "react-router-dom";

function Card() {
  const [cardClass, setCardClass] = useState("");
  const [isCardOpened, setIsCardOpened] = useState(false);
  const timerRef = useRef(null);

  const toggleCard = () => {
    if (cardClass === "" || cardClass === "close-half") {
      setCardClass("open-half");
      setIsCardOpened(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setCardClass("open-fully");
        timerRef.current = null;
      }, 1000);
    } else {
      setCardClass("close-half");
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setCardClass("");
        timerRef.current = null;
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center overflow-clip">
      <div className="w-[400px]  h-screen flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, visibility: "hidden" }}
          animate={{ opacity: 1, visibility: "visible" }}
          transition={{ duration: 1.2 }}
        >
          <div id="card" className={`${cardClass}`} onClick={toggleCard}>
            <div id="card-inside">
              <div className="wrap">
                <p className="text-xl font-bold">🌸 Chúc mừng ngày 8/3! 💖</p>
                <p>Gửi đến cô giáo kính mến,</p>
                <p>
                  Nhân ngày Quốc tế Phụ nữ, chúng em xin gửi lời chúc tốt đẹp
                  nhất đến cô! 💐 Chúc cô luôn mạnh khỏe, hạnh phúc và gặt hái
                  nhiều thành công trong sự nghiệp giảng dạy.
                </p>
                <p>
                  💖 Mong rằng trong thời gian tới, chúng em sẽ có cơ hội được
                  cô hướng dẫn và giúp đỡ trên con đường học tập và phát triển
                  bản thân. 📚✨
                </p>
                <p>
                  Chúc cô luôn giữ vững ngọn lửa đam mê, tiếp tục truyền cảm
                  hứng cho bao thế hệ sinh viên! 🌷🎉
                </p>
              </div>
            </div>

            <div id="card-front">
              <div className="wrap">
                <h1>💐 Happy Women's Day 8/3! 💖</h1>
              </div>
            </div>
          </div>
        </motion.div>

        {/* prone to bugs */}
        {isCardOpened && (
          <motion.div
            className="-mt-[3rem]"
            initial={{ opacity: 0, visibility: "hidden" }}
            animate={{ opacity: 1, visibility: "visible" }}
            transition={{ duration: 1.2 }}
          >
            <Link to="/cake">
              <p className="-mt-[4rem] px-7 py-3 bg-customBlue text-white font-medium text-base rounded-full hover:bg-blue-600">
                Hoa gửi Cô <span>❤️</span>
              </p>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Card;
