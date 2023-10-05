# Factory-Method

the Factory Method is a design pattern that provides an interface for creating objects in a super class, but it allows subclasses to alter the type of objects that will be created. It falls under the category of creational design patterns and is particularly useful when you want to create objects without specifying the exact class of object that will be created until runtime.

Here's a basic explanation and example of the Factory Method pattern in JavaScript:

1. Define an interface (or abstract class): This interface defines a method for creating objects, but it doesn't specify the exact class of objects. In JavaScript, there are no explicit interfaces, so you can define it as a regular function or class with a factory method.

2. Concrete Implementations (Subclasses): Create one or more concrete implementations (subclasses) that implement the factory method defined in the interface. These subclasses will determine the specific type of objects to be created.

3. Client Code: Use the factory method to create objects without needing to know the specific implementation class.

different if we use normal class with factory method: 
```js
"use strict";

class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }

  finalSalary() {
    let date = new Date();
    const bonus = date.getMonth() === 11 ? this.salary : 0;
    const tunjangan = this.position === "Manajer" ? 200_000 : 150_000;
    return this.salary + bonus + tunjangan;
  }
}

class Staff extends Employee {
  constructor(name, salary) {
    super(name, "Staff", salary);
  }
}

class Manajer extends Employee {
  constructor(name, salary) {
    super(name, "Manajer", salary);
  }
}

const employees = [
  { name: "Rizky", position: "Manajer", salary: 10_000_000 },
  { name: "Chris", position: "Staff", salary: 6_000_000 },
  { name: "Derrick", position: "Staff", salary: 6_000_000 },
  { name: "Joseph", position: "Staff", salary: 6_000_000 },
  { name: "Nadel", position: "Staff", salary: 6_000_000 },
];
let temp1 = []
for (let i = 0; i < employees.length; i++) {
  let {name, position, salary} = employees[i]
  if(position === 'Staff'){
    let newEmp = new Staff(name, salary)
    temp1.push(newEmp)
  }
}

// these manual way to create instance object with foreach and map
let temp = [];
employees.forEach((element) => {
  const { name, position, salary } = element;
  if (position === "Staff") {
    temp.push(new Staff(name, salary));
  } else if (position === "Manajer") {
    temp.push(new Manajer(name, salary));
  }
});

console.log(temp, "<<< from foreach");

const instanceEmployee = employees.map((el) => {
  const { name, position, salary } = el;
  if (position ===`"Staff") return new Staff(name, salary); // single line condition
  if (position === "Manajer") return new Manajer(name, salary);
});

console.log(instanceEmployee, "<< from map");
```
but we can make it more easier with use Factory method, how to create?

```js
class EmployeeFactory {
  //Factory don't need constructor, and in factory only fill with static method
  //the parameter of static method usually same with main class constructor in this case will same with constructor class Employee
  static singleCreate(name, position, salary) {
    //then fill the condition like the manual way
    if (position === "Staff") return new Staff(name, salary);
    if (position === "Manajer") return new Manajer(name, salary);
  }

  //then usually we will meet a bulk data, so we can make factory to handle bulk too we can use logic from single create then put in on new static method factory
  static bulkCreate(data) {
    return data.map((el) => {
      const { name, position, salary } = el;
      return EmployeeFactory.singleCreate(name, position, salary);
    });
  }
}

const instanceEmployee2 = employees.map((el) => {
  const { name, position, salary } = el;
  return EmployeeFactory.singleCreate(name, position, salary);
});
console.log(instanceEmployee2, "<< from Factory single create");


const instanceEmployee3 = EmployeeFactory.bulkCreate(employees)
console.log(instanceEmployee3, "<< from Factory Bulk create");
```
