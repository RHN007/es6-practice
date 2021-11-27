const person = {
  name: "jack William",
  age: 17,
  job: "facebooker",
  gfName: "Ema Watson",
  phone: "01712223344",
  address: "Mirpur,Pallabi",
};
const { phone, gfName, address, salary } = person;

// const gfName = person.gfName;
// const phone = person.phone;

// console.log(gfName, phone, address, salary);
const friends = [
  "Shakib Khan",
  "Arman Khan",
  "Aamir Khan",
  "Salman Khan",
  "Sharukh Khan",
  "Arbaz Khan",
];

const [chotoFriend, ...restFriends] = friends;

console.log(restFriends);

const complexObject = {
  name: "abc",
  info: {
    address: "kola bagan",
    leader: "Tiger Leader",
  },
};
const { leader } = complexObject.info;
