const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');



const xhr = new XMLHttpRequest();

const generateJoke = () =>{
    xhr.open('GET','https://api.chucknorris.io/jokes/random');

    xhr.onreadystatechange = function(){
        if(this.readyState===4 & this.status ===200){
        const data = JSON.parse(this.responseText);
        jokeEl.innerHTML = data.value;
        }
    };

    xhr.send();
};



jokeBtn.addEventListener('click', generateJoke);