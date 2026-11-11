const SCORES = [100, 95, 90, 85, 80, 78, 76, 74, 72, 70, 68, 66, 64, 62, 60, 50, 40, 30, 20, 10];

// 各单项的达标成绩，按 SCORES 顺序排列；null 表示该得分档无对应标准（男生引体向上的奇数档）
const STANDARDS = {
  vitalCapacity: {
    "male-junior": [5040, 4920, 4800, 4550, 4300, 4180, 4060, 3940, 3820, 3700, 3580, 3460, 3340, 3220, 3100, 2940, 2780, 2620, 2460, 2300],
    "male-senior": [5140, 5020, 4900, 4650, 4400, 4280, 4160, 4040, 3920, 3800, 3680, 3560, 3440, 3320, 3200, 3030, 2860, 2690, 2520, 2350],
    "female-junior": [3400, 3350, 3300, 3150, 3000, 2900, 2800, 2700, 2600, 2500, 2400, 2300, 2200, 2100, 2000, 1960, 1920, 1880, 1840, 1800],
    "female-senior": [3450, 3400, 3350, 3200, 3050, 2950, 2850, 2750, 2650, 2550, 2450, 2350, 2250, 2150, 2050, 2010, 1970, 1930, 1890, 1850],
  },
  sprint50: {
    "male-junior": [6.7, 6.8, 6.9, 7.0, 7.1, 7.3, 7.5, 7.7, 7.9, 8.1, 8.3, 8.5, 8.7, 8.9, 9.1, 9.3, 9.5, 9.7, 9.9, 10.1],
    "male-senior": [6.6, 6.7, 6.8, 6.9, 7.0, 7.2, 7.4, 7.6, 7.8, 8.0, 8.2, 8.4, 8.6, 8.8, 9.0, 9.2, 9.4, 9.6, 9.8, 10.0],
    "female-junior": [7.5, 7.6, 7.7, 8.0, 8.3, 8.5, 8.7, 8.9, 9.1, 9.3, 9.5, 9.7, 9.9, 10.1, 10.3, 10.5, 10.7, 10.9, 11.1, 11.3],
    "female-senior": [7.4, 7.5, 7.6, 7.9, 8.2, 8.4, 8.6, 8.8, 9.0, 9.2, 9.4, 9.6, 9.8, 10.0, 10.2, 10.4, 10.6, 10.8, 11.0, 11.2],
  },
  sitAndReach: {
    "male-junior": [24.9, 23.1, 21.3, 19.5, 17.7, 16.3, 14.9, 13.5, 12.1, 10.7, 9.3, 7.9, 6.5, 5.1, 3.7, 2.7, 1.7, 0.7, -0.3, -1.3],
    "male-senior": [25.1, 23.3, 21.5, 19.9, 18.2, 16.8, 15.4, 14.0, 12.6, 11.2, 9.8, 8.4, 7.0, 5.6, 4.2, 3.2, 2.2, 1.2, 0.2, -0.8],
    "female-junior": [25.8, 24.0, 22.2, 20.6, 19.0, 17.7, 16.4, 15.1, 13.8, 12.5, 11.2, 9.9, 8.6, 7.3, 6.0, 5.2, 4.4, 3.6, 2.8, 2.0],
    "female-senior": [26.3, 24.4, 22.4, 21.0, 19.5, 18.2, 16.9, 15.6, 14.3, 13.0, 11.7, 10.4, 9.1, 7.8, 6.5, 5.7, 4.9, 4.1, 3.3, 2.5],
  },
  longJump: {
    "male-junior": [273, 268, 263, 256, 248, 244, 240, 236, 232, 228, 224, 220, 216, 212, 208, 203, 198, 193, 188, 183],
    "male-senior": [275, 270, 265, 258, 250, 246, 242, 238, 234, 230, 226, 222, 218, 214, 210, 205, 200, 195, 190, 185],
    "female-junior": [207, 201, 195, 188, 181, 178, 175, 172, 169, 166, 163, 160, 157, 154, 151, 146, 141, 136, 131, 126],
    "female-senior": [208, 202, 196, 189, 182, 179, 176, 173, 170, 167, 164, 161, 158, 155, 152, 147, 142, 137, 132, 127],
  },
  strength: {
    "male-junior": [19, 18, 17, 16, 15, null, 14, null, 13, null, 12, null, 11, null, 10, 9, 8, 7, 6, 5],
    "male-senior": [20, 19, 18, 17, 16, null, 15, null, 14, null, 13, null, 12, null, 11, 10, 9, 8, 7, 6],
    "female-junior": [56, 54, 52, 49, 46, 44, 42, 40, 38, 36, 34, 32, 30, 28, 26, 24, 22, 20, 18, 16],
    "female-senior": [57, 55, 53, 50, 47, 45, 43, 41, 39, 37, 35, 33, 31, 29, 27, 25, 23, 21, 19, 17],
  },
  enduranceRun: {
    "male-junior": [197, 202, 207, 214, 222, 227, 232, 237, 242, 247, 252, 257, 262, 267, 272, 292, 312, 332, 352, 372],
    "male-senior": [195, 200, 205, 212, 220, 225, 230, 235, 240, 245, 250, 255, 260, 265, 270, 290, 310, 330, 350, 370],
    "female-junior": [198, 204, 210, 217, 224, 229, 234, 239, 244, 249, 254, 259, 264, 269, 274, 284, 294, 304, 314, 324],
    "female-senior": [196, 202, 208, 215, 222, 227, 232, 237, 242, 247, 252, 257, 262, 267, 272, 282, 292, 302, 312, 322],
  },
};

