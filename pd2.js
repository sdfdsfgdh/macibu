let arr =["Volvo", "BMW", "Audi", "Lada", "VaZ","VW"];
let arr1=arr.shift()
let arr2=arr.slice(1)
console.log(arr1)
console.log(arr1,arr2)
let arr3=arr.slice(0,arr.length-1)
console.log(arr3)

arr.splice(2,0,"Mercedes","Honda");
console.log(arr)

console.log(arr.sort().reverse())

for(i=0;i<arr.length;i++)
{
   console.log("Masiva "+i+" elements ir "+arr[i])
}
if(Array.isArray(arr))
{
    console.log("Elements ir masivs")
}
var x=false;
arr.forEach(element => {
    if(element=="Mercedes")
    {x=true;}
});
if(x)
{
    console.log("Satur Mercedes")
    x=false;
}
else
{
    console.log("Nesatur Mercedes")
    x=false;
}
arr.push("Opel");
arr.sort()
console.log(arr)
console.log("Opel index ir "+arr.indexOf("Opel"))
var a=0;
arr.forEach(element => {
    if(element=="Opel"){
        ++a
    }  
});
if(a>1)
{
    console.log("Atkartojas")
}
else
{
    console.log("NEatkartojas") 
}

let arr5=arr.concat(arr2)
let str=arr5.toString();
console.log(str)
var Person={
FirstName:"Sentis",
LastName:"Sjakste",
DateOfBirth:"01.09.1995",
Gender:"Male",
TripPlaces:"Jelgava",
fullName: function(){
    return this.FirstName+" "+this.LastName+" "+this.DateOfBirth;
}
}

console.log(Person.fullName())