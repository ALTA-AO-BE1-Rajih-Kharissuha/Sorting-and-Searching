function maximumBuyProduct(money:number, productPrice:number[]) {
  // your code here
  let qty:number =0 
  let sort:number[] = productPrice.sort()
let moneys:number = money
  sort.map(e=>{
    if(moneys >= e){
        moneys = moneys - e
        qty += 1
    }
  })
  return qty
}


console.log(maximumBuyProduct(50000, [25000, 25000, 10000, 14000]))      // 3
console.log(maximumBuyProduct(30000, [15000, 10000, 12000, 5000, 3000])) // 4
console.log(maximumBuyProduct(10000, [2000, 3000, 1000, 2000, 10000]))   // 4
console.log(maximumBuyProduct(4000, [7500, 3000, 2500, 2000]))           // 1
console.log(maximumBuyProduct(0, [10000, 30000]))  