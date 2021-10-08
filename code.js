
String.prototype.filterBannedWords = function (bannedWords) {
    return this.split(" ").filter(word => !bannedWords.includes(word)).toString();
}
console.log("This house is not nice!".filterBannedWords(['not']));


Array.prototype.bubbleSort = function () {
    let i, j;
    for (i = 0; i < this.length; i++ ){
        for (j = 0; j < this.length; j++){
            if (this[j] > this[j+1]){
                let temp = this[j];
                this[j] = this[j+1];
                this[j+1] = temp;
            }
        }
    }

    console.log(this);
}

let arr = [6,4,0,3,-2,1];
arr.bubbleSort();


function Person() {}

Person.prototype.initialize = function (name) {
    this.name = name;
}

function Teacher() {}

Teacher.prototype = Object.create(Person.prototype);

Teacher.prototype.teach = function (subject) {
    this.subject = subject;
    console.log(this.name+ " is now teaching "+ this.subject);
}


let faculty = new Teacher();
faculty.initialize("Emmanuel");
faculty.teach("Web Application Programming");


