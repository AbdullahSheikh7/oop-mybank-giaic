"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = exports.Customer = void 0;
class Customer {
    constructor(fname, lname, genderMale, age, mobile) {
        this.fname = fname;
        this.lname = lname;
        this.genderMale = genderMale;
        this.age = age;
        this.mobile = mobile;
    }
    CustomerInfo() {
        return `Name: ${this.fname} ${this.lname}\nAge: ${this.age}\nGender: ${this.genderMale ? "Male" : "Female"}\nMobile: ${this.mobile}`;
    }
}
exports.Customer = Customer;
class Account {
    set Balance(balance) {
        this._balance = balance;
    }
    get Balance() {
        return this._balance;
    }
    constructor() {
        this._balance = 100;
    }
    Debit(d) {
        let statement = "Sorry, you have insufficient balance!";
        if (d > 0) {
            statement = "The amount you entered is wrong!";
            if (this.Balance > d) {
                this.Balance = this.Balance - d;
                statement = `Transaction successful! New account balance is ${this.Balance}`;
            }
            else {
                statement = `You don't have enough money to do this transaction`;
            }
        }
        return statement;
    }
    Credit(d) {
        let statement = "Transaction failed!";
        if (d > 0) {
            this.Balance = this.Balance + d;
            if (d > 100) {
                this.Balance = this.Balance - 1;
            }
            statement = "You account has been credited successfully!";
        }
        return statement;
    }
}
exports.Account = Account;
