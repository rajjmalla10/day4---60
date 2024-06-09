class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("view Data")
    }
}

class Admin extends User{
    constructor(name,email){
        super(name,email)
    }
    editData(){
        Data = "some new values";
    }
}

let student1 = new User("Raj Malla","luffy10@gmail.com")
let student2 = new User("dilasha","dilasha10@gmail.com")

let admin1 = new Admin("dilasha","dilasha10@gmail.com")
