// 1.
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

try {
  let res = sum(null);
  console.log(res);
}
catch(error) {
  if (error instanceof TypeError) console.log(error.message);
}

// 2.
let sayName = name => {
  if (typeof name === "string") console.log(name);
  else throw new Error("Invalid name! Must be a string!");
}
try {
sayName("Alex");
sayName(1);
}
catch(e) {
  console.log(e.message);
}

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }
  console.log(greeting);
}

try {
  greet("");
}
catch(e) {
  console.log("Hello World");
}
