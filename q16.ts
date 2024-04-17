let quest = [
    "Anas",
    "Talha",
    "Shoaib",
    "Noor"
]
while (quest.length > 2) {
    let removeGuest = quest.pop();
    console.log(`Dear ${removeGuest} I'm Sorry I cannot invite you to the Dinner`);
}
for (let i = 0; i < quest.length; i++) {
    console.log(`${quest[i]} You are still invited to the Dinner. Looking forward to Seeing You!`)
}
quest = [];