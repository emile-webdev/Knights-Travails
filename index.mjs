function knightMoves(start, end) {
    const boardSize = 8;

    for (const e of [...start, ...end]) {
        if (e >= boardSize || e < 0) {
            throw new Error("Invalid move, out of board size");
        }
    }

    // Row, Column
    const allowedMoves = [
        [1, -2],
        [1, 2],
        [2, -1],
        [2, 1],
        [-1, -2],
        [-1, 2],
        [-2, -1],
        [-2, 1]
    ];

    const set = new Set();
    const queue = [{
        vertex: start, 
        path: []
    }];

    while(queue.length > 0) {
        const {vertex, path} = queue.shift();

        if (vertex[0] === end[0] && vertex[1] === end[1]) {
            path.push(vertex);
            return path;
        }

        for(const move of allowedMoves) {
            const nextMove = [vertex[0] + move[0], vertex[1] + move[1]];

            if (
                nextMove[0] >= boardSize || 
                nextMove[0] < 0 || 
                nextMove[1] >= boardSize || 
                nextMove[1] < 0) {
                continue; 
            } else if (set.has(JSON.stringify(nextMove))) {
                continue;
            } else {
                set.add(JSON.stringify(nextMove));
                queue.push({
                    vertex: nextMove, 
                    path: [...path, vertex]
                });
            }
        }
    }
    return null;
}

export {
    knightMoves
}