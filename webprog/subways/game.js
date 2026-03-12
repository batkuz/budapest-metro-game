

const GRID_SIZE = 10;
const CELL_SIZE = 50;

const lines = [
  { id: 0, name: "M1", color: "#FFD800", start: 19 },
  { id: 1, name: "M2", color: "#E41F18", start: 28 },
  { id: 2, name: "M3", color: "#005CA5", start: 3 },
  { id: 3, name: "M4", color: "#4CA22F", start: 39 }
];

const stations = [
  { id: 0, x: 0, y: 0, type: "A", train: false, side: "Buda", district: 0 },
  { id: 1, x: 2, y: 0, type: "B", train: false, side: "Buda", district: 1 },
  { id: 2, x: 4, y: 0, type: "D", train: false, side: "Buda", district: 2 },
  { id: 3, x: 6, y: 0, type: "D", train: false, side: "Pest", district: 2 },
  { id: 4, x: 7, y: 0, type: "B", train: false, side: "Pest", district: 3 },
  { id: 5, x: 9, y: 0, type: "C", train: false, side: "Pest", district: 4 },
  { id: 6, x: 0, y: 1, type: "D", train: false, side: "Buda", district: 1 },
  { id: 7, x: 1, y: 1, type: "B", train: false, side: "Buda", district: 1 },
  { id: 8, x: 5, y: 1, type: "A", train: false, side: "Buda", district: 2 },
  { id: 9, x: 8, y: 1, type: "C", train: false, side: "Pest", district: 3 },
  { id: 10, x: 9, y: 1, type: "A", train: false, side: "Pest", district: 3 },
  { id: 11, x: 2, y: 2, type: "D", train: false, side: "Buda", district: 1 },
  { id: 12, x: 4, y: 2, type: "D", train: false, side: "Buda", district: 2 },
  { id: 13, x: 5, y: 2, type: "D", train: false, side: "Buda", district: 3 },
  { id: 14, x: 6, y: 2, type: "C", train: false, side: "Pest", district: 3 },
  { id: 15, x: 9, y: 2, type: "D", train: true, side: "Pest", district: 4 },
  { id: 16, x: 0, y: 3, type: "C", train: false, side: "Buda", district: 5 },
  { id: 17, x: 2, y: 3, type: "B", train: false, side: "Buda", district: 5 },
  { id: 18, x: 3, y: 3, type: "C", train: false, side: "Buda", district: 6 },
  { id: 19, x: 7, y: 3, type: "A", train: false, side: "Pest", district: 7 },
  { id: 20, x: 8, y: 3, type: "D", train: false, side: "Pest", district: 7 },
  { id: 21, x: 0, y: 4, type: "B", train: false, side: "Buda", district: 5 },
  { id: 22, x: 3, y: 4, type: "A", train: false, side: "Buda", district: 6 },
  { id: 23, x: 4, y: 4, type: "B", train: false, side: "Buda", district: 6 },
  { id: 24, x: 5, y: 4, type: "C", train: false, side: "Pest", district: 6 },
  { id: 25, x: 6, y: 4, type: "A", train: true, side: "Pest", district: 6 },
  { id: 26, x: 9, y: 4, type: "A", train: false, side: "Pest", district: 7 },
  { id: 27, x: 0, y: 5, type: "A", train: false, side: "Buda", district: 5 },
  { id: 28, x: 2, y: 5, type: "C", train: false, side: "Buda", district: 5 },
  { id: 29, x: 5, y: 5, type: "D", train: false, side: "Pest", district: 6 },
  { id: 30, x: 6, y: 5, type: "?", train: false, side: "Pest", district: 6 },
  { id: 31, x: 9, y: 5, type: "B", train: false, side: "Pest", district: 7 },
  { id: 32, x: 1, y: 6, type: "C", train: false, side: "Buda", district: 5 },
  { id: 33, x: 3, y: 6, type: "D", train: true, side: "Buda", district: 6 },
  { id: 34, x: 6, y: 6, type: "B", train: false, side: "Pest", district: 6 },
  { id: 35, x: 7, y: 6, type: "D", train: false, side: "Pest", district: 7 },
  { id: 36, x: 8, y: 6, type: "C", train: true, side: "Pest", district: 7 },
  { id: 37, x: 0, y: 7, type: "B", train: false, side: "Buda", district: 9 },
  { id: 38, x: 3, y: 7, type: "A", train: false, side: "Buda", district: 10 },
  { id: 39, x: 4, y: 7, type: "B", train: false, side: "Buda", district: 10 },
  { id: 40, x: 6, y: 7, type: "B", train: false, side: "Pest", district: 10 },
  { id: 41, x: 9, y: 7, type: "A", train: false, side: "Pest", district: 11 },
  { id: 42, x: 1, y: 8, type: "A", train: false, side: "Buda", district: 9 },
  { id: 43, x: 2, y: 8, type: "B", train: false, side: "Buda", district: 9 },
  { id: 44, x: 5, y: 8, type: "C", train: false, side: "Buda", district: 10 },
  { id: 45, x: 8, y: 8, type: "D", train: false, side: "Pest", district: 11 },
  { id: 46, x: 0, y: 9, type: "D", train: false, side: "Buda", district: 8 },
  { id: 47, x: 2, y: 9, type: "C", train: false, side: "Buda", district: 9 },
  { id: 48, x: 3, y: 9, type: "A", train: true, side: "Buda", district: 10 },
  { id: 49, x: 6, y: 9, type: "D", train: false, side: "Buda", district: 10 },
  { id: 50, x: 7, y: 9, type: "A", train: false, side: "Pest", district: 11 },
  { id: 51, x: 8, y: 9, type: "C", train: false, side: "Pest", district: 11 },
  { id: 52, x: 9, y: 9, type: "B", train: false, side: "Pest", district: 12 }
];


