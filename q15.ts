let mmember = [
    "Anas",
    "Talha",
    "Shoaib",
    "Noor"
]
mmember.unshift("Ahmed");
mmember.splice(Math.floor(mmember.length/2),0,"Hamza");
mmember.push("Ali");
for (let quest of mmember) {
    console.log(`I would like to invite ${quest} for Dinner at my Home.Will be looking forward you tomorrow's night`);
}