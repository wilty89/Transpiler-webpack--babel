//npx tsc --init
//TypeScript para generar el código JavaScript compilado.
//npx tsc

interface ShapeAreaInterface {
  getArea(): number;

}

class Triangle implements ShapeAreaInterface{
  public base: number;
  public height: number;
  public name: string;
  public age: number;
  constructor(base: number, height: number, name:string, age:number ) {
    this.base = base;
    this.height = height;
    this.name= name;
    this.age= age;
  }

  public getArea() {
    return this.base * this.height * 0.5
  }

  print(): void {
    console.log(`Hello ${this.name}, you are ${this.age} years old!`);
  }
}
const obtener= new Triangle(2,3,"wilber", 28)
obtener.print()
console.log(obtener.getArea())
//////////////////////////////////////////
interface Employee {
    id: number
    employee_name: string
    employee_salary: number
    employee_age: number
    profile_image: string
}

const myAsynFunction = async (url: string): Promise<Array<Employee> | string> => {
    const  response  = await fetch(url)
     const   {data}  = await response.json()
     return data
}
console.log(myAsynFunction('http://dummy.restapiexample.com/api/v1/employees/'))

const immediatelyResolvedPromise = (url: string) => {
  const resultPromise = new Promise((resolve, reject) => {
      resolve(fetch(url))
  })
  return  resultPromise
}

//////////////////////////////////////////
type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "Leonardo",
  age: 22
};

function print(user: User): User {
  return user;
};

console.log(print(user))

function print<T>(user: T): T {
  return user;
}; 

console.log(print<User>(user))

//////////////////////////////////////////

/**
 * 
 Clases abstractas
Este tipo de clases no pueden ser instanciadas ya que 
se usan para definir comportamientos independientemente 
de su concreción. Su implementación en typescript es 
similar a la de una clase normal con la diferencia que 
hay que anteponer el termino
 */

abstract class Product {
    productName : string = "Default";
    price :number = 1000;
    abstract changeName(name: string): void;

    calcPrice(){
        return this.price;
    }
}

class Mobile extends  Product {
    changeName(name : string) : void {
        this.productName = name;
    }
}

let mobProduct = new Mobile();
console.log(mobProduct);
mobProduct.changeName("Super It Product");
console.log(mobProduct);