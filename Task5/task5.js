const inputField = document.querySelector('input');
const btn = document.getElementById('tasks');

btn.addEventListener('click', () => {
    
    const id = inputField.value;
    const tasksList = document.querySelector('ul');
    const url = `https://jsonplaceholder.typicode.com/users/${id}/todos`

    if (tasksList.hasChildNodes) {
        tasksList.innerHTML = ''
    }
    
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        if (data.length !== 0) {
            for(let i = 0; i < data.length; i ++) {

                const insideList = document.createElement("li");
                insideList.className = "user";
                insideList.innerHTML = `<div class=\"user__info\"><div id=\"title\">title: ${data[i].title}</div><div id=\"completed\">completed: ${data[i].completed}</div></div>`;
                
                if(data[i].completed) {
                    insideList.style.textDecoration = 'line-through';
                }

                tasksList.appendChild(insideList);
            }
        } else {alert('Пользователь с указанным id не существует')}   
    })
    .catch(() => console.log('error'))
})