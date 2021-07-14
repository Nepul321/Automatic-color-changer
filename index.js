const colors = ['blue', 'green', 'yellow', 'orange'];
const colors2 = ['aqua', 'lightblue', 'aliceblue', 'lightgreen']

function change() {
    var color1 = colors[Math.floor(Math.random() * colors.length)];
    var color2 = colors2[Math.floor(Math.random() * colors.length)];
    var bg = 'linear-gradient(' + color1 + ',' + ' ' + color2 + ')';
    document.body.style.backgroundImage = bg;
}

setInterval(change, 1000)