const stationById = new Map();
const grid = Array.from({ length: GRID_SIZE }, () =>
  Array.from({ length: GRID_SIZE }, () => ({
    stationId: null,
    nodeUsed: false
  }))
);

const gameState = {
  playerName: "",
  lineOrder: [],
  currentLineIndex: 0,
  currentLineId: null,

  deck: [],
  discard: [],
  currentCard: null,
  cardsDrawnThisRound: 0,

  segments: [],

  lineVisited: new Map(),
  lineEndpoints: new Map(),

  selectedStationId: null,
  cardUsedThisTurn: false,

  timerId: null,
  elapsedSec: 0,

  gameOver: false,
  dataLoaded: false,

  roundResults: [],
  trainStationHits: 0
};

const menuScreen = document.querySelector("#menu-screen");
const gameScreen = document.querySelector("#game-screen");

const startBtn = document.querySelector("#start-btn");
const nameInput = document.querySelector("#player-name-input");
const playerNameLabel = document.querySelector("#player-name-label");
const timerLabel = document.querySelector("#timer-label");
const lineLabel = document.querySelector("#line-label");
const roundLabel = document.querySelector("#round-label");

const gridContainer = document.querySelector("#grid-container");
const canvas = document.querySelector("#line-canvas");
const ctx = canvas.getContext("2d");

const drawCardBtn = document.querySelector("#draw-card-btn");
const skipCardBtn = document.querySelector("#skip-card-btn");
const cardDisplay = document.querySelector("#card-display");
const cardText = document.querySelector("#card-text");
const turnInfo = document.querySelector("#turn-info");
const cardsCountLabel = document.querySelector("#cards-count-label");
const roundStatusLabel = document.querySelector("#round-status-label");


const trainHitsLabel = document.querySelector("#train-hits-label");
const trainPointsLabel = document.querySelector("#train-points-label");
const trainSlider = document.querySelector("#train-slider");



startBtn.addEventListener("click", () => {
  if (!gameState.dataLoaded) return;
  const name = nameInput.value.trim();
  gameState.playerName = name.length > 0 ? name : "Player";
  startGame();
});

nameInput.addEventListener("input", () => {

});


drawCardBtn.addEventListener("click", () => {
  if (gameState.gameOver) return;
  nextCard();
});


skipCardBtn.addEventListener("click", () => {
  if (gameState.gameOver) return;

  if (!gameState.currentCard || gameState.cardUsedThisTurn) {
    nextCard();
  } else {
    gameState.cardUsedThisTurn = true;
    nextCard();
  }
});


gridContainer.addEventListener("click", function (event) {
  const stationEl = event.target.closest(".station");
  if (!stationEl) return;
  const stationId = Number(stationEl.dataset.stationId);
  if (Number.isNaN(stationId)) return;
  handleStationClick(stationId);
});



init();


function init() {
  setupBoardGeometry();

  stations.forEach(function (st) {
    stationById.set(st.id, st);
    grid[st.y][st.x].stationId = st.id;
  });

  gameState.dataLoaded = true;
  startBtn.disabled = false;

  renderStations();
  renderSegmentsCanvas();
  renderTrainPoints();
}



function startGame() {
  menuScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");

  playerNameLabel.textContent = gameState.playerName;

  const ids = lines.map(function (l) {
    return l.id;
  });
  gameState.lineOrder = shuffle(ids);
  gameState.currentLineIndex = 0;
  gameState.gameOver = false;

  drawCardBtn.disabled = false;
  skipCardBtn.disabled = false;

  gameState.elapsedSec = 0;
  gameState.roundResults = [];
  gameState.trainStationHits = 0;
  if (gameState.timerId !== null) {
    clearInterval(gameState.timerId);
  }

  renderTrainPoints();

  gameState.timerId = setInterval(function () {
    gameState.elapsedSec += 1;
    renderTimer();
  }, 1000);

  startRound();
}

function startRound() {
  if (gameState.currentLineIndex >= gameState.lineOrder.length) {
    endGame();
    return;
  }

  const lineId = gameState.lineOrder[gameState.currentLineIndex];
  gameState.currentLineId = lineId;

  const line = lines.find(function (l) {
    return l.id === lineId;
  });

  gameState.deck = createDeck();
  gameState.deck = shuffle(gameState.deck);
  gameState.discard = [];
  gameState.currentCard = null;
  gameState.cardsDrawnThisRound = 0;
  gameState.cardUsedThisTurn = false;
  gameState.selectedStationId = null;


  const visited = new Set([line.start]);
  const endpoints = new Set([line.start]);
  gameState.lineVisited.set(lineId, visited);
  gameState.lineEndpoints.set(lineId, endpoints);


  roundLabel.textContent = String(gameState.currentLineIndex + 1);
  cardsCountLabel.textContent = "0";
  roundStatusLabel.textContent = "";
  turnInfo.textContent = "Click Draw card to begin the round.";

  renderCurrentLineLabel();
  renderStations();
  renderSegmentsCanvas();
  renderCard();
}

function endRound() {
  const finishedLineId = gameState.currentLineId;
  const roundScore = computeRoundScore(finishedLineId);
  gameState.roundResults.push(roundScore);

  const roundNumber = gameState.currentLineIndex + 1;
  roundStatusLabel.textContent =
    "Round " +
    roundNumber +
    " – PK=" +
    roundScore.PK +
    ", PM=" +
    roundScore.PM +
    ", PD=" +
    roundScore.PD +
    ", FP=" +
    roundScore.FP +
    ".";

  gameState.currentLineIndex += 1;
  if (gameState.currentLineIndex >= gameState.lineOrder.length) {
    endGame();
  } else {
    startRound();
  }
}

function endGame() {
  gameState.gameOver = true;
  clearInterval(gameState.timerId);
  drawCardBtn.disabled = true;
  skipCardBtn.disabled = true;

  let sumFP = 0;
  gameState.roundResults.forEach(function (r) {
    sumFP += r.FP;
  });

  const trainPoints = getTrainPoints(gameState.trainStationHits);
  const j = computeJunctionStats();
  const junctionPoints = 2 * j.P2 + 5 * j.P3 + 9 * j.P4;

  const finalScore = sumFP + trainPoints + junctionPoints;

  roundStatusLabel.textContent =
    "Game over. Sum(FP)=" +
    sumFP +
    ", Train points=" +
    trainPoints +
    ", Junction points=" +
    junctionPoints +
    " → Final score=" +
    finalScore +
    ".";
}

