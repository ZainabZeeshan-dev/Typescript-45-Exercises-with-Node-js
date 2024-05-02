//lower case
var personName = "Zainab";
console.log("lowercase:", personName.toLocaleLowerCase());
//Upper case
console.log("uppercase:", personName.toLocaleUpperCase());
//Title case
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
