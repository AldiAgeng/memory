const cardArray = [
  {
    name: "javascript",
    img: "js.png",
  },
  {
    name: "java",
    img: "java.png",
  },
  {
    name: "php",
    img: "php.png",
  },
  {
    name: "python",
    img: "py.png",
  },
  {
    name: "dart",
    img: "dart.png",
  },
  {
    name: "cplus",
    img: "cplus.png",
  },
  {
    name: "golang",
    img: "golang.png",
  },
  {
    name: "ruby",
    img: "ruby.png",
  },
  {
    name: "javascript",
    img: "js.png",
  },
  {
    name: "java",
    img: "java.png",
  },
  {
    name: "php",
    img: "php.png",
  },
  {
    name: "python",
    img: "py.png",
  },
  {
    name: "dart",
    img: "dart.png",
  },
  {
    name: "cplus",
    img: "cplus.png",
  },
  {
    name: "golang",
    img: "golang.png",
  },
  {
    name: "ruby",
    img: "ruby.png",
  },
];

let cling = new Audio("sound/cling.mp3");
let yeay = new Audio("sound/yeay.mp3");

// random array
cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector("#grid");
const result = document.querySelector("#result");
let cardsChose = [];
let cardsChoseId = [];
let cardsWon = [];

// membuat board
const createBoard = () => {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "img/back.png");
    card.setAttribute("card-id", i);
    card.style.width = "150px";
    card.style.margin = "3px";
    card.addEventListener("click", flipCard);
    grid.appendChild(card);
  }
};

// check Card
const checkCard = () => {
  const cards = document.querySelectorAll("#grid img");
  const oneId = cardsChoseId[0];
  const twoId = cardsChoseId[1];

  // mengklik kartu yang sama
  if (oneId == twoId) {
    cards[oneId].setAttribute("src", "img/back.png");
    cards[twoId].setAttribute("src", "img/back.png");
    alert("You click same image");
  }

  // cek 2 kartu yang dipilih sama apa tidak
  else if (cardsChose[0] == cardsChose[1]) {
    cards[oneId].setAttribute("src", "img/white.png");
    cards[twoId].setAttribute("src", "img/white.png");
    cards[oneId].removeEventListener("click", flipCard);
    cards[twoId].removeEventListener("click", flipCard);
    cling.play();
    cardsWon.push(cardsChose);
  } else {
    cards[oneId].setAttribute("src", "img/back.png");
    cards[twoId].setAttribute("src", "img/back.png");
  }

  // score
  result.textContent = cardsWon.length;
  cardsChose = [];
  cardsChoseId = [];

  // menang
  if (cardsWon.length == cardArray.length / 2) {
    const text = document.createElement("h1");
    text.textContent = "Yea, You found them all";
    text.style.marginTop = "-350px";
    grid.appendChild(text);
    yeay.play();
  }
};

// membalik kartu
function flipCard() {
  let cardId = this.getAttribute("card-id");
  cardsChose.push(cardArray[cardId].name);
  cardsChoseId.push(cardId);
  this.setAttribute("src", `img/${cardArray[cardId].img}`);
  if (cardsChose.length === 2) {
    setTimeout(checkCard, 500);
  }
}

createBoard();
