class Employee {
  #salary
  constructor(firstName, lastName, profession, salary){
    this.firstName = firstName
    this.lastName = lastName
    this.profession = profession
    this.#salary = salary
  }
  get firstName(){
    return this._firstName
  }
  get lastName(){
    return this._lastName
  }
  get profession(){
    return this._profession
  }
  get salary(){
    return this.#salary
  }
  getFullName(){
    return `${this.firstName} ${this.lastName}`
  }
  set firstName(value){
    if (!value) throw new Error ('firstName cannot be empty') 
    if (typeof value !== 'string') throw new Error ("invalid firstName format");
    if (value.length < 2 || value.length > 50) throw new Error ('fistNema length should be between 2 and 50 characters')
    for (let char of value) {
      if (!((char >= "A" && char <= "Z") || (char >= "a" && char <= "z"))) {
          throw new Error("firstName must contain only Latin letters");
        }
      }
    this._firstName = value
  }
  set lastName(value){
    if (!value) throw new Error ('lastName cannot be empty') 
    if (typeof value !== 'string') throw new Error ("invalid lastName format");
    if (value.length < 2 || value.length > 50) throw new Error ('lastName length should be between 2 and 50 characters')
    for (let char of value) {
      if (!((char >= "A" && char <= "Z") || (char >= "a" && char <= "z"))) {
        throw new Error("lastName must contain only Latin letters");
        }
      }
    this._lastName = value
  }
  set profession(value){
    if (!value || value === " ") throw new Error ('profession cannot be empty') 
    if (typeof value !== 'string') throw new Error ("invalid profession format");
    for (let char of value) {
      if (!((char >= "A" && char <= "Z") || (char >= "a" && char <= "z") || (char === " "))) {
        throw new Error("lastName must contain only Latin letters");
        }
      }
    this._profession = value
  }
  set salary(value){
    if (!value) throw new Error ('salary cannot be empty or 0')
    if (value < 0 || value >= 10000) throw new Error ('salary cannot be negative or gte 10000')
    if (typeof value !== 'number') throw new Error ("invalid salary format");
    
    this.#salary = value
  }
}
class Company {
  #employees
  constructor(title, phone, address){
    this.title = title
    this.phone = phone
    this.address = address,
    this.#employees = []
  }
  get title(){
    return this._title
  }
  get phone(){
    return this._phone
  }
  get address(){
    return this._address
  }
  set title(value){
    if (!value) throw new Error ('title cannot be empty') 
    if (typeof value !== 'string') throw new Error ("invalid title format");
    this._title = value
  }
  set phone(value){
    if (!value) throw new Error ('phone cannot be empty') 
    this._phone = value
  }
  set address(value){
    if (!value) throw new Error ('addres cannot be empty') 
    if (typeof value !== 'string') throw new Error ("invalid address format");
    this._address = value
  }
  addEmployee(employee){
  if (!(employee instanceof Employee)) throw new Error ("Error")
  this.#employees.push(employee)
  }
  getEmployees(){
    return this.#employees
  }
  getInfo(){
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`
  }
  findEmployeeByName(firstName){
    if(!firstName) throw new Error ('firsName cannot be empty')
    let result = this.#employees.find(employee => employee.firstName === firstName)
    if (!result) throw new Error ('Emploee wasn\'t found')
    return result
  }
  removeEmployee(firstName){
    if(!firstName) throw new Error ('firsName cannot be empty')
    let index = this.#getEmployeeIndex(firstName)
    if (index < 0) throw new Error ('Emploee wasn\'t found')
    this.#employees.splice(index, 1)
  }
  #getEmployeeIndex(firstName){
    return this.#employees.findIndex(value => value.firstName === firstName)
  }
  getTotalSalary(){
    return this.#employees.reduce((amount, employee) => amount + employee.salary, 0)
  }
}
export { Employee, Company };
