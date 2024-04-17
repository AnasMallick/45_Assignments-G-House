var usernames = ["Anas", "Talha", "Ali", "Saad"];
for (var i = 0; i < usernames.length; i++) {
    if (usernames[i] === "Anas") {
        console.log("Hi Anas Welcome!");
    }
    else {
        console.log("Hi ".concat(usernames[i], " Thank You for Logging In Again!"));
    }
}
