const comment = document.querySelector('textarea');
const button = document.querySelector('.send');
const comments = [];

button.addEventListener('click', addComment);

function addComment() {
	if(comment.value !== '') {
		comments.push(comment.value);
	}
	
	comment.value = '';

	let addedComment = '';
	for (let comm of comments) {
		let checked = checkSpam(comm);
		addedComment += `<div class="add">${checked}</div>`;
	}

	document.querySelector('.added-comment').innerHTML = addedComment;
}

function checkSpam(str) {
	if (str.includes('xxx')) {
		return str.replaceAll('xxx', '***');
	} else {
		return str;
	}
}