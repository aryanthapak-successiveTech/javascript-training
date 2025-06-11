//1. Create a class BankAccount with properties balance and owner and
// methods deposit(), withdraw(), and displayBalance().

class BankAccount {
  constructor(owner) {
    this.owner = owner;
  }

  #balance = 0;

  deposit(amount) {
    if(isNaN(amount)){
      console.error(`Expected an number you entered ${amount}`);
      return this;
    }
    this.#balance += amount;
    return this;
  }

  withdraw(amount) {
    if (this.#balance - amount < 0) {
      console.error(
        `Transaction cannot be processed due to insufficient balance`
      );
      return this;
    }

    this.#balance -= amount;
    return this;
  }

  displayBalance() {
    console.log(this.#balance);
    return this;
  }
}

const harshAccount = new BankAccount("Harsh Gupta");

harshAccount
  .deposit(1000)
  .displayBalance()
  .withdraw(1001)
  .withdraw(1000)
  .displayBalance();
