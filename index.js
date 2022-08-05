const button = document.querySelector('button');
const comments = document.querySelector('.comments');
const textarea = document.querySelector('textarea');

let array = [];

button.addEventListener('click', () => {
	let text = textarea.value;
	textarea.value = '';

	array.push(text);

	comments.innerHTML = '';
	render(comments, array);
});

function render(parentNode, data) {
	for (let i = 0; i < data.length; i++) {
		let item = data[i];

		const filteredWords = ['viagra', 'xxx'];
		let filteredText = item;
		for (let word of filteredWords) {
			let regexp = new RegExp(word, 'ig');
			filteredText = filteredText.replace(regexp, '***');
		}

		let node = document.createElement('div');
		node.classList.add('comment');
		node.textContent = filteredText;

		const deleteBtn = document.createElement('button');
		deleteBtn.classList.add('del__btn');
		deleteBtn.textContent = 'Delete';

		deleteBtn.addEventListener('click', () => {
			node.remove();
			data.splice(i, 1);
		});

		parentNode.append(node);
		node.append(deleteBtn);
	}
}