var users = ["Ted", "Tem", "Ton", "Sam", "Sor", "Sod", "Tex"];
// end value is excluded
console.log(users.slice(2, 5)); // Start(2) to End(5)

// count from 2 and go till 4 and replace with "HI"
// users.splice(2, 4, "HI")
users.splice(2, 4, "HI", "DIE") // Or we can pass as many value as we can
console.log(users); 