function renderTimer() {
  const total = gameState.elapsedSec;
  const minutes = Math.floor(total / 60);
  const seconds = total % 60;
  const secStr = seconds < 10 ? "0" + seconds : String(seconds);
  timerLabel.textContent = minutes + ":" + secStr;
}

function renderTrainPoints() {
  const hits = gameState.trainStationHits;
  const pp = getTrainPoints(hits);

  if (trainHitsLabel) {
    trainHitsLabel.textContent = String(hits);
  }
  if (trainPointsLabel) {
    trainPointsLabel.textContent = String(pp);
  }
  if (trainSlider) {
    const max = Number(trainSlider.max) || 10;
    trainSlider.value = String(Math.min(hits, max));
  }
}

function setupBoardGeometry() {
  const pxSize = GRID_SIZE * CELL_SIZE;
  gridContainer.style.width = pxSize + "px";
  gridContainer.style.height = pxSize + "px";

  canvas.width = pxSize;
  canvas.height = pxSize;
}

function renderStations() {
  gridContainer.querySelectorAll(".station").forEach(function (node) {
    node.remove();
  });

  const currentLineId = gameState.currentLineId;
  const currentLine = lines.find(function (l) {
    return l.id === currentLineId;
  });

  stations.forEach(function (st) {
    const div = document.createElement("div");
    div.classList.add("station");

    const cx = st.x * CELL_SIZE + CELL_SIZE / 2;
    const cy = st.y * CELL_SIZE + CELL_SIZE / 2;
    div.style.left = cx + "px";
    div.style.top = cy + "px";

    if (st.id === 30) {
      div.classList.add("deak");
      div.textContent = "?";
    } else {
      div.textContent = st.type;
    }

    if (currentLine && st.id === currentLine.start) {
      const cls = "start-" + getLineCssClass(currentLine.name);
      div.classList.add(cls);
    }

    if (gameState.selectedStationId === st.id) {
      div.classList.add("selected");
    }

    div.dataset.stationId = String(st.id);
    gridContainer.appendChild(div);
  });
}

function renderSegmentsCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.lineWidth = 8;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  gameState.segments.forEach(function (seg) {
    const line = lines.find(function (l) {
      return l.id === seg.lineId;
    });

    ctx.strokeStyle = getLineColor(line.name);
    const nodes = seg.pathNodes;

    ctx.beginPath();
    nodes.forEach(function (p, index) {
      const px = p.x * CELL_SIZE + CELL_SIZE / 2;
      const py = p.y * CELL_SIZE + CELL_SIZE / 2;
      if (index === 0) {
        ctx.moveTo(px, py);
      } else {
        ctx.lineTo(px, py);
      }
    });
    ctx.stroke();
  });
}

function createDeck() {
  const deck = [];

  deck.push(
    { kind: "letter", letter: "A", platform: "side" },
    { kind: "letter", letter: "B", platform: "side" },
    { kind: "letter", letter: "C", platform: "side" },
    { kind: "letter", letter: "D", platform: "side" },
    { kind: "joker", letter: null, platform: "side" },
    { kind: "letter", letter: "A", platform: "center" },
    { kind: "letter", letter: "B", platform: "center" },
    { kind: "letter", letter: "C", platform: "center" },
    { kind: "letter", letter: "D", platform: "center" },
    { kind: "joker", letter: null, platform: "center" }
  );

  return deck;
}

function nextCard() {
  if (gameState.gameOver) return;

  if (gameState.cardsDrawnThisRound >= 8) {
    endRound();
    return;
  }

  if (gameState.deck.length === 0) {
    return;
  }

  const card = gameState.deck.pop();
  gameState.currentCard = card;
  gameState.discard.push(card);
  gameState.cardsDrawnThisRound += 1;
  gameState.cardUsedThisTurn = false;
  gameState.selectedStationId = null;

  cardsCountLabel.textContent = String(gameState.cardsDrawnThisRound);
  renderCard();
  renderStations();
  turnInfo.textContent =
    "Choose a station from a valid endpoint, then choose the destination.";
}

