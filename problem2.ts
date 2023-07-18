function playingDomino(cards:Array<[number,number]>, deck:number[]) {
    // your code here
    for (const card of cards) {
        if (card[0] === deck[0] || card[1] === deck[0]) {
          return card;
        }
        if (card[0] === deck[1] || card[1] === deck[1]) {
          return card;
        }
      }
      return [];
  }
  
  
  console.log(playingDomino([[6, 5], [3, 4], [2, 1], [3, 3]], [4, 3]))
  // [3, 4]
  console.log(playingDomino([[6, 5], [3, 3], [3, 4], [2, 1]], [3, 6]))
  // [6 5]
  console.log(playingDomino([[6, 6], [2, 4], [3, 6]], [5, 1]))
  // []
  