import { useState } from "react";
import { motion } from "framer-motion";

const timeline = [
  {
    title: "推進城集結",
    desc: "魯夫突破推進城，集結戰力",
    img: "https://upload.wikimedia.org/wikipedia/en/6/65/Impel_Down.png"
  },
  {
    title: "戰爭爆發",
    desc: "白鬍子進攻海軍本部",
    img: "https://upload.wikimedia.org/wikipedia/en/0/0c/Marineford.png"
  },
  {
    title: "成功解救",
    desc: "艾斯被救出",
    img: "https://upload.wikimedia.org/wikipedia/en/5/5a/Ace_anime.png"
  },
  {
    title: "悲劇逆轉",
    desc: "赤犬激怒艾斯",
    img: "https://upload.wikimedia.org/wikipedia/en/8/8f/Akainu.png"
  },
  {
    title: "艾斯之死",
    desc: "艾斯為魯夫犧牲",
    img: "https://upload.wikimedia.org/wikipedia/en/2/2d/Ace_death.png"
  }
];

export default function App() {
  const [step, setStep] = useState(0);

  return (
    <div style={{ background: "black", color: "white", minHeight: "100vh", padding: "20px" }}>
      <h1 style={{ textAlign: "center", fontSize: "32px" }}>
        頂上戰爭：沉浸式體驗
      </h1>

      <motion.img
        key={timeline[step].img}
        src={timeline[step].img}
        style={{ width: "100%", maxHeight: "300px", objectFit: "cover", borderRadius: "16px" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />

      <h2>{timeline[step].title}</h2>
      <p>{timeline[step].desc}</p>

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setStep(Math.max(0, step - 1))}>上一段</button>
        <button onClick={() => setStep(Math.min(timeline.length - 1, step + 1))}>
          下一段
        </button>
      </div>
    </div>
  );
}
