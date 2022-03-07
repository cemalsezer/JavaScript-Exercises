let employee={
    name:"Cemal",
    surname:"Sezer",
    gender:"M",
    telephone:"35353535",
    profession:"mindworker",
    languages:["TR","ENG"],
    hobbies:["STORYTELLING","philosophy","bodybuilding"]
};

console.log(employee.languages.length)

employee.hobbies.forEach(function(hobbi){
console.log(hobbi);
});

