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
    this._firstName = value
  }
  set lastName(value){
    if (!value) throw new Error ('lastName cannot be empty') 
    if (typeof value !== 'string') throw new Error ("invalid lastName format");
    this._lastName = value
  }
  set profession(value){
    if (!value) throw new Error ('profession cannot be empty') 
    if (typeof value !== 'string') throw new Error ("invalid profession format");
    this._profession = value
  }
  set salary(value){
    if (!value) throw new Error ('salary cannot be empty or 0')
    if (value < 0) throw new Error ('salary cannot be negative')
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
    if (typeof value !== 'number') throw new Error ("invalid phone format");
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
}
export { Employee, Company };
