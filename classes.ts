interface Account {
    Debit(d: number): string;
    Credit(d: number): string;
}

class Customer {
    public fname: string;
    public lname: string;
    public genderMale: boolean;
    public age: number;
    public mobile: string;

    constructor(fname: string, lname: string, genderMale: boolean, age: number, mobile: string) {
        this.fname = fname
        this.lname = lname
        this.genderMale = genderMale
        this.age = age
        this.mobile = mobile
    }

    public CustomerInfo() {
        return `Name: ${this.fname} ${this.lname}\nAge: ${this.age}\nGender: ${this.genderMale ? "Male" : "Female"}\nMobile: ${this.mobile}`
    }
}

class Account implements Account {
    public _balance: number;

    public set Balance(balance: number) {
        this._balance = balance
    }
    public get Balance(): number {
        return this._balance
    }

    constructor() {
        this._balance = 100;
    }

    Debit(d: number): string {
        let statement = "Sorry, you have insufficient balance!"

        if (d > 0) {
            statement = "The amount you entered is wrong!";
            if (this.Balance > d) {
                this.Balance = this.Balance - d;
                statement = `Transaction successful! New account balance is ${this.Balance}`;
            } else {
                statement = `You don't have enough money to do this transaction`;
            }
        }

        return statement
    }

    Credit(d: number): string {
        let statement = "Transaction failed!"

        if (d > 0) {
            this.Balance = this.Balance + d;
            if (d > 100) {
                this.Balance = this.Balance - 1;
            }
            statement = "You account has been credited successfully!"
        }

        return statement
    }
}

export { Customer }
export { Account }