function renderCard() {
  const c = gameState.currentCard;
  cardDisplay.classList.remove("center", "side", "switch-card");

  if (!c) {
    cardText.textContent = "No card";
    return;
  }

  if (c.platform === "center") {
    cardDisplay.classList.add("center");
  } else if (c.platform === "side") {
    cardDisplay.classList.add("side");
  }

  if (c.kind === "joker") {
    cardText.textContent = "JOKER";
  } else if (c.kind === "letter") {
    cardText.textContent = c.letter;
  } else if (c.kind === "switch") {
    cardDisplay.classList.add("switch-card");
    cardText.textContent = "SWITCH";
  }
}

function handleStationClick(stationId) {
  if (!gameState.currentCard || gameState.cardUsedThisTurn) {
    return;
  }

  if (gameState.selectedStationId === null) {
    gameState.selectedStationId = stationId;
    renderStations();
    return;
  }

  const fromId = gameState.selectedStationId;
  const toId = stationId;

  if (fromId === toId) {
    gameState.selectedStationId = null;
    renderStations();
    return;
  }

  const can = canDrawSegment(
    gameState.currentLineId,
    fromId,
    toId,
    gameState.currentCard,
    { usingSwitchEffect: false }
  );

  if (!can || can.ok !== true) {
    gameState.selectedStationId = null;
    turnInfo.textContent = "That segment is not allowed.";
    renderStations();
    return;
  }

  placeSegment(gameState.currentLineId, fromId, toId, can.pathNodes);
  gameState.cardUsedThisTurn = true;
  gameState.selectedStationId = null;
  renderStations();
  renderSegmentsCanvas();
  turnInfo.textContent = "Segment placed. Draw or skip to continue.";
}

function canDrawSegment(lineId, fromStationId, toStationId, card, options) {
  const line = lines.find(function (l) {
    return l.id === lineId;
  });
  if (!line || !card) return false;

  const from = stationById.get(fromStationId);
  const to = stationById.get(toStationId);
  if (!from || !to) return false;

  if (!cardAllowsStation(card, to)) return false;

  const endpoints = gameState.lineEndpoints.get(lineId);
  const visited = gameState.lineVisited.get(lineId);
  const usingSwitchEffect =
    options && options.usingSwitchEffect === true ? true : false;

  if (usingSwitchEffect) {
    if (!visited.has(fromStationId)) return false;
  } else {
    if (!endpoints.has(fromStationId)) return false;
  }

  if (visited.has(toStationId)) return false;

  const dx = to.x - from.x;
  const dy = to.y - from.y;

  const isHorizontal = dy === 0 && dx !== 0;
  const isVertical = dx === 0 && dy !== 0;
  const isDiagonal = Math.abs(dx) === Math.abs(dy) && dx !== 0;

  if (!isHorizontal && !isVertical && !isDiagonal) return false;

  const stepX = Math.sign(dx);
  const stepY = Math.sign(dy);
  const steps = Math.max(Math.abs(dx), Math.abs(dy));

  const pathNodes = [];
  let x = from.x;
  let y = from.y;

  for (let i = 0; i <= steps; i += 1) {
    const cell = grid[y][x];
    const isEndpoint = i === 0 || i === steps;

    pathNodes.push({ x, y });

    if (!isEndpoint) {
      if (cell.stationId !== null) return false;
      if (cell.nodeUsed) return false;
    }

    x += stepX;
    y += stepY;
  }

  if (segmentAlreadyExists(fromStationId, toStationId)) return false;

  return { ok: true, pathNodes: pathNodes };
}

function cardAllowsStation(card, station) {
  if (station.id === 30) return true;
  if (card.kind === "joker") return true;

  if (station.platform) {
    if (card.platform === "center" && station.platform !== "center") {
      return false;
    }
    if (card.platform === "side" && station.platform !== "side") {
      return false;
    }
  }

  if (card.kind === "letter") {
    return station.type === card.letter;
  }

  return false;
}

function segmentAlreadyExists(a, b) {
  return gameState.segments.some(function (s) {
    const samePair =
      (s.fromId === a && s.toId === b) || (s.fromId === b && s.toId === a);
    return samePair;
  });
}

