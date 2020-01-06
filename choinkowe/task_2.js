
/**
 * napisz funkcje, ktora zwroci obiekt, w ktorym kluczem bedzie wartos pola id
 * a wartoscia bedzie obiekt w ktorym beda dwa pola
 * :: name z wartoscia pola name z podanej stalej
 * :: description z waroscia pola description
 *
 * {
 *    abys: {
 *      name: "Abyssinian",
 *      description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals."
 *    },
 *    // ...
 * }
 */
let obj1 = {};
const short = breeds.map((elem) => {
    let nazwa = elem.name; 
    let opis = elem.description; 
    let identyf = elem.id; 
    obj1[identyf] = {"name": nazwa, "description": opis}; 
    return obj1;
});

console.log(obj1)

