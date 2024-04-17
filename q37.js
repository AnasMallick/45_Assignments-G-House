function shirtMake(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I Love TypeScript"; }
    console.log("The Shirt Size is " + size + " and Print Message " + message);
}
shirtMake();
shirtMake("Medium");
shirtMake("Large", "I love Coding");
