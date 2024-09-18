function helloClient () {
    let userName = localStorage.getItem('username');
    if(!userName || userName === null) {
        userName = prompt('Добро пожаловать! Назовите, пожалуйста, Ваше имя.')
    }
    if(userName !== null) {
        localStorage.setItem('username', userName);
        let entryTime = new Date();

        let displayEntryTime = entryTime.getFullYear() + '/' + ('0' + (entryTime.getMonth() + 1)).slice(-2) + '/' + ('0' + entryTime.getDate()).slice(-2) + ' ' + ('0' + entryTime.getHours()).slice(-2) + ':' + ('0' + entryTime.getMinutes()).slice(-2) + ':' + ('0' + entryTime.getSeconds()).slice(-2);

        alert(`Добрый день, ${userName}! Давно не виделись. В последний раз Вы были у нас ${displayEntryTime}.`)
    }
}

helloClient()

