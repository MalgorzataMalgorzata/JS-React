(function () {
  const gameElement = document.getElementById('arkanoid');
  const refCollection = gameElement.querySelectorAll('[ref]');
console.log(refCollection);
  const template = [...refCollection].reduce((obj, element) => {
    const name = element.getAttribute('ref');
    obj[name] = element;
 
    return obj;
    console.log(template);
  }, {});


template.paddle.style.left = ((template.arena.offsetWidth - template.paddle.offsetWidth)/2)+"px";
template.ball.style.left = ((template.arena.offsetWidth - template.ball.offsetWidth)/2)+"px";
template.ball.style.bottom = '37px';

  console.log([template.paddle.offsetWidth, template.arena.offsetWidth]);

  /* const template = {};

  for (let i = 0, ln = refCollection.length; i < ln; i += 1) {
      const element = refCollection[i];
      const name = element.getAttribute('ref');
      template[name] = element;
  }

  Array.from(refCollection).forEach(element => {
    const name = element.getAttribute('ref');
    template[name] = element;
}) */



})()
