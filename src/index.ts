
 function formatString  (input: string, toUpper?: boolean): string  {
    if (toUpper === false) {
        return input.toLowerCase();
    } else {
        return input.toUpperCase();
    }
}


type Items ={ title: string; rating: number }
const books:Items[] = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
    { title: "Book d", rating: 5.5 }
  ];


function filterByRating(items:Items[]):Items[]{
    return items.filter(item=>item.rating >= 4)

}



function concatenateArrays <T>(...arrays:T[][]):T[]{
    const result: T[] =[];
    for(const array of arrays){
      result.push(...array)
    }
    return result
}





class vehicle {
  private make: string;
  private year: number;
    constructor( make:string, year: number){
      this.make = make;
    this.year = year;
    }
    getInfo(){
        return `make:${this.make} year:${this.year}`


    }
}
class car extends vehicle {
    private model: string;
    constructor( make:string, year: number, model:string){
        super(make,year)
         this.model = model;

    }
    getModel(){
        return(`make:${this.model}`);
    }


}


function processValue(value: string | number): number {
    if (typeof value === 'string') {
      return value.length;
    } else {
      return value * 2;
    }
  }
 
  interface Product {
    name: string;
    price: number;
  }
  const products:Product[] = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
  ];

  function getMostExpensiveProduct(products: Product[]): Product | null{
    if(products.length === 0){
        return null
    }
    let heightestPriceProduct:Product = products[0]
    for( const product of products){
        if(product.price > heightestPriceProduct.price){
            heightestPriceProduct = product
        }
    }
    return heightestPriceProduct

  }


  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string {
    
    return (day === Day.Saturday || day === Day.Sunday) ? "Weekend" : "Weekday";
  }
  console.log(getDayType(Day.Monday));
 console.log( getDayType(Day.Sunday));

  async function squareAsync(n: number): Promise<number>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(n < 0){
                reject('negative number are not allow')
            }else{
                resolve(n*n)
            }
        },1000)
    });

  }
 
 