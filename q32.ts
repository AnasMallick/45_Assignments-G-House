let current_users:string[] = ["Ozair","Tayyab","Fahad","Moiz"];
let new_users:string[] = ["Tahir","Tariq","Athar"];

for(let i=0; i<new_users.length; i++){
    let usersExist = false;

    for(let j=0; j<current_users.length; j++){
        if(new_users[i].toLowerCase() === current_users[j].toLowerCase()){
            usersExist = true;
            break;
        }
    }
    if(usersExist){
        console.log(`The userName ${new_users[i]} is already in the list`);
    }
    else{
        console.log(`The userName ${new_users[i]} is available in the list`);
    }
}
console.log(current_users);