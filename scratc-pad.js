var a = { name: "Tim", things: [0, 1, 2]};

var b = Object.assign({}, a, {name: "Fred"})

b.things; 

b.things = a.things.concat(3); // will return a brand new array object - filter, map reduce as well
// Totally different objects 
b.things; 
a.things; 
