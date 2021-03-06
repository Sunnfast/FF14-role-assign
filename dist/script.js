let roleMatrix = [
  // Where Simone is the healer
  {
    Healer: "Simone",
    Tank: "Adrian",
    CDPS: "Celyn",
    LDPS: "Deb",
  },

  {
    Healer: "Simone",
    Tank: "Adrian",
    CDPS: "Deb",
    LDPS: "Celyn",
  },

  {
    Healer: "Simone",
    Tank: "Celyn",
    CDPS: "Adrian",
    LDPS: "Deb",
  },

  {
    Healer: "Simone",
    Tank: "Deb",
    CDPS: "Adrian",
    LDPS: "Celyn",
  },

  {
    Healer: "Simone",
    Tank: "Celyn",
    CDPS: "Deb",
    LDPS: "Adrian",
  },

  {
    Healer: "Simone",
    Tank: "Deb",
    CDPS: "Celyn",
    LDPS: "Adrian",
  },

  // Where Celyn is the healer

  {
    Healer: "Celyn",
    Tank: "Simone",
    CDPS: "Adrian",
    LDPS: "Deb",
  },

  {
    Healer: "Celyn",
    Tank: "Simone",
    CDPS: "Deb",
    LDPS: "Adrian",
  },

  {
    Healer: "Celyn",
    Tank: "Adrian",
    CDPS: "Simone",
    LDPS: "Deb",
  },

  {
    Healer: "Celyn",
    Tank: "Deb",
    CDPS: "Simone",
    LDPS: "Adrian",
  },

  {
    Healer: "Celyn",
    Tank: "Adrian",
    CDPS: "Deb",
    LDPS: "Simone",
  },

  {
    Healer: "Celyn",
    Tank: "Deb",
    CDPS: "Adrian",
    LDPS: "Simone",
  },

  // Where Adrian is the healer

  {
    Healer: "Adrian",
    Tank: "Simone",
    CDPS: "Celyn",
    LDPS: "Deb",
  },

  {
    Healer: "Adrian",
    Tank: "Simone",
    CDPS: "Deb",
    LDPS: "Celyn",
  },

  {
    Healer: "Adrian",
    Tank: "Celyn",
    CDPS: "Simone",
    LDPS: "Deb",
  },

  {
    Healer: "Adrian",
    Tank: "Deb",
    CDPS: "Simone",
    LDPS: "Celyn",
  },

  {
    Healer: "Adrian",
    Tank: "Celyn",
    CDPS: "Deb",
    LDPS: "Simone",
  },

  {
    Healer: "Adrian",
    Tank: "Deb",
    CDPS: "Celyn",
    LDPS: "Simone",
  },

  // When Deb is the healer

  {
    Healer: "Deb",
    Tank: "Simone",
    CDPS: "Adrian",
    LDPS: "Celyn",
  },

  {
    Healer: "Deb",
    Tank: "Simone",
    CDPS: "Celyn",
    LDPS: "Adrian",
  },

  {
    Healer: "Deb",
    Tank: "Celyn",
    CDPS: "Simone",
    LDPS: "Adrian",
  },

  {
    Healer: "Deb",
    Tank: "Adrian",
    CDPS: "Simone",
    LDPS: "Celyn",
  },

  {
    Healer: "Deb",
    Tank: "Adrian",
    CDPS: "Celyn",
    LDPS: "Simone",
  },

  {
    Healer: "Deb",
    Tank: "Celyn",
    CDPS: "Adrian",
    LDPS: "Simone",
  },
];

let randomNum;
let resultNode;
let resultPara;
let counter;
let roleButton = document.querySelector("#role-btn");
let resultDiv = document.querySelector(".result");

function getRandomNum(num) {
  return Math.floor(Math.random() * num);
}

roleButton.addEventListener("click", function () {
  randomNum = getRandomNum(23);
  newSpan = document.createElement("div");
  oldSpan = document.getElementById("child1");
  healerNode = document.createElement("p");
  healerNode.id = "healer";
  healerNode.innerText = "Healer: " + roleMatrix[randomNum].Healer;

  tankNode = document.createElement("p");
  tankNode.id = "tank";
  tankNode.innerText = "Tank: " + roleMatrix[randomNum].Tank;

  cdpsNode = document.createElement("p");
  cdpsNode.id = "cDPS";
  cdpsNode.innerText = "Close-range DPS: " + roleMatrix[randomNum].CDPS;

  ldpsNode = document.createElement("p");
  ldpsNode.id = "lDPS";
  ldpsNode.innerText = "Long-range DPS: " + roleMatrix[randomNum].LDPS;
  newSpan.append(healerNode, tankNode, cdpsNode, ldpsNode);
  resultDiv.replaceChild(newSpan, oldSpan);
  newSpan.id = "child1";
});
