var users = ["Ozair", "Tayyab", "Fahad", "Moiz"];
if (users.length === 0) {
    console.log("We need t find some more Users");
}
else {
    for (var i = 0; i < users.length; i++) {
        if (users[i] === "Ozair") {
            console.log("Assalamualikum Ozair");
        }
        else {
            console.log("Assalamualikum ".concat(users[i], " Thank You for Logging In"));
        }
    }
}
users = [];
console.log("We need to find some more Users");
