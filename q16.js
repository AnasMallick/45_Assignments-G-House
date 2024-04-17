var quest = [
    "Anas",
    "Talha",
    "Shoaib",
    "Noor"
];
while (quest.length > 2) {
    var removeGuest = quest.pop();
    console.log("Dear ".concat(removeGuest, " I'm Sorry I cannot invite you to the Dinner"));
}
for (var i = 0; i < quest.length; i++) {
    console.log("".concat(quest[i], " You are still invited to the Dinner. Looking forward to Seeing You!"));
}
quest = [];
