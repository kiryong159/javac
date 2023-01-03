const quotes = [
  {
    quote: "현재가 과거와 다르길 바란다면 과거를 공부하라.",
    who: "바뤼흐 스피노자",
  },
  {
    quote:
      "최선을 다하고 있다라고 말해봤자 소용없다. 필요한 일을 함에 있어서는 반드시 성공해야 한다.",
    who: "윈스턴 처칠",
  },
  { quote: "최연은 순풍이 아니라 역풍에 가장 높이 난다", who: "윈스턴 처칠" },
  {
    quote:
      "모든 언행을 칭찬하는 자보다 결점을 친절하게 말해주는 친구를 가까이하라.",
    who: "소크라테스",
  },
  {
    quote: "자기보다 못한 자를 벗으로 삼지 말라.",
    who: "공자",
  },
  {
    quote: "친구는 모든 것을 나눈다.",
    who: "플라톤",
  },
  {
    quote: "뭉치면 서고, 갈라지면 넘어진다.",
    who: "이솝",
  },
  {
    quote: "“내 너 그럴 줄 알았다” 알았으면 제발 미리 말 해줘라",
    who: "박명수",
  },
  {
    quote: "가는 말이 고우면 얕본다",
    who: "박명수",
  },
  {
    quote: "늦었다고 생각할때가 진짜 너무 늦었다",
    who: "박명수",
  },
];

const todayquote = quotes[Math.floor(Math.random() * quotes.length)];

const quotee = document.querySelector(".quote-box-box .firstspan");
const whoo = document.querySelector(".quote-box span:last-child");

quotee.innerText = todayquote.quote;
whoo.innerText = `-${todayquote.who}-`;

const quoteBox = document.querySelector(".quote-box");

quoteBox.addEventListener("click", clickquote);

function clickquote() {
  const todayquote = quotes[Math.floor(Math.random() * quotes.length)];
  quotee.innerText = todayquote.quote;
  whoo.innerText = `-${todayquote.who}-`;
}
