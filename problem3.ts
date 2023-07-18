function mostAppearItem(items:string[]) {
    // your code here
    let total:{ [index: string]: number } = {};
    let console:string= ''

  for (let i:number = 0; i < items.length; i++) {
    const item:string = items[i];
    if (total[item]) {
        total[item]++;
    } else {
        total[item] = 1;
    }
  }
  for (const item in total) {
    console += `${item}->${total[item]} `
  }
  return console
  }
  console.log(mostAppearItem(["js", "js", "golang", "ruby", "ruby", "js", "js"]))
  // golang->1 ruby->2 js->4
  console.log(mostAppearItem(["A", "B", "B", "C", "A", "A", "B", "A", "D", "D"]))
  // C->1 D->2 B->3 A->4
  console.log(mostAppearItem(["football", "basketball", "tenis"]))
  // football->1 basketball->1 tenis->1
  
  