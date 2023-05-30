class Book{
    constructor(){
        this.section = document.getElementById('book-section');
        this.submit = document.getElementById('submit');
        this.titleInput = document.getElementById('title-input');
        this.authorInput = document.getElementById('author-input');
        this.DATA = JSON.parse(localStorage.getItem('data')) || [];
        this.show();
    }

    add(author, title){
        this.DATA.push({ author, title });
        localStorage.setItem('data', JSON.stringify(this.DATA));
    }
    remove(author, title){
        this.DATA = this.DATA.filter((b) => b.author !== author || b.title !== title);
        localStorage.setItem('data', JSON.stringify(this.DATA));
    }

    show(){
        this.section.innerHTML = '';
        this.DATA.forEach((data)=>{
            const div = document.createElement('div');
            const authorName = document.createElement('p');
            authorName.textContent = `${data.author}`;
            const titleName = document.createElement('p');
            titleName.textContent = `${data.title}`;
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            const hr = document.createElement('hr');

            div.appendChild(authorName);
            div.appendChild(titleName);
            div.appendChild(removeBtn);
            div.appendChild(hr);

            this.section.appendChild(div);

            removeBtn.addEventListener('click', ()=>{
                this.remove(data.author, data.title);
                this.show();
            })
        })
    }

    init(){
        this.submit.addEventListener('click', ()=>{
            this.add(this.authorInput.value, this.titleInput.value);
            this.show();
        })
    }
}

const book = new Book();
book.init();