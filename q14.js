var member = [
    "Anas",
    "Talha",
    "Shoaib",
    "Noor"
];
var cantmember = "Shoaib";
var newmember = "Athar";
console.log("".concat(cantmember, ", Can Not Come"));
var cannotcome = member.indexOf(cantmember);
if (cannotcome !== -1) {
    member[cannotcome] = newmember;
}
for (var _i = 0, member_1 = member; _i < member_1.length; _i++) {
    var item = member_1[_i];
    console.log("I would like to invite ".concat(item, " for Dinner at my Home.Will be looking forward you tomorrow's night"));
}
