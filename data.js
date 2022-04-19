const questions = [
  {
    question_no: 1,
    text: "你做了一个梦，梦里有一个绿油油的小精灵告诉你，你是被选中的孩子，你会：",
    answers: [
      "A.详细询问小精灵的来历",
      "B.二话不说跟着小精灵走",
      "C.选中我，我有什么好处？",
      "D.被选中的孩子！我有徽章吗！",
    ]
  }, 
  {
    question_no: 2,
    text: "绿油油的小精灵指引你前往梦想岛，你坐船出发了，你的船票是：",
    answers: [
      "A.自己打工攒钱买的",
      "B.打败邪恶的折耳根之后掉落的战利品",
      "C.你珍藏多年的宝物盒里找到的",
      "D.绿油油小精灵强买强卖给你的",
    ]
  },
  {
    question_no: 3,
    text: "到达梦想岛，你为自己找了一个住处：",
    answers: [
      "A.有着上千年历史的传统住宅",
      "B.邪恶的巧克力被你打败后留下的空屋",
      "C.岛民开的旅馆",
      "D.天为被，地为席",
    ]
  },
  {
    question_no: 4,
    text: "到了深夜，正在睡觉的你听到小精灵的声音，你会：",
    answers: [
      "A.四处寻找她",
      "B.接着睡觉",
      "C.用反复练习过的精灵语回复她",
      "D.明明找到她却假装看不见，逗她玩",
    ]
  },
  {
    question_no: 5,
    text: "小精灵是来求救的！梦想岛的勇气徽章被邪恶的生番茄抢走啦，你要去哪找生番茄？",
    answers: [
      "A.生番茄的家",
      "B.菜市场",
      "C.翻山越岭，地毯式搜寻整座岛",
      "D.站在梦想岛的正中央向邪恶的生番茄宣战挑衅",
    ]
  }, 
  {
    question_no: 6,
    text: "大战在即，你会如何准备？",
    answers: [
      "A.努力锻炼身体，以实力打退邪恶的生番茄",
      "B.吃点好的，决不亏待自己",
      "C.挨家挨户通知岛民提前疏散",
      "D.不准备，随机应变就是最强的",
    ]
  },
  {
    question_no: 7,
    text: "打败邪恶的生番茄需要什么呢？",
    answers: [
      "A.勤学苦练",
      "B.真诚的心",
      "C.爱能感化一切",
      "D.丝娃娃王的丝娃娃骑士",
    ]
  },
  {
    question_no: 8,
    text: "恭喜你！你打败了邪恶的生番茄！你获得了什么战利品呢？",
    answers: [
      "A.等着你带它去冒险的石中剑",
      "B.一颗还有六年才能孵化的漂亮蝴蝶蛋",
      "C.勇气徽章！",
      "D.什么都没有，打了个寂寞",
    ]
  }
];

const scores = [
  {
    question_no: 1,
    score: [
      {
        result: "G",
        point: 4,
      },
      {
        result: "A",
        point: 1,
      },
      {
        result: "C",
        point: 1,
      },
      {
        result: "E",
        point: 1,
      }
    ]
  },
  {
    question_no: 2,
    score: [
      {
        result: "D",
        point: 2,
      },
      {
        result: "A",
        point: 1,
      },
      {
        result: "B",
        point: 1,
      },
      {
        result: "F",
        point: 1,
      }
    ]
  },
  {
    question_no: 3,
    score: [
      {
        result: "B",
        point: 2,
      },
      {
        result: "E",
        point: 1,
      },
      {
        result: "D",
        point: 1,
      },
      {
        result: "C",
        point: 1,
      }
    ]
  },
  {
    question_no: 4,
    score: [
      {
        result: "A",
        point: 2,
      },
      {
        result: "B",
        point: 1,
      },
      {
        result: "D",
        point: 1,
      },
      {
        result: "F",
        point: 1,
      }
    ]
  },
  {
    question_no: 5,
    score: [
      {
        result: "F",
        point: 2,
      },
      {
        result: "C",
        point: 2,
      },
      {
        result: "E",
        point: 2,
      },
      {
        result: "A",
        point: 3,
      }
    ]
  },
  {
    question_no: 6,
    score: [
      {
        result: "G",
        point: 4,
      },
      {
        result: "A",
        point: 1,
      },
      {
        result: "C",
        point: 1,
      },
      {
        result: "E",
        point: 1,
      }
    ]
  },
  {
    question_no: 7,
    score: [
      {
        result: "D",
        point: 3,
      },
      {
        result: "B",
        point: 3,
      },
      {
        result: "E",
        point: 3,
      },
      {
        result: "C",
        point: 3,
      }
    ]
  },
  {
    question_no: 8,
    score: [
      {
        result: "A",
        point: 3,
      },
      {
        result: "B",
        point: 3,
      },
      {
        result: "E",
        point: 3,
      },
      {
        result: "F",
        point: 3,
      }
    ]
  }
];