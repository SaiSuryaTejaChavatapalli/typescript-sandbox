import "./style.css";

class Department {
  public name: string;
  public employees: string[] = [];
  private readonly id: string;
  constructor(id: string, n: string) {
    this.name = n;
    this.id = id;
  }
  describe(this: Department) {
    console.log(this.name);
  }
  addEmployee(employee: string) {
    // this.id=2
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// const accounting = new Department("d1", "Accounting");
// console.log(department);
// department.describe();

// department.addEmployee("Sai");
// department.printEmployeeInformation();
// const copyObject = { name: "DUMMY", describe: department.describe };
// console.log(copyObject.describe());

//Private and Public modifiers
// accounting.addEmployee("Sai");
// console.log(accounting.employees);
// accounting.employees.push("Harshi");
// console.log(accounting.employees);
//
// console.log(accounting.id);

//IT DEPARTMENT
// class ITDepartment extends Department {
//   public admins: string[];
//   constructor(id: string, admins: string[]) {
//     super(id, "IT");
//     this.admins = admins;
//   }
// }
// const it = new ITDepartment("i1", ["sai", "harshi", "teja", "srilekha"]);
// console.log(it);
// it.addEmployee("Lakshaman");
// console.log(it);

//ACCOUNTING DEPARTMENT
class AccountingDepartment extends Department {
  private reports: string[];
  constructor(id: string, reports: string[]) {
    super(id, "Accounting");
    this.reports = reports;
  }
  addReport(report: string) {
    this.reports.push(report);
  }
  printReports() {
    console.log(this.reports);
  }
}

const accountingDepartment = new AccountingDepartment("a1", []);
console.log(accountingDepartment);
accountingDepartment.addReport("Heart");
accountingDepartment.printReports();
