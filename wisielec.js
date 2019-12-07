function check(){ 
    const slowa = ['kakadu', 'koala', 'kangur', 'koczkodan'];
    const index = Math.floor(Math.random() * slowa.length);
    const slowo = Array.from(slowa[index]);
    let liczbaBledow = 5;
    function hide(element){return element = '_';};
    let hidden = slowo.map(hide);
    alert('Szukane słowo: ' + hidden.join(' '));

    while ((JSON.stringify(hidden) !== JSON.stringify(slowo)) && liczbaBledow > 0) 
    {
        let wpisanaLitera = prompt('Wpisz literę: ');
        let pozycja = slowo.indexOf(wpisanaLitera);
        if (pozycja !== -1)
            {    
                for (i = 0; i <= slowo.length; i+=1){
                (slowo[i] === wpisanaLitera) && (hidden[i] = wpisanaLitera); 
                }
                console.log(hidden.join(''));
            }
        else 
            {
            liczbaBledow -= 1; console.log('W tym wyrazie nie ma tej litery.')
            };
    }
    (liczbaBledow === 0) && (console.log('Koniec gry! Spróbuj jeszcze raz.'));
    (JSON.stringify(hidden)=== JSON.stringify(slowo)) && console.log('Pięknie! Szukane słowo to: ' + hidden.join('') + '.');
}

    check();

    
