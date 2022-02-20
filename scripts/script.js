const main = document.querySelector('main');
const container = document.querySelector('.container');
const div = document.createElement('div');
const ul = document.createElement('ul');
div.className = 'box3';
container.append(div);
div.append(ul);

const input = document.getElementById('input');
const addBtn = document.getElementById('add');
const removeBtn = document.getElementById('remove');
const hideBtn =document.getElementById('hide');
const showBtn = document.getElementById('show');
const cross = document.getElementById('cross');

addBtn.addEventListener('click', addNewItem);
removeBtn.addEventListener('click', removeItem);
hideBtn.addEventListener('click', hideItem);
showBtn.addEventListener('click', showItem);
cross.addEventListener('click', letsGo);

function letsGo() {
    input.value === '';
	const note = `<li><input type='checkbox'> Wake up</li>
	<li><input type='checkbox'> Eat</li>
	<li><input type='checkbox'> Code </li>
	<li><input type='checkbox'> Sleep</li>
	<li><input type='checkbox'> Repeat</li>`
	ul.innerHTML += note;
}

function addNewItem(){
	if (input.value === "") {
		return;
	} else {
		const item = `<li><input type='checkbox'> ${input.value} </li>`;
		ul.innerHTML += item;
	}
}

function removeItem(){
    const items = document.querySelectorAll(`input[type='checkbox']`);
    const li = document.querySelectorAll('li');

    items.forEach((item, index) => {
        if (item.checked) {
            li[index].remove();
        }
    })
}

function hideItem(){
    const items = document.querySelectorAll(`input[type='checkbox']`);
    const li = document.querySelectorAll('li');

    items.forEach((item, index) => {
        if (item.checked) {
            li[index].classList.add('hidden');
        }
    })
}

function showItem(){
    const li = document.querySelectorAll('li');

    li.forEach((item) => {
        if (item.classList.contains('hidden')) {
            item.classList.remove('hidden');
        }
    })
}
