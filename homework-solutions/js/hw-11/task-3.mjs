class Employee {
  #salary
  constructor(firstName, lastName, salary){
    this._firstName = firstName
    this._lastName = lastName
    this.#salary = salary
  }
  get firstName(){
    return this._firstName
  }
  get lastName(){
    return this._lastName
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
  set salary(value){
    if (!value) throw new Error ('salary cannot be empty or 0')
    if (value < 0 || value >= 1000000) throw new Error ('salary cannot be negative or gte 10000')
    if (typeof value !== 'number') throw new Error ("invalid salary format");
    
    this.#salary = value
  }
}

class Developer extends Employee {
  constructor(firstName, lastName, salary, programmingLanguages = []){
    super(firstName,lastName, salary)
    this.programmingLanguages = programmingLanguages
  }
  get _programmingLanguages(){
    return this._programmingLanguages
  }
  set _programmingLanguages(language =[]){
    if (!language) throw new Error ('Programming language cannot be empty')
    if (typeof language !== 'string') throw new Error ('Invalid format')
    this._programmingLanguages = language
  }
  addProgrammingLanguage(language) {
    if (!language) throw new Error ('Programming language cannot be empty')
    if (typeof language !== 'string') throw new Error ('Invalid format')
    return this.programmingLanguages.push(language)  
  }
}
class Manager extends Employee {
  constructor(firstName, lastName, salary, teamSize){
    super(firstName, lastName, salary)
    this.teamSize = teamSize
  }
  get _teamSize(){
    return this._teamSize
  }
  set _teamSize(num){
    if(typeof num !== 'number') throw new Error ('Invalid format')
      this._teamSize = num
  }
  increaseTeamSize(){
    return this.teamSize ++
  }
}
class Designer extends Employee {
  constructor(firstName, lastName, salary, designTools =[]){
    super(firstName, lastName, salary)
    this.designTools = designTools
  }
  get _designTools(){
    return this._designTools
  }
  set _designTools(tool){
    if(!tool) throw new Error ('Design tool cannot be empty')
    if (typeof tool !== 'string') throw new Error ('Invalid format')
    this._designTools = tool
  }
  addDesignTool(tool){
    if(!tool) throw new Error ('Design tool cannot be empty')
    if (typeof tool !== 'string') throw new Error ('Invalid format')
    this.designTools.push(tool)
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
  if (!(employee instanceof Employee)) throw new Error (`${employee}: invalid format`)
  if (this.#employees.some(value => value.firstName === employee.firstName && value.lastName === employee.lastName)) throw new Error (`${employee.firstName} ${employee.lastName} is already exist`) // на этой валидации падают тесты, хотя все работает
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
    return this.#employees.reduce((amount, emploee) => amount + emploee.salary, 0)
  }
  getEmployeesByProfession(profession){
    return this.#employees.filter(employee => employee.constructor.name === profession);
  }
}
export { Employee, Company, Designer, Developer, Manager };
