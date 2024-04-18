export default class Pokemon {
    constructor (name, type, level) {
        this.name = name
        this.type = type
        this.level = level
    }
    displayInfo () {
        console.log(`${this.name} - Type : ${this.type}, Level : ${this.level}`);
    }
}