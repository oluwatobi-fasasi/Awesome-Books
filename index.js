const section = document.getElementById('book-section');
const submit = document.getElementById('submit');
const titleInput = document.getElementById('title-input');
const authorInput = document.getElementById('author-input');



let DATA = JSON.parse(localStorage.getItem('data')) || [];

function add(author, title){
    DATA.push({author, title});
    localStorage.setItem('data', JSON.stringify(DATA));
  }

  
  submit.addEventListener('click',(e)=>{
    add(authorInput.value, titleInput.value);
    show();
});

function remove(author, title) {
    DATA = DATA.filter((b) =>  b.author !== author || b.title !== title);
    localStorage.setItem('data', JSON.stringify(DATA));
}

function show(){
    section.innerHTML = '';
for(let i=0; i <= DATA.length; i++){
    const div = document.createElement('div');
    const authorName = document.createElement('p');
    authorName.textContent = `${DATA[i].author}`;
    const titleName = document.createElement('p');
    titleName.textContent = `${DATA[i].title}`;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    const hr = document.createElement('hr')

    

    div.appendChild(authorName);
    div.appendChild(titleName);
    div.appendChild(removeBtn);
    div.appendChild(hr);

    section.appendChild(div);

    removeBtn.addEventListener('click', ()=>{
        remove(DATA[i].author, DATA[i].title);
        show();
    });
}

}

show();

