const fs = require('fs');

fs.readFile('./hello.text', (err, data) => {
    if (err) {
        console.log('errrrorrrr');
    }
    console.log('Async' ,data.toString());
})

const file = fs.readFileSync('./hello.text');
console.log('Sync' ,file.toString());


//APEND
// fs.appendFile('./hello.txt', ' This is so cool!', err => {
//     if (err) {
//         console.log(err);
//     }
// })

//WRITE
// fs.writeFile('bye.txt', 'Sad to see you go', err => {
//     if (err) {
//         console.log(err);
//     }
// })

//DELETE
fs.unlink('./bye.txt', err => {
    if(err) {
        console.log(err);
    }
    console.log('Inception');
})