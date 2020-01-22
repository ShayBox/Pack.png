const backgrounds = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png'];
const background = backgrounds[Math.floor(Math.random() * backgrounds.length)];

document.body.style.backgroundImage = `url(assets/images/backgrounds/${background})`;