const BMI_STANDARD = {
  male: { low: 17.9, high: 23.9 },
  female: { low: 17.2, high: 23.9 },
};

// [加分, 超过 100 分标准所需次数]
const STRENGTH_BONUS = {
  male: [[10, 10], [9, 9], [8, 8], [7, 7], [6, 6], [5, 5], [4, 4], [3, 3], [2, 2], [1, 1]],
  female: [[10, 13], [9, 12], [8, 11], [7, 10], [6, 9], [5, 8], [4, 7], [3, 6], [2, 4], [1, 2]],
};

// [加分, 快于 100 分标准所需秒数]
const RUN_BONUS = {
  male: [[10, 35], [9, 32], [8, 29], [7, 26], [6, 23], [5, 20], [4, 16], [3, 12], [2, 8], [1, 4]],
  female: [[10, 50], [9, 45], [8, 40], [7, 35], [6, 30], [5, 25], [4, 20], [3, 15], [2, 10], [1, 5]],
};

const PASSING_SCORE = 60;
const OPTIONAL_INPUTS = [
  "vital-capacity",
  "sprint-50",
  "sit-and-reach",
  "long-jump",
  "strength",
  "run-minutes",
  "run-seconds",
];

const form = document.getElementById("fitness-form");
const resultSection = document.getElementById("result");
const resultTable = document.getElementById("result-table");
const resultBody = document.getElementById("result-body");
const totalText = document.getElementById("total");
const strengthLabel = document.getElementById("strength-label");
const runLabel = document.getElementById("run-label");
const reverseCheckbox = document.getElementById("reverse-mode");

function selectedGender() {
  return form.querySelector('input[name="gender"]:checked').value;
}

function readNumber(id) {
  return Number(document.getElementById(id).value);
}

function lookupScore(thresholds, value, lowerIsBetter) {
  for (let i = 0; i < SCORES.length; i++) {
    if (thresholds[i] === null) continue;
    if (lowerIsBetter ? value <= thresholds[i] : value >= thresholds[i]) {
      return SCORES[i];
    }
  }
  return 0;
}

function lookupBonus(table, amount) {
  for (const [bonus, required] of table) {
    if (amount >= required) return bonus;
  }
  return 0;
}

function bmiScore(bmi, gender) {
  const { low, high } = BMI_STANDARD[gender];
  if (bmi >= low && bmi <= high) return 100;
  return bmi >= 28 ? 60 : 80; // 肥胖得 60 分，低体重和超重得 80 分
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  return `${minutes}'${String(seconds % 60).padStart(2, "0")}"`;
}

