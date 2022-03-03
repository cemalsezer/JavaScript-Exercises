let now= 2022;
let models=["TOYOTA","MAZDA","FORD","MERCEDES"];
let years=["2013","2017","2018","2019"];

//EXAMPLE 1
for(let i=0;i<models.length;i++)
{
    console.log(i+1+".Model: "+models[i]);
}

//EXAMPLE 2
for(let i=0;i<models.length;i++)
{
    console.log(models[i]+" "+years[i]+" model and "+(now-years[i])+" years old");
}

//Example 3
var responseModel = prompt("Enter to model pls");
var responseYear = prompt("Enter to year pls");
models.push(responseModel);
years.push(responseYear);
for(let i=0;i<models.length;i++)
{
    console.log(models[i]+" "+years[i]+" model and "+(now-years[i])+" years old");
}

