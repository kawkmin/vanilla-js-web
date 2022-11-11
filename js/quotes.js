const quotes = [
    {
        quote: "#팁 1",
        author: "끝났으면 바로바로 지워주세요!",
    },
    {
        quote: "#팁 2",
        author: "우선순위를 정해보세요!",
    },
    {
        quote: "#팁 3",
        author: "작성하는 습관을 들여보세요!",
    },
    {
        quote: "#팁 4",
        author: "주변에 휴대폰등 방해요소가 있는지 확인해보세요!",
    },
    {
        quote: "#팁 5",
        author: "SNS는 잠시 그만!",
    },
    {
        quote: "#팁 6",
        author: "10분간 스트레칭!",
    },
    {
        quote: "#팁 7",
        author: "머리가 아프면 잠시 쉬어요!",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;