const section = document.getElementById('book-section');
const submit = document.getElementById('submit');
const titleInput = document.getElementById('title-input');
const authorInput = document.getElementById('author-input');

let DATA = JSON.parse(localStorage.getItem('data')) || [];

function add(author, title) {
  DATA.push({ author, title });
  localStorage.setItem('data', JSON.stringify(DATA));
}

function remove(author, title) {
  DATA = DATA.filter((b) => b.author !== author || b.title !== title);
  localStorage.setItem('data', JSON.stringify(DATA));
}

function show() {
  section.innerHTML = '';
  DATA.forEach((DATA) => {
    const div = document.createElement('div');
    const authorName = document.createElement('p');
    authorName.textContent = `${DATA.author}`;
    const titleName = document.createElement('p');
    titleName.textContent = `${DATA.title}`;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    const hr = document.createElement('hr');

    div.appendChild(authorName);
    div.appendChild(titleName);
    div.appendChild(removeBtn);
    div.appendChild(hr);

    // div.innerHTML = bodyContent;
    section.appendChild(div);

    removeBtn.addEventListener('click', () => {
      remove(DATA.author, DATA.title);
      show();
    });
  });
}

submit.addEventListener('click', () => {
  add(authorInput.value, titleInput.value);
  show();
});

show();
