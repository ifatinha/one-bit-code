class User {

    constructor(fullName, email, password) {
        this.fullName = fullName;
        this.email = email;
        this.password = password;
    }

    login = (email, pass) => {
        if (email === this.email && pass === this.password) {
            console.log("Welcome " + this.fullName);
        } else {
            console.log("Sorry, invalid email or password.");
        }
    }
}

const adm = new User("John Doe", "johndoe@gmail.com", "123");
adm.login("johndoe@gmail.com", "123");