type Color = "red" | "green" | "blue"; 
// Define o tipo HexColor que aceita qualquer cor e um valor hexadecimal
type HexColor<T extends Color> = `#${string}`;

// Usage
let myColor: HexColor<"blue"> = "#0000FF";

console.log(myColor)