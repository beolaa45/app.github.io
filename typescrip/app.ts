class Department {
    name: String;
    constructor(n: String){
        this.name = n
    }

    static describe(){
        console.log("Department ");
    }
}

class A extends Department {
    constructor(n: String){
        super(n)

    }
}

const obj = new A("khanh")
console.log(A.describe())

