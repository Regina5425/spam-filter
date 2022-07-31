const comment = document.querySelector('textarea');
const button = document.querySelector('.send');
const comments = [];

button.addEventListener('click', addComment);

function addComment() {
	comments.push(comment.value);
	comment.value = '';
	console.log(comments);

	let addedComment = '';
	for(let comm of comments) {
		addedComment += `<div class="add">${comm}</div>`;
	}

	document.querySelector('.added-comment').innerHTML = addedComment;
}