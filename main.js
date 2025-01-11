import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

const sticks = [
  {
    name: "大吉",
    summary: "何をやってもうまくいく日。全てのことが順調に運ぶでしょう。",
  },
  {
    name: "吉",
    summary: "良い日。何をやってもうまくいくでしょう。",
  },
  {
    name: "中吉",
    summary: "まあまあ良い日。普通に過ごせるでしょう。",
  },
  {
    name: "小吉",
    summary: "少し良い日。何をやってもうまくいくかもしれません。",
  },
  {
    name: "末吉",
    summary: "あまり良くない日。何をやってもうまくいかないかもしれません。",
  },
  {
    name: "凶",
    summary: "悪い日。何をやってもうまくいかないでしょう。",
  },
  {
    name: "大凶",
    summary: "非常に悪い日。全てのことがうまくいかないでしょう。",
  },
];

createApp({
  data() {
    return {
      result: null,
    };
  },
  methods: {
    draw() {
      const index = Math.floor(Math.random() * sticks.length);
      this.result = sticks[index];
    },
    back() {
      this.result = null;
    },
  },
}).mount("#app");
