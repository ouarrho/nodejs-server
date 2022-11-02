class Users {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    hello() {
        console.log(__dirname, __filename);
        console.log('Name: ' + this.name);
        console.log('Age: ' + this.age);
    }
}

module.exports = Users;
