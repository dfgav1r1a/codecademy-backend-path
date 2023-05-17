class School {
  constructor(name, level, numberOfStudents){
    this._name = name
    this._level = level
    this._numberOfStudents = numberOfStudents
  }

  get name() {
    return this._name
  }

  get level() {
    return this._level
  }

  get numberOfStudents() {
    return this._numberOfStudents
  }

  set numberOfStudents(num) {
    typeof num === Number ?
    this._numberOfStudents = num : console.log(
      'Invalid input: numberOfStuents must be set to  a Number')
  }

  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level. `)
  }

  static pickSubstituteTeacher(substituteTeachers) {
    let random = Math.floor(Math.random() * (substituteTeachers.length - 1))
    console.log(substituteTeachers[random])
    return substituteTeachers[random]
  }
}

class PrimarySchool extends School {
  constructor(name, level, numberOfStudents, pickupPolicy) {
    super(name, level = 'Primary', numberOfStudents)
    this._pickupPolicy = pickupPolicy
  }

  get pickupPolicy() {
    return this._pickupPolicy
  }
}

class MiddleSchool extends School {
  constructor (name, numberOfStudents) {
    super(name, 'Middle', numberOfStudents)
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents,sportTeams) {
    super(name, 'high', numberOfStudents)
    this._sportTeams = sportTeams
  }

  get sportTeams() {
    console.log(this._sportTeams)
    return this._sportTeams
  }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')

lorraineHansbury.quickFacts();
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harder','Jason Terry', 'Manu Ginobli'])

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])

alSmith.sportTeams;
