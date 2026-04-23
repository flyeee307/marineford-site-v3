import { useState } from "react";
import { motion } from "framer-motion";

const timeline = [
  {
    title: "推進城集結",
    desc: "魯夫突破推進城，集結來自不同立場的戰力",
    img: "https://upload.wikimedia.org/wikipedia/en/6/65/Impel_Down.png"
  },
  {
    title: "戰爭爆發",
    desc: "白鬍子正式進攻海軍本部，頂上戰爭全面開打",
    img: "https://upload.wikimedia.org/wikipedia/en/0/0c/Marineford.png"
  },
  {
    title: "成功解救",
    desc: "艾斯被釋放，任務一度達成",
    img: "https://upload.wikimedia.org/wikipedia/en/5/5a/Ace_anime.png"
  },
  {
    title: "悲劇逆轉",
    desc: "赤犬激怒艾斯，局勢急轉直下",
    img: "https://upload.wikimedia.org/wikipedia/en/8/8f/Akainu.png"
  },
  {
    title: "艾斯之死",
    desc: "艾斯為保護魯夫犧牲，戰爭走向悲劇",
    img: "https://upload.wikimedia.org/wikipedia/en/2/2d/Ace_death.png"
  }
];

const endings = {
  rational: {
    title: "理性成功線",
    desc: "你成功撤退並保住艾斯，但沒有改變世界格局，也沒有觸發魯夫的成長。"
  },
  emotional: {
    title: "原作悲壯線",
    desc: "艾斯死亡，但時代被改變，魯夫覺醒，新的世界秩序開始動搖。"
  },
  failure: {
    title: "全面失敗線",
    desc: "決策混亂導致更大損失，既沒有救到艾斯，也失去更多夥伴。"
  }
};

export default function MarinefordSite() {
  const [step, setStep] = useState(0);
  const [choices, setChoices] = useState([]);
  const [ending, setEnding] = useState(null);

  const makeChoice = (c) => {
    const newChoices = [...choices, c];
    setChoices(newChoices);

    if (newChoices.length >= 2) {
      if (newChoices.includes("retreat") && !newChoices.includes("fight")) {
        setEnding("rational");
      } else if (newChoices.includes("fight")) {
        setEnding("emotional");
      } else {
        setEnding("failure");
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center mb-8"
      >
        頂上戰爭：沉浸式決策體驗
      </motion.h1>

      {/* 劇情滾動感 */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <motion.img
          key={timeline[step].img}
          src={timeline[step].img}
          className="rounded-2xl w-full h-72 object-cover shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        />

        <Card className="bg-white text-black rounded-2xl">
          <CardContent className="p-6">
            <h2 className="text-3xl font-bold mb-3">{timeline[step].title}</h2>
            <p className="text-lg">{timeline[step].desc}</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center gap-4 mb-12">
        <Button onClick={() => setStep(Math.max(0, step - 1))}>上一段</Button>
        <Button onClick={() => setStep(Math.min(timeline.length - 1, step + 1))}>下一段</Button>
      </div>

      {/* 多階段決策 */}
      {!ending && (
        <Card className="bg-gray-900 rounded-2xl mb-10">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">你的戰略選擇</h2>

            <div className="flex flex-wrap gap-4">
              <Button onClick={() => makeChoice("retreat")}>優先撤退</Button>
              <Button onClick={() => makeChoice("fight")}>全面迎戰</Button>
              <Button onClick={() => makeChoice("delay")}>拖延時間</Button>
            </div>

            <p className="mt-4 text-gray-400">已選擇：{choices.join(" → ")}</p>
          </CardContent>
        </Card>
      )}

      {/* 結局顯示 */}
      {ending && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Card className="bg-white text-black rounded-2xl">
            <CardContent className="p-6">
              <h2 className="text-3xl font-bold mb-4">{endings[ending].title}</h2>
              <p className="text-lg">{endings[ending].desc}</p>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* 專案分析結論 */}
      <div className="mt-16 grid md:grid-cols-3 gap-6">
        <Card className="bg-gray-800">
          <CardContent className="p-4">
            <h3 className="font-bold">KPI達成</h3>
            <p>❌ 任務失敗</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800">
          <CardContent className="p-4">
            <h3 className="font-bold">長期價值</h3>
            <p>✅ 改變世界格局</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800">
          <CardContent className="p-4">
            <h3 className="font-bold">情感影響</h3>
            <p>⭐⭐⭐⭐⭐</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-10 text-center text-gray-500">
        有些失敗，才是真正改變世界的開始
      </div>
    </div>
  );
}
