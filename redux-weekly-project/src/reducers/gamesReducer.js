// const genDice = () => {
//   const aDice = Math.floor(Math.random() * 6 + 1);
//   return aDice;
// };

// const dice1 = genDice();
// const dice2 = genDice();

// const checkDiceSum = (piece1 = dice1, piece2 = dice2) => {
//   console.log(piece1 + piece2);
//   return piece1 + piece2;
// };

// /* const handlePoint = (point) => {
//     let is7out = false;
//     if (isPass) {
//       let tempSum = checkDiceSum();
//       while (true) {
//         console.log(tempSum);
//         if (tempSum === point) {
//           is7out = true;
//           console.log("it is 7");
//           break;
//         } else {
//           continue;
//         }
//       }
//       return is7out;
//     }
//   };*/

// const defineCases = (sum) => {
//   if (initialState.isPass) {
//     switch (sum) {
//       case 7:
//         return { type: "WON", payload: sum };
//       case 11:
//         return { type: "WON", payload: sum };
//       case 2:
//         return { type: "LOST", payload: sum };
//       case 3:
//         return { type: "LOST", payload: sum };
//       case 12:
//         return { type: "LOST", payload: sum };
//       default:
//         // handlePoint(sum);
//         return { type: "POINT" };
//     }
//   }

//   if (!initialState.isPass) {
//     switch (sum) {
//       case 7:
//         return { type: "LOST", payload: sum };
//       case 11:
//         return { type: "LOST", payload: sum };
//       case 2:
//         return { type: "WON", payload: sum };
//       case 3:
//         return { type: "WON", payload: sum };
//       case 12:
//         return { type: "PUSH", payload: sum };
//       default:
//         // handlePoint(sum);
//         return { type: "POINT" };
//     }
//   }
// };

//   defineCases(checkDiceSum());
import { CasinoCraps } from "./../components/CasinoCraps";
const initialState = {
  budget: 100,
  isPass: false,
  sumOfDices: 0,
};

const handlePoint = (point, bet) => {
  while (true) {
    let craps = CasinoCraps();
    console.log(`point ${point}, craps payload ${craps.payload}`);

    if (craps.payload === 7) {
      return { type: "LOST", payload: bet };
    }
    if (craps.payload === point) {
      return { type: "WON", payload: bet };
    } else {
      continue;
    }
  }
};

export const crapsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PASS_CHECK":
      console.log(state.isPass);
      return { ...state, isPass: !state.isPass };

    //   return { ...state, budget: state.budget - action.payload };
    case "WON":
      console.log("Won is invoked");
      console.log("This is the won action payload", action.payload);
      return { ...state, budget: state.budget + action.payload * 2 };
    case "LOST":
      console.log("Lost is invoked");
      return { ...state, budget: state.budget - action.payload };
    case "POINT":
      console.log("Point invoked", action.sumOfDices);
      handlePoint(action.sumOfDices, action.payload);
      return { ...state, sumOfDices: action.sumOfDices };
    default:
      return state;
  }
};
