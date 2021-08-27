export const Cards = [
  {
    id: "g+00001",
    parent: null,
    titel: "Englisch",
    color: "yellow",
    initalLang: "de-en",
    created: new Date("04.08.2021 22:58"),
    lastEdited: new Date("04.08.2021 23:02"),
  },
  {
    id: "s+00001",
    parent: "g+00001",
    titel: "1 - 4 Week",
    lang: "de-en",
    cards: [
      {
        id: "00001",
        front: { header: "Tisch", body: "", img: "" },
        back: { header: "tabel", body: "", img: "" },
        favorite: false,
        status: "0", //? 0 === Not learned | 1 === In Progress | 2 === Learned
        lang: null, //? null = initalStackLang
      },
      {
        id: "00002",
        front: { header: "Tisch", body: "", img: "" },
        back: { header: "tabel", body: "", img: "" },
        favorite: false,
        status: "0", //? 0 === Not learned | 1 === In Progress | 2 === Learned
        lang: null, //? null = initalStackLang
      },
    ],
    stats: {
      dailyGoal: 20,
      weeklyGoal: 120,
      dailyData: [
        [10, 12, 18],
        [8, 14, 18],
        [4, 10, 26],
        [0, 12, 28],
        [0, 8, 32],
        [0, 0, 40],
      ], //! MAKE STATS IN GRAFIK
      toDay: 18,
      learnings: [1, 1, 0],
      stacks: [["00001", "00002"]],
    },
    color: "default",
    created: new Date("04.08.2021 22:58"),
    lastEdited: new Date("04.08.2021 23:02"),
  },
  {
    id: "s+00002",
    parent: "g+00001",
    titel: "4 - 8 Week",
    lang: "de-en",
    cards: [
      {
        id: "00001",
        front: { header: "Tisch", body: "", img: "" },
        back: { header: "tabel", body: "", img: "" },
        favorite: false,
        status: "0", //? 0 === Not learned | 1 === In Progress | 2 === Learned
        lang: null, //? null = initalStackLang
      },
      {
        id: "00002",
        front: { header: "Tisch", body: "", img: "" },
        back: { header: "tabel", body: "", img: "" },
        favorite: false,
        status: "0", //? 0 === Not learned | 1 === In Progress | 2 === Learned
        lang: null, //? null = initalStackLang
      },
    ],
    stats: {
      dailyGoal: 20,
      weeklyGoal: 120,
      dailyData: [
        [10, 12, 18],
        [8, 14, 18],
        [4, 10, 26],
        [0, 12, 28],
        [0, 8, 32],
        [0, 0, 40],
      ], //! MAKE STATS IN GRAFIK
      toDay: 2,
      learnings: [1, 0, 1],
      stacks: [["00001", "00002"]],
    },
    color: "red",
    created: new Date("04.08.2021 22:58"),
    lastEdited: new Date("04.08.2021 23:02"),
  },
  {
    id: "s+00003",
    parent: "g+00001",
    titel: "8 - 12 Week",
    lang: "de-en",
    cards: [
      {
        id: "00001",
        front: { header: "Tisch", body: "", img: "" },
        back: { header: "tabel", body: "", img: "" },
        favorite: false,
        status: 0, //? 0 === Not learned | 1 === In Progress | 2 === Learned
        lang: null, //? null = initalStackLang
      },
      {
        id: "00002",
        front: { header: "Himmel", body: "", img: "" },
        back: { header: "sky", body: "", img: "" },
        favorite: false,
        status: 0, //? 0 === Not learned | 1 === In Progress | 2 === Learned
        lang: null, //? null = initalStackLang
      },
      {
        id: "00003",
        front: { header: "Bedeutung", body: "", img: "" },
        back: { header: "meaning", body: "", img: "" },
        favorite: false,
        status: 0, //? 0 === Not learned | 1 === In Progress | 2 === Learned
        lang: null, //? null = initalStackLang
      },
      {
        id: "00004",
        front: { header: "Herz", body: "", img: "" },
        back: { header: "heart", body: "", img: "" },
        favorite: false,
        status: 0, //? 0 === Not learned | 1 === In Progress | 2 === Learned
        lang: null, //? null = initalStackLang
      },
      {
        id: "00005",
        front: { header: "Tür", body: "", img: "" },
        back: { header: "door", body: "", img: "" },
        favorite: false,
        status: 0, //? 0 === Not learned | 1 === In Progress | 2 === Learned
        lang: null, //? null = initalStackLang
      },
      {
        id: "00006",
        front: { header: "Spaß", body: "", img: "" },
        back: { header: "fun", body: "", img: "" },
        favorite: false,
        status: 0, //? 0 === Not learned | 1 === In Progress | 2 === Learned
        lang: null, //? null = initalStackLang
      },
      {
        id: "00007",
        front: { header: "glauben", body: "", img: "" },
        back: { header: "think", body: "", img: "" },
        favorite: false,
        status: 0, //? 0 === Not learned | 1 === In Progress | 2 === Learned
        lang: null, //? null = initalStackLang
      },
      {
        id: "00008",
        front: { header: "Leben", body: "", img: "" },
        back: { header: "life", body: "", img: "" },
        favorite: false,
        status: 0, //? 0 === Not learned | 1 === In Progress | 2 === Learned
        lang: null, //? null = initalStackLang
      },
      {
        id: "00009",
        front: { header: "Bruder", body: "", img: "" },
        back: { header: "brother", body: "", img: "" },
        favorite: false,
        status: 0, //? 0 === Not learned | 1 === In Progress | 2 === Learned
        lang: null, //? null = initalStackLang
      },
      {
        id: "00010",
        front: { header: "Jahre", body: "", img: "" },
        back: { header: "year", body: "", img: "" },
        favorite: false,
        status: 0, //? 0 === Not learned | 1 === In Progress | 2 === Learned
        lang: null, //? null = initalStackLang
      },
      {
        id: "00011",
        front: { header: "Flasche", body: "", img: "" },
        back: { header: "bottle", body: "", img: "" },
        favorite: false,
        status: 0, //? 0 === Not learned | 1 === In Progress | 2 === Learned
        lang: null, //? null = initalStackLang
      },
      {
        id: "00012",
        front: { header: "Apfel", body: "", img: "" },
        back: { header: "appel", body: "", img: "" },
        favorite: false,
        status: 0, //? 0 === Not learned | 1 === In Progress | 2 === Learned
        lang: null, //? null = initalStackLang
      },
      {
        id: "00013",
        front: { header: "Wasser", body: "", img: "" },
        back: { header: "water", body: "", img: "" },
        favorite: false,
        status: 0, //? 0 === Not learned | 1 === In Progress | 2 === Learned
        lang: null, //? null = initalStackLang
      },
      {
        id: "00014",
        front: { header: "Ich", body: "", img: "" },
        back: { header: "I", body: "", img: "" },
        favorite: false,
        status: 0, //? 0 === Not learned | 1 === In Progress | 2 === Learned
        lang: null, //? null = initalStackLang
      },
      {
        id: "00015",
        front: { header: "sehen", body: "", img: "" },
        back: { header: "see", body: "", img: "" },
        favorite: false,
        status: 0, //? 0 === Not learned | 1 === In Progress | 2 === Learned
        lang: null, //? null = initalStackLang
      },
      {
        id: "00016",
        front: { header: "Büro", body: "", img: "" },
        back: { header: "Office", body: "", img: "" },
        favorite: true,
        status: 0, //? 0 === Not learned | 1 === In Progress | 2 === Learned
        lang: null, //? null = initalStackLang
      },
      {
        id: "00017",
        front: { header: "Laptop", body: "", img: "" },
        back: { header: "Laptop", body: "", img: "" },
        favorite: false,
        status: 0, //? 0 === Not learned | 1 === In Progress | 2 === Learned
        lang: null, //? null = initalStackLang
      },
      {
        id: "00018",
        front: { header: "Anzug", body: "", img: "" },
        back: { header: "Suit", body: "", img: "" },
        favorite: true,
        status: 0, //? 0 === Not learned | 1 === In Progress | 2 === Learned
        lang: null, //? null = initalStackLang
      },
      {
        id: "00019",
        front: { header: "Brücke", body: "", img: "" },
        back: { header: "brige", body: "", img: "" },
        favorite: true,
        status: 0, //? 0 === Not learned | 1 === In Progress | 2 === Learned
        lang: null, //? null = initalStackLang
      },
      {
        id: "00020",
        front: { header: "Licht", body: "", img: "" },
        back: { header: "light", body: "", img: "" },
        favorite: true,
        status: 0, //? 0 === Not learned | 1 === In Progress | 2 === Learned
        lang: null, //? null = initalStackLang
      },
    ],
    stats: {
      dailyGoal: 20,
      weeklyGoal: 120,
      dailyData: [
        [10, 12, 18],
        [8, 14, 18],
        [4, 10, 26],
        [0, 12, 28],
        [0, 8, 32],
        [0, 0, 40],
      ], //! MAKE STATS IN GRAFIK
      toDay: 10,
      learnings: [10, 8, 2],
      stacks: [
        [
          "00001",
          "00002",
          "00003",
          "00004",
          "00005",
          "00006",
          "00007",
          "00008",
          "00009",
          "00010",
          "00011",
          "00012",
          "00013",
        ],
        ["00014", "00015", "00016", "00017", "00018"],
        ["00019", "00020"],
      ],
    },
    color: "blue",
    created: new Date("04.08.2021 22:58"),
    lastEdited: new Date("04.08.2021 23:02"),
  },
  {
    id: "s+00004",
    parent: null,
    titel: "Test",
    cards: [],
    stats: {
      dailyGoal: 20,
      weeklyGoal: 120,
      dailyData: [
        [10, 12, 18],
        [8, 14, 18],
        [4, 10, 26],
        [0, 12, 28],
        [0, 8, 32],
        [0, 0, 40],
      ], //! MAKE STATS IN GRAFIK
      toDay: 10,
      learnings: [],
      stacks: [[]],
    },
    color: "red",
    initalLang: "de-en",
    created: new Date("04.08.2021 22:58"),
    lastEdited: new Date("04.08.2021 23:02"),
  },
];
