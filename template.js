const firstName = "Justin";
const lastName = "timeberLake";
const fullName = firstName + " " + lastName + " is a good boy";

console.log(fullName);
//Es6 Template

const fullName2 = `${firstName} ${lastName} ${20 + 50 + 30} is a good boy.`;

console.log(fullName2);

//Previous way of adding multiline

const multiline = "Old I Love you\n" + " I hate you\n " + "I miss you";

console.log(multiline);
//Using Es6 Template life become Peramoi

const multiline2 = `Using Es6 Template life become Peramoi
I love you
I hate you
I miss you 
Awesome isn't`;

console.log(multiline2);
