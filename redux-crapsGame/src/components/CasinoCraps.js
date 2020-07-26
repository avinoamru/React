const genDice = () => {
  const aDice = Math.floor(Math.random() * 6 + 1);
  return aDice;
};

const dice1 = genDice();
const dice2 = genDice();

let isPass = true;

const checkDiceSum = (piece1 = dice1, piece2 = dice2) => {
  return piece1 + piece2;
};

/* const handlePoint = (point) => {
  let is7out = false;
  if (isPass) {
    let tempSum = checkDiceSum();
    while (true) {
      console.log(tempSum);
      if (tempSum === point) {
        is7out = true;
        console.log("it is 7");
        break;
      } else {
        continue;
      }
    }
    return is7out;
  }
};*/

const defineCases = (sum) => {
  if (isPass) {
    switch (sum) {
      case 7:
        return { type: "WON", payload: sum };
      case 11:
        return { type: "WON", payload: sum };
      case 2:
        return { type: "LOST", payload: sum };
      case 3:
        return { type: "LOST", payload: sum };
      case 12:
        return { type: "LOST", payload: sum };
      default:
        // handlePoint(sum);
        return { type: "POINT" };
    }
  }

  if (!isPass) {
    switch (sum) {
      case 7:
        return { type: "LOST", payload: sum };
      case 11:
        return { type: "LOST", payload: sum };
      case 2:
        return { type: "WON", payload: sum };
      case 3:
        return { type: "WON", payload: sum };
      case 12:
        return { type: "PUSH", payload: sum };
      default:
        // handlePoint(sum);
        return { type: "POINT" };
    }
  }
};

console.log(defineCases(checkDiceSum()));
