var mmember = [
    "Anas",
    "Talha",
    "Shoaib",
    "Noor"
];
mmember.unshift("Ahmed");
mmember.splice(Math.floor(mmember.length / 2), 0, "Hamza");
mmember.push("Ali");
for (var _i = 0, mmember_1 = mmember; _i < mmember_1.length; _i++) {
    var quest = mmember_1[_i];
    console.log("I would like to invite ".concat(quest, " for Dinner at my Home.Will be looking forward you tomorrow's night"));
}
