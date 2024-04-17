var current_users = ["Ozair", "Tayyab", "Fahad", "Moiz"];
var new_users = ["Tahir", "Tariq", "Athar"];
for (var i = 0; i < new_users.length; i++) {
    var usersExist = false;
    for (var j = 0; j < current_users.length; j++) {
        if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
            usersExist = true;
            break;
        }
    }
    if (usersExist) {
        console.log("The userName ".concat(new_users[i], " is already in the list"));
    }
    else {
        console.log("The userName ".concat(new_users[i], " is available in the list"));
    }
}
console.log(current_users);
