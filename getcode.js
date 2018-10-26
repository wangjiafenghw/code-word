const fs = require("fs");
const readline = require('readline');

const rl = readline.createInterface({
    input: fs.createReadStream('word.js'),
    output: fs.createWriteStream('output.js')
});
/**
 * TODO 得出字母图案的二位矩阵
 * !rl.on到底有没有回调，啊~~
 */
var index = '';
const word = new Object();
rl.on('line', (line) => {

    if (line >= 'A' && line <= 'Z') {
        index = line;
        word[index] = [];
    } else {
        var l = [];
        for (let i = 0; i < line.length; i++) {
            switch (line[i]) {   
                case ' ':
                    l.push(0)
                    break;
                case '█':
                    l.push(1)
                    break;
                case '═':
                    l.push(2)
                    break;
                case '╗':
                    l.push(3)
                    break;
                case '╔':
                    l.push(4)
                    break;
                case '║':
                    l.push(5)
                    break;
                case '╝':
                    l.push(6)
                    break;
                case '╚':
                    l.push(7)
                    break;
                case '#':
                    
                    break;
                default:
                    console.log('意外情况', line[i])
                    break;
            }
        }
        word[index].push(l)
    }
})

setTimeout(() => {
    fs.writeFile("output.js", JSON.stringify(word), ()=>{
        console.log('ok')
    })
}, 10000);  //这里有点儿low,rl.on有结束回调吗…… =||





