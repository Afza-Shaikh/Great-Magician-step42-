function show_magicians(magician: string[]){
    magician.forEach(name => console.log(name));
}
function make_great(magician: string[]){
    return magician.map (name => `The Great ${name}`);
}
//Define an array of magicians names
let magician_names =["Harry Poter","Hamza","Usaman"];

let great_magicians = make_great(magician_names);

show_magicians(great_magicians)