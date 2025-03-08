import { useEffect, useState } from "react";
import "../assets/css/cake.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import flowerBouquet from "/src/assets/images/hoa.png"; // Cập nhật đường dẫn ảnh

function Cake() {
  const [showFlowers, setShowFlowers] = useState(false);

  useEffect(() => {
    // Tự động hiển thị bó hoa sau 1 giây
    const timer = setTimeout(() => {
      setShowFlowers(true);
    }, 1000);

    return () => clearTimeout(timer); // Dọn dẹp khi component unmount
  }, []);

  return (
    <div className="bg-black/80 h-screen w-screen flex items-center justify-center overflow-hidden relative">
      {/* Bó hoa tự xuất hiện sau 1 giây */}
      {showFlowers && (
        <motion.div
          className="absolute inset-0 flex justify-center items-center z-50"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={flowerBouquet}
            alt="Bouquet of Flowers"
            className="w-[300px] h-auto"
          />
        </motion.div>
      )}
    </div>
  );
}

export default Cake;
