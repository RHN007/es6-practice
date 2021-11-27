class Student {
  constructor(sId, sName) {
    this.id = sId;
    this.name = sName;
    this.school = "Mirpur Bangla High School";
  }
}

const student1 = new Student(30, "Rakibul Hassan");

const student2 = new Student(31, "Nayon Akond");
console.log(student1, student2);
