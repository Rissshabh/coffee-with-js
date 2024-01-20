// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // it is the name iife 
    console.log(`DB Connected`);
})();

( (name)  =>{
    // it is the unnamed iife 
    console.log(`db connected again ${name}`)
}) (`Rishabh`);

