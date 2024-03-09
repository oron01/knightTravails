function knightMoves(startPoint,endPoint) {
    let getKnightMoves = (startX,startY) => {
        let possibleMoves = []
        let checkMove = (xChange,yChange) => {
            let newX = startX + xChange
            let newY = startY + yChange
            if (newX > -1 && newX < 8 && newY > -1 && newY < 8) {
                possibleMoves.push([newX,newY])
            }
        }
            checkMove(1,2)
            checkMove(1,-2)
            checkMove(2,1)
            checkMove(2,-1)
            checkMove(-1,2)
            checkMove(-1,-2)
            checkMove(-2,1)
            checkMove(-2,-1)
        console.log(possibleMoves)
        return possibleMoves
    }
    
    let createMove = (point,route) => {
        return {point,route}
    }

    let startPointObj = createMove(startPoint,[startPoint])

    let getFastestRoute = (movesList) => {
        let found = false
        for (let i = 0; i < movesList.length ; i++) {
            if (JSON.stringify(movesList[i].point) == JSON.stringify(endPoint)) {
                found = true
                console.log(`Found in ${movesList[i].route.length}`)
                return [...movesList[i].route]
            }
        }
        if (found == false) {
        let newMoveList = []
            for (let i = 0; i < movesList.length; i++) {
                let newMoves = getKnightMoves(movesList[i].point[0],movesList[i].point[1])
                let routeForMoves = movesList[i].route
                newMoves.forEach((move) => {newMoveList.push({point:move,route:[...routeForMoves,move]})})
            }
        return getFastestRoute(newMoveList)}

        }

        return getFastestRoute([startPointObj])
    }
