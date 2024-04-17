
let member = [
    "Anas",
    "Talha",
    "Shoaib",
    "Noor"
]

let cantmember = "Shoaib";

let newmember = "Athar";

console.log(`${cantmember}, Can Not Come`);

let cannotcome: number = member.indexOf(cantmember);

if(cannotcome !== -1) {
    member[cannotcome] = newmember;
}  
for(let item of member){
    console.log(`I would like to invite ${item} for Dinner at my Home.Will be looking forward you tomorrow's night`)
} 