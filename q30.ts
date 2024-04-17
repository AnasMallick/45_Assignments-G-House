let usernames:string[] = ["Anas","Talha","Ali","Saad"];
for(let i=0; i<usernames.length; i++){
    if(usernames[i] === "Anas"){
        console.log(`Hi Anas Welcome!`);
    }
    else{
        console.log(`Hi ${usernames[i]} Thank You for Logging In Again!`);
}
}