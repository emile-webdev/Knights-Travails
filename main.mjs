import { knightMoves } from "./index.mjs";

function showPath(start, end) {
    try {
        const result = knightMoves(start, end);

        if (result === null) {
            console.log(`No path between ${start} and ${end}`);
            return;
        } else {
            console.log(
                `You made it in ${result.length - 1} ${result.length - 1 === 1 ? "move" : "moves"}! Here is your path from ${start} to ${end}`
            );
        }
        for(const e of result) {
            console.log(e);
        }
    }
    catch(e) {
        console.log(e.message);
    }
}

showPath([0,0], [1,2]);
showPath([0,0], [3,3]);
showPath([3,3], [0,0]);
showPath([0,0], [7,7]);
showPath([3,3], [4,3]);
showPath([0,0], [5,5]);
showPath([0,0], [1,0]);
showPath([0,0], [0,0]);
showPath([0,0], [0,-1]);