"use strict";
/* for (let index=1;index<=10;index++)
{
    let result=2*index;
    console.log("2*"+index+"=", result)
   } */
//loop prefix postfix operators
/*
var index = 1;
//prefix mey pehly index mey increment kry ga fr result ko assign kry ga
//postfix mey pehly result ko assign kry ga then index mey increment kry ga
var result=++index;
console.log("console of index", index);
console.log("console of result", result);
 
                                                            // Example 1: With while loop
var index=1;
while(index<=10)
{
    console.log(index)
    index++;
}
console.log("console")

                                                                //Example 2: with FOR loop with postincrement
for (let index=1;index<=10;index++)
{
    console.log(index)
}
console.log("console")

                                                                //Example of decrement operator with FOR loop
for (let index=10;index>=5;index--)
{
    console.log(index)
}
console.log("console")

                                                                // DO WHILE LOOP EXAMPLE
var i:number=1;
do
{
console.log("do while loop", i)
i++
}while(i<=10)

                            //write TS programme that calculate sum of even number which repeat 1 to 1000?

var sum:number=0;

for (let index=1; index<=1000; index++)
{
    {
    if(index % 2 ==0)
    sum=sum+index;
    }
}
console.log("even Numbers",sum)

//write TS programme that calculate sum of even number which repeat 1 to 1000 and make the list of even numbers?

var sum:number=0;
var list:number[]=[];
for (let index=1; index<=100; index++)
{
    if(index % 2 ==0)
    {
    sum=sum+index;
    list.push(index)
    }
}
console.log("even Numbers",sum, list)

//write TS programme that calculate sum of odd number which repeat 1 to 1000 and make the list of even numbers?

var sum:number=0;
var list:number[]=[];
for (let index=1; index<=100; index++)
{
    if(index % 2 !==0)
    {
    sum=sum+index;
    list.push(index)
    }
}
console.log("even Numbers",sum, list)

//Leetcode
//foreach loop builtin loop of TS
//map -do-
//filterloop -do-
let userNames:string[]=["Salman","Noman","Usman","Haider","Mirha","Ayat"]
for (let index=0;index<userNames.length;index++)
{
    const userName=userNames[index];
    console.log(userName)
}
*/ 