function placeSegment(lineId, fromId, toId, pathNodes) {
  const visited = gameState.lineVisited.get(lineId);
  const endpoints = gameState.lineEndpoints.get(lineId);

  gameState.segments.push({
    lineId: lineId,
    fromId: fromId,
    toId: toId,
    pathNodes: pathNodes
  });

  pathNodes.forEach(function (node) {
    const cell = grid[node.y][node.x];
    if (cell.stationId === null) {
      cell.nodeUsed = true;
    }
  });

  const fromWasEndpoint = endpoints.has(fromId);
  const toWasEndpoint = endpoints.has(toId);

  if (fromWasEndpoint) {
    endpoints.delete(fromId);
  }
  if (!toWasEndpoint) {
    endpoints.add(toId);
  }

  visited.add(toId);

  const toStation = stationById.get(toId);
  if (toStation && toStation.train === true) {
    gameState.trainStationHits += 1;
    renderTrainPoints();
  }
}

function computeRoundScore(lineId) {
  const visited = gameState.lineVisited.get(lineId);
  if (!visited) {
    return { lineId: lineId, PK: 0, PM: 0, PD: 0, FP: 0 };
  }

  const districtSet = new Set();
  const districtCounts = new Map();

  visited.forEach(function (stationId) {
    const st = stationById.get(stationId);
    if (!st) return;
    if (st.district == null) return;

    districtSet.add(st.district);
    const prev = districtCounts.get(st.district) || 0;
    districtCounts.set(st.district, prev + 1);
  });

  const PK = districtSet.size;

  let PM = 0;
  districtCounts.forEach(function (count) {
    if (count > PM) {
      PM = count;
    }
  });

  let PD = 0;
  gameState.segments.forEach(function (seg) {
    if (seg.lineId !== lineId) return;

    const from = stationById.get(seg.fromId);
    const to = stationById.get(seg.toId);
    if (!from || !to) return;
    if (!from.side || !to.side) return;

    if (from.side !== to.side) {
      PD += 1;
    }
  });

  const FP = PK * PM + PD;

  return {
    lineId: lineId,
    PK: PK,
    PM: PM,
    PD: PD,
    FP: FP
  };
}


function getLineCssClass(name) {
  const lower = String(name).toLowerCase();
  if (lower === "m1") return "m1";
  if (lower === "m2") return "m2";
  if (lower === "m3") return "m3";
  if (lower === "m4") return "m4";
  return "m1";
}

function getLineColor(name) {
  const lower = String(name).toLowerCase();
  if (lower === "m1") return "#FFDB4D";
  if (lower === "m2") return "#E74C3C";
  if (lower === "m3") return "#3498DB";
  if (lower === "m4") return "#27AE60";
  return "#000000";
}

function getTrainPoints(hitCount) {
  const TRAIN_POINTS = [0, 1, 2, 4, 6, 8, 11, 14, 17, 21, 25];
  if (hitCount <= 0) return 0;
  if (hitCount >= TRAIN_POINTS.length) {
    return TRAIN_POINTS[TRAIN_POINTS.length - 1];
  }
  return TRAIN_POINTS[hitCount];
}

function computeJunctionStats() {
  const stationLines = new Map();

  gameState.segments.forEach(function (seg) {
    const fromSet = stationLines.get(seg.fromId) || new Set();
    fromSet.add(seg.lineId);
    stationLines.set(seg.fromId, fromSet);

    const toSet = stationLines.get(seg.toId) || new Set();
    toSet.add(seg.lineId);
    stationLines.set(seg.toId, toSet);
  });

  let P2 = 0;
  let P3 = 0;
  let P4 = 0;

  stationLines.forEach(function (lineSet) {
    const size = lineSet.size;
    if (size === 2) P2 += 1;
    else if (size === 3) P3 += 1;
    else if (size >= 4) P4 += 1;
  });

  return { P2: P2, P3: P3, P4: P4 };
}

function shuffle(arr) {
  const copy = arr.slice();
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = copy[i];
    copy[i] = copy[j];
    copy[j] = temp;
  }
  return copy;
}

function renderCurrentLineLabel() {
  const line = lines.find(function (l) {
    return l.id === gameState.currentLineId;
  });

  if (!line) {
    lineLabel.textContent = "";
    lineLabel.style.color = "#000000";
    return;
  }

  lineLabel.textContent = line.name;
  lineLabel.style.color = getLineColor(line.name);
}







