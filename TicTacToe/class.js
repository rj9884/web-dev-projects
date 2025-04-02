let data = "Secret Data";
class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("Data = ",data);
    }
}

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        data = "New Data";
    }
}

let student1 = new User("Rajan","rj@email.com");
let student2 = new User("Akash","Ak@email.com");
let admin1 = new Admin("Admin","admin@college.com");

console.log(student1);
console.log(admin1);
console.log(admin1.editData());
admin1.viewData();
