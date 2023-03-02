

interface User {
    password: string;
    email: string;
    role: 'admin' | 'user' | 'guest';
    logUserData: () => string;
  }
  
  // Use interface to annotate an object:
  const userJoe: User = {
    password: 'some_secret_password123645',
    email: 'joe@user.co',
    role: 'user',
    logUserData: () => `${email}, ${role}`
  }

  function getUserEmail(user: User) {
    return user.email
  }


  interface Drink {
    name: string;
    price: number;
  }
  
  export const drinks: Drink[] = [
    { name: 'Water', price: 299 },
    { name: 'Coffee', price: 399 },
  ];

  //Si la función no devuelve nada, voidse usa el tipo.
  function sayHello(): void { console.log('Hello!') }

  interface ClockInterface {
    tick(): void;
  }

  class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) {}
    tick() {
      console.log("beep beep");
    }
  }
  


abstract class BaseLogger {
    abstract log(msg: string): void

    public formatMessage(msg: string): string {
       return msg.toLowerCase();
    }
}
class DebugLogger extends BaseLogger {

    public log(msg: string): void {
       const formattedMessage = this.formatMessage(msg);
       console.log(msg);
    }
}