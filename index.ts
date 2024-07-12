import { Account, Customer } from "./classes.js";

let customer = new Customer("Abdullah", "Sheikh", true, 16, "03213887757");
console.log(customer.CustomerInfo())

let account = new Account();
console.log(`\nYour balance now is ${account.Balance}\n`);

console.log(account.Debit(49.99));
console.log(`Your balance is now ${account.Balance}\n`);

console.log(account.Credit(250.99));
console.log(`Your balance is now ${account.Balance}`);
