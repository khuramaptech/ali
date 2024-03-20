// obj={
//     std1:{
//         name:"saad",
//         age:21,
//         gender:"male"
//     },
//     std2:{
//         name:"rabe",
//         age:15,
//         gender:"male"
//     },
//     std3:{
//         name:"laiba",
//         age:20,
//         gender:"female"
//     },
//     gender:{
//     gender:"male",
//     gender:"female",
// }

// let categories=["fruits","vagetables"];
// let product =[
//     {
//         pname:"lemon",
//         pqty:20,
//         pprice:120,
//         pcatogary:categories[0],
//         satuts:0
//     },
//     {
//         pname:"potato",
//         pqty:120,
//         pprice:220,
//         pcatogary:categories[1],
//         satuts:1
//     },
//     {
//         pname:"tomato",
//         pqty:200,
//         pprice:320,
//         pcatogary:categories[1],
//         satuts:1
//     },
//     {
//         pname:"strawberry",
//         pqty:50,
//         pprice:520,
//         pcatogary:categories[1],
//         satuts:0
//     },
// ]
// console.log(product);

// for(let i=0; i<product.length; i++){
// console.log(product[i].pname);
// }
// let fruits=[];
// let fruitsdetails=fruits.filter(fruitskey =>
// {
// let fruits=obj[fruitskey];
// });

let task=[
 ["ali","20","web developer"],
 ["tahier","26","seo exper"],
 ["saima","23","web designing"],
["alina","18","freelancer"],
]
for (let i = 0; i < task.length; i++) {
    console.log((i+1)+" Name: "+task[i][0]+", Age: "+task[i][1]+", Skill: "+task[i][2]);   
 
}
