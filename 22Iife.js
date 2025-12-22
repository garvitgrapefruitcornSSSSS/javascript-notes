// Immediately invoke function expression(IIFE)

// Global scope se pollution avoid krne ke liye iife use krte hain.

(function iife(){
    console.log("DB connected")
})();

// iife()

// ======by using arrow function=============

((name) => {
    console.log(`DB is connected ${name}`);
})("hitesh");