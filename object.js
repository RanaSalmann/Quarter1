"use strict";
//Object
/*
Example 1:
Object code is :
var car:any=
{
specification name : "specifications,"
specification name : "specifications,"
specification name : "specifications,"
}
*/
/*
//Single entity value addition way
var car:any=
    {
        brand : "Ford",
        Model : "2022",
        color : "red",
        years : "2023"
    }
console.log("car", car);

//object  can save unique data not in similar data
//if one type data create we will define this object like this:

//Example 2
var car:any=
    {
        brand : "Toyota",
        Model : "2020",
        color : "Green",
        years : "2021"
    }

var car1:any=
    {
        brand : "Ford",
        Model : "2022",
        color : "red",
        years : "2023"
    }

var car2:any=
    {
        brand : "BMW",
        Model : "2002",
        color : "Black",
        years : "2003"
    }
    var cars:any[]=[car,car1,car2]
    console.log("car", cars);
    console.log("car1",car1);

//Arrays and objects are used to store multiple values or entities of a single kind.
// Array
const numbers: number[] = [1, 2, 3, 4, 5];
console.log([numbers]); // Output: [1, 2, 3, 4, 5]

// Object
const person: { name: string; age: number } = {
  name: "John Doe",
  age: 30,
};
console.log(person); // Output: { name: "John Doe", age: 30 }

//we can also store object data in array format Like:
//Example 3:
var cars:any[]=
[
    {
        brand : "BMW",
        Model : "2002",
        color : "Black",
        years : "2003"
    },
    {
        brand : "Ford",
        Model : "2022",
        color : "red",
        years : "2023"
    },
    {
        brand : "Toyota",
        Model : "2020",
        color : "Green",
        years : "2021"
    }
]
//we can print all type of as we want
//console.log("Cars=", cars)
//console.log(cars[0].color)
//console.log(cars[1].color)
//console.log(cars[2].color)
//console.log("Colors of Cars in database",cars[0].color,cars[1].color,cars[2].color)/
                                                            //Types of Objects
//we can used builtin data type "type" and can define custom typedatavalue
type CarType={company:string,isUsedCar:boolean,year:number}
var car:CarType=
{
    company: "Ferrari",
    isUsedCar: false,
    year: 2022,
}
console.log("Car data",car)

//write a programme that print all the car all the company and year number from the list, make sure car is an object

type CarType={company:string, year:number}

var carsData:CarType[]=
[
    {
        company:"Ferrari",
        year:2005,
    },
    {
        company:"BMW",
        year:2010,
    },
    {
        company:"Ford",
        year:2015,
    },
    {
        company:"Suzuki",
        year:2020,
    },
    {
        company:"Honda",
        year:2025,
    }
]

for (let index=0;index<carsData.length;index++)
{
    const car=carsData[index];
    console.log(car.company)
}
*/ 
