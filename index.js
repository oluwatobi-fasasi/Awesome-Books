class Book {
  constructor() {
    this.section = document.getElementById('book-section');
    this.form = document.querySelector('form');
    this.titleInput = document.getElementById('title-input');
    this.authorInput = document.getElementById('author-input');
    this.DATA = JSON.parse(localStorage.getItem('data')) || [];
    this.counter = 0;
    if (this.DATA.length > 0) {
      this.show();
    }
  }

  add(author, title) {
    this.DATA.push({ author, title });
    localStorage.setItem('data', JSON.stringify(this.DATA));
  }

  remove(author, title) {
    this.DATA = this.DATA.filter(
      (b) => b.author !== author || b.title !== title,
    );
    localStorage.setItem('data', JSON.stringify(this.DATA));
    this.counter -= 1;
  }

  show() {
    this.section.innerHTML = '';
    this.DATA.forEach((data) => {
      this.counter += 1;
      const div = document.createElement('div');
      div.classList.add('book-item');
      const authorName = document.createElement('p');
      authorName.textContent = ` "${data.title}" by ${data.author}`;
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      div.appendChild(authorName);
      div.appendChild(removeBtn);
      if (this.counter % 2 === 0) {
        div.style.background = 'lightgray';
      }

      this.section.appendChild(div);

      removeBtn.addEventListener('click', () => {
        this.remove(data.author, data.title);
        this.show();
      });
    });
  }

  init() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.add(this.authorInput.value, this.titleInput.value);
      this.form.reset();
      this.show();
    });
  }
}

const book = new Book();
book.init();
