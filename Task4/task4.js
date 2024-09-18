function randomNumber() {
    let answer = Math.floor(Math.random() * 100) + 1;
    return answer
}

const myPromise = new Promise ((resolve, reject) => {
    setTimeout(() => {
    let randNumb = randomNumber();
    if(randNumb % 2 === 0) {
        resolve(`Завершено успешно. Сгенерированное число — ${randNumb}`);
    } else {
        reject (`Завершено с ошибкой. Сгенерированное число — ${randNumb}`);
    } 
    }, 3000)
})

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })