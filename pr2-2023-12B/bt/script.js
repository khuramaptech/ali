
// var  lang = ["java","css" ,"c#" , "python"]
// var num =[12,34,56,78,90]
// method
// var num =[12,34,56,78,90]
// var  lang = ["java","css" ,"c#" , "python"]
// var hi = num.concat(lang)
// console.log(hi)
var person = {
    name :"shariq",
    age:17,
    height:6.7,
    sleep: function(){
        console.log("sleeping......"+ this.age)
    }
}
for(let getval in person){
    console.log(person[getval])
}
