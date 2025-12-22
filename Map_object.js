/*Map is a special JavaScript object used to store data in key–value pairs.

👉 Just like a dictionary:

Key → word

Value → meaning

2️⃣ Why do we need Map?

Normal objects have limitations. Map solves them.

✔ Keys can be ANY data type
✔ Maintains insertion order
✔ Easy to loop
✔ Better performance for large data
*/ 

let mymap = new Map();

// Adding data to Map

mymap.set("Name","Garvit")
myMap.set("age", 20);
myMap.set(true, "Active");
myMap.set(1, "One");

// Getting value from Map

console.log(mymap.get("name"))

// Checking if key exists

// console.log(mymap.has("barsa"));  false

// Removing data

mymap.delete("age")

// Size of map

console.log(myMap.size); // number of entries

// Clear whole Map

mymap.clear()
