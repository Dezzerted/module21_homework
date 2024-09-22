const inputOne = document.getElementById('input-block-one');
const inputTwo = document.getElementById('input-block-two');
const displayText = document.querySelector('.display-text');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    let numberOne = inputOne.value;
    let numberTwo = inputTwo.value;
    
    if (displayText.hasChildNodes) {
        displayText.innerHTML = ''
    }
    if(numberOne < 1 || numberOne > 10 || isNaN(numberOne)){
        displayText.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
        numberOne = false;
    }
    if(numberTwo < 1 || numberTwo > 10 || isNaN(numberTwo)){
        displayText.innerHTML = 'Лимит вне диапазона от 1 до 10';
        numberTwo = false;
    }
    if(!numberOne && !numberTwo) {
        displayText.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10';
    } else if (numberOne && numberTwo) {
        const url = `https://picsum.photos/v2/list?page=${numberOne}&limit=${numberTwo}`;
       
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {

                if (data.length !== 0) {

                    let savedUrlArr = [];
    
                for(let i = 0; i < data.length; i++) {
                    const imgDiv = document.createElement('div');

                    localStorage.setItem('url', data[i].download_url);
                    let savedUrl = localStorage.getItem('url');
                    
                    savedUrlArr.push(savedUrl);

                    imgDiv.innerHTML = `<img src=\"${savedUrl}\" alt=\"someImg\">`;
            
                    displayText.appendChild(imgDiv);
                }  
                localStorage.setItem('urlArray', JSON.stringify(savedUrlArr));
            }
        })
        .catch(() => console.log('error'))
    }
})

window.onload = function () {

    let retreiveUrl = JSON.parse(localStorage.getItem('urlArray'));
    
    retreiveUrl.forEach(item => {
        imgDiv = document.createElement('div');
        imgDiv.innerHTML = `<img src=\"${item}\" alt=\"someImg\">`;
    
        displayText.appendChild(imgDiv)
    })  
}