// 反推及格成绩时参与计算的项目（BMI 由身高体重得出，不能留空）
const REVERSE_ITEMS = [
  {
    weight: 15,
    lowerIsBetter: false,
    name: () => "肺活量",
    thresholds: (group) => STANDARDS.vitalCapacity[group],
    read: () => readOptional("vital-capacity"),
    valueText: (value) => `${value} 毫升`,
    needText: (value) => `≥ ${value} 毫升`,
  },
  {
    weight: 20,
    lowerIsBetter: true,
    name: () => "50米跑",
    thresholds: (group) => STANDARDS.sprint50[group],
    read: () => readOptional("sprint-50"),
    valueText: (value) => `${value} 秒`,
    needText: (value) => `≤ ${value} 秒`,
  },
  {
    weight: 10,
    lowerIsBetter: false,
    name: () => "坐位体前屈",
    thresholds: (group) => STANDARDS.sitAndReach[group],
    read: () => readOptional("sit-and-reach"),
    valueText: (value) => `${value} 厘米`,
    needText: (value) => `≥ ${value} 厘米`,
  },
  {
    weight: 10,
    lowerIsBetter: false,
    name: () => "立定跳远",
    thresholds: (group) => STANDARDS.longJump[group],
    read: () => readOptional("long-jump"),
    valueText: (value) => `${value} 厘米`,
    needText: (value) => `≥ ${value} 厘米`,
  },
  {
    weight: 10,
    lowerIsBetter: false,
    name: (male) => (male ? "引体向上" : "一分钟仰卧起坐"),
    thresholds: (group) => STANDARDS.strength[group],
    read: () => readOptional("strength"),
    valueText: (value) => `${value} 次`,
    needText: (value) => `≥ ${value} 次`,
    bonusTable: (gender) => STRENGTH_BONUS[gender],
    bonusAmount: (value, thresholds) => value - thresholds[0],
    bonusValue: (threshold, amount) => threshold + amount,
  },
  {
    weight: 20,
    lowerIsBetter: true,
    name: (male) => (male ? "1000米跑" : "800米跑"),
    thresholds: (group) => STANDARDS.enduranceRun[group],
    read: () => {
      const minutes = document.getElementById("run-minutes").value;
      const seconds = document.getElementById("run-seconds").value;
      if (minutes === "" && seconds === "") return null;
      return Number(minutes) * 60 + Number(seconds);
    },
    valueText: (value) => formatTime(value),
    needText: (value) => `≤ ${formatTime(value)}`,
    bonusTable: (gender) => RUN_BONUS[gender],
    bonusAmount: (value, thresholds) => thresholds[0] - value,
    bonusValue: (threshold, amount) => threshold - amount,
  },
];

function readOptional(id) {
  const value = document.getElementById(id).value;
  return value === "" ? null : Number(value);
}

function scoreItem(item, group, gender, value) {
  const thresholds = item.thresholds(group);
  const score = lookupScore(thresholds, value, item.lowerIsBetter);
  const bonus = item.bonusTable
    ? lookupBonus(item.bonusTable(gender), item.bonusAmount(value, thresholds))
    : 0;
  return { score, bonus };
}

// 在标准表中找出能拿到不低于 minScore 的最低得分档及其达标成绩
function findRequirement(thresholds, minScore) {
  for (let i = SCORES.length - 1; i >= 0; i--) {
    if (SCORES[i] >= minScore && thresholds[i] !== null) {
      return { score: SCORES[i], value: thresholds[i] };
    }
  }
  return null;
}

// 找出不低于 needed 的最低加分档，返回 [加分, 达标所需的次数或秒数]
function findBonusEntry(table, needed) {
  let best = null;
  for (const entry of table) {
    if (entry[0] >= needed && (best === null || entry[0] < best[0])) best = entry;
  }
  return best;
}

function renderRows(rows, summary) {
  resultTable.hidden = false;
  resultBody.innerHTML = rows
    .map(
      (row) => `<tr>
        <td>${row.name}</td>
        <td>${row.value}</td>
        <td>${row.score}</td>
        <td>${row.weight}%</td>
        <td>${typeof row.score === "number" ? ((row.score * row.weight) / 100).toFixed(1) : "—"}</td>
        <td>${row.bonus}</td>
      </tr>`
    )
    .join("");
  totalText.textContent = summary;
  resultSection.hidden = false;
}

function showMessage(message) {
  resultTable.hidden = true;
  resultBody.innerHTML = "";
  totalText.textContent = message;
  resultSection.hidden = false;
}

function updateLabels() {
  const male = selectedGender() === "male";
  strengthLabel.textContent = male ? "引体向上（次）" : "一分钟仰卧起坐（次）";
  runLabel.textContent = male ? "1000米跑（分·秒）" : "800米跑（分·秒）";
}

function calculateNormal(gender, group, male, bmiRow) {
  const rows = [bmiRow];
  for (const item of REVERSE_ITEMS) {
    const value = item.read();
    const { score, bonus } = scoreItem(item, group, gender, value);
    rows.push({
      name: item.name(male),
      value: item.valueText(value),
      score,
      weight: item.weight,
      bonus,
    });
  }

  const weightedSum = rows.reduce((sum, row) => sum + (row.score * row.weight) / 100, 0);
  const bonusSum = rows.reduce((sum, row) => sum + row.bonus, 0);
  const total = Math.min(weightedSum + bonusSum, 120);

  renderRows(
    rows,
    `总分：${total.toFixed(1)} 分${bonusSum > 0 ? `（其中加分 ${bonusSum} 分）` : ""}`
  );
}

function calculateReverse(gender, group, male, bmiRow) {
  const minutes = document.getElementById("run-minutes").value;
  const seconds = document.getElementById("run-seconds").value;
  if ((minutes === "") !== (seconds === "")) {
    showMessage("耐力跑需要同时填写“分”和“秒”，或者两项都留空。");
    return;
  }

  const blankItems = REVERSE_ITEMS.filter((item) => item.read() === null);
  if (blankItems.length === 0) {
    showMessage("请把需要反推及格成绩的一项留空，其余项目全部填写。");
    return;
  }
  if (blankItems.length > 1) {
    showMessage("只能留空一项，请把其余项目填写完整。");
    return;
  }

  const target = blankItems[0];
  const targetName = target.name(male);
  const rows = [bmiRow];
  let targetRow = null;
  let othersTotal = (bmiRow.score * bmiRow.weight) / 100;

  for (const item of REVERSE_ITEMS) {
    if (item === target) {
      targetRow = { name: targetName, value: "", score: null, weight: item.weight, bonus: 0 };
      rows.push(targetRow);
      continue;
    }
    const value = item.read();
    const { score, bonus } = scoreItem(item, group, gender, value);
    othersTotal += (score * item.weight) / 100 + bonus;
    rows.push({
      name: item.name(male),
      value: item.valueText(value),
      score,
      weight: item.weight,
      bonus,
    });
  }

  const required = PASSING_SCORE - othersTotal;
  const thresholds = target.thresholds(group);

  if (required <= 0) {
    targetRow.value = "任意";
    targetRow.score = "—";
    renderRows(rows, `其余项目合计 ${othersTotal.toFixed(1)} 分，已达到 60 分，${targetName}无需达标。`);
    return;
  }

  // 该项需要的得分，再找出该得分档对应的达标成绩
  const minScore = Math.ceil((required * 100) / target.weight - 1e-6);
  const found = findRequirement(thresholds, minScore);

  if (found) {
    targetRow.value = target.needText(found.value);
    targetRow.score = found.score;
    const total = othersTotal + (found.score * target.weight) / 100;
    renderRows(
      rows,
      `其余项目合计 ${othersTotal.toFixed(1)} 分，${targetName}需 ${target.needText(found.value)}（${found.score} 分），总分 ${total.toFixed(1)} 分。`
    );
    return;
  }

  // 满分也不够时，靠该项的加分补足
  const bonusEntry = target.bonusTable
    ? findBonusEntry(target.bonusTable(gender), required - target.weight)
    : null;

  if (bonusEntry) {
    const [bonus, amount] = bonusEntry;
    const rawValue = target.bonusValue(thresholds[0], amount);
    targetRow.value = target.needText(rawValue);
    targetRow.score = 100;
    targetRow.bonus = bonus;
    const total = othersTotal + target.weight + bonus;
    renderRows(
      rows,
      `其余项目合计 ${othersTotal.toFixed(1)} 分，${targetName}需 ${target.needText(rawValue)}（100 分 + 加分 ${bonus} 分），总分 ${total.toFixed(1)} 分。`
    );
    return;
  }

  targetRow.value = "无法达到";
  targetRow.score = "—";
  renderRows(
    rows,
    `其余项目合计 ${othersTotal.toFixed(1)} 分，即使${targetName}拿到满分和全部加分，总分也达不到 60 分。`
  );
}

form.querySelectorAll('input[name="gender"]').forEach((radio) => {
  radio.addEventListener("change", updateLabels);
});

reverseCheckbox.addEventListener("change", () => {
  for (const id of OPTIONAL_INPUTS) {
    document.getElementById(id).required = !reverseCheckbox.checked;
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const gender = selectedGender();
  const grade = form.querySelector('input[name="grade"]:checked').value;
  const group = `${gender}-${grade}`;
  const male = gender === "male";

  const height = readNumber("height");
  const weight = readNumber("weight");
  const bmi = Math.round((weight / (height / 100) ** 2) * 10) / 10;
  const bmiRow = {
    name: "体重指数（BMI）",
    value: bmi.toFixed(1),
    score: bmiScore(bmi, gender),
    weight: 15,
    bonus: 0,
  };

  if (reverseCheckbox.checked) {
    calculateReverse(gender, group, male, bmiRow);
  } else {
    calculateNormal(gender, group, male, bmiRow);
  }
});

updateLabels();
