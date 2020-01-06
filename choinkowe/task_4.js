/**
 * Dane tj. w zadaniu 1.
 *
 *  1. pobierz element #app w pliku index.html
 *  2. wstaw do niego utworzony poprzez metody interfejsu DOM element
 *     listy nieuporzadkowanej UL
 *  3. utworz elementy listy LI skladajace sie z nazwy rasy i opisu w postaci:
 *
 *     <li> <h6>Abyssinian</h6> The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.</li>
 *
 * wtaw elementy listy do elementu UL
 *
 */

  let pobrany = document.getElementById('app');

  let obje = {};
  function lista(breeds){
    breeds.map((elem) => {
      obje[elem.name] = elem.description; 
      return obje;
    });
  };

  lista(breeds);
  
  let entr = Object.entries(obje);
  // console.log(entr);

  let elementyListy = entr.map(item => {return `<li><h6>${item[0]}</h6>${item[1]}</li>`});
  let bezPrzecinka = elementyListy.join('');
  // console.log(bezPrzecinka);

  pobrany.innerHTML = `<ul>${bezPrzecinka}</ul>`
