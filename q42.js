var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function show_Magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician_1 = magicians_1[_i];
        console.log(magician_1);
    }
}
function makeGreat(magicians) {
    var modifyMagician = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician_2 = magicians_2[_i];
        modifyMagician.push("The Great " + magician_2);
    }
    return modifyMagician;
}
var magician = ["Sultan", "Hero", "Tipu"];
var modifyMagician = makeGreat(__spreadArray([], magician, true));
show_Magicians(magician);
show_Magicians(modifyMagician);
