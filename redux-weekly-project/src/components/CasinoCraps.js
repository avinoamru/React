export const CasinoCraps = () => {
  const genDice = () => {
    const aDice = Math.floor(Math.random() * 6 + 1);
    return aDice;
  };

  let isPass = true;

  const checkDiceSum = () => {
    const dice1 = genDice();
    const dice2 = genDice();

    return dice1 + dice2;
  };

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
          return { type: "POINT", payload: sum };
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
          return { type: "POINT", payload: sum };
      }
    }
  };

  return defineCases(checkDiceSum());
};
