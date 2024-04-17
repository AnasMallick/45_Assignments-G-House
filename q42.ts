function show_Magicians(magicians:string[]):void {
    for(let magician of magicians) {
        console.log(magician);
    }
}
function makeGreat(magicians:string[]):string[] {
    const modifyMagician:string[] = [];
    for(let magician of magicians) {
        modifyMagician.push("The Great "+ magician);
    }
    return modifyMagician;
}
const magic:string[] = ["Sultan","Hero","Tipu"];
const modify:string[] = makeGreat([...magic]);
show_Magicians(magic);
show_Magicians(modify); 