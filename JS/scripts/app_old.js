const userInfo = {
// 	balance: 0,
// 	operations: 0,
// 	increse(sum) {
// 		this.balance +=sum;
// 		this.operations++;
// 	}
// }

// function createUser() {
// 	const userObj = {
// 			balance: 0,
// 			operations: 0,
// 			increse(sum) {
// 				this.balance +=sum;
// 				this.operations++;
// 			}
// 	};

// 	return function() {
// 		return userObj
// 	}
// }

// const user1 = createUser();
// user1().increse(100);
// user1().increse(200);
// console.log(user1());

// const user2 = createUser();
// user1().increse(100);
// user1().increse(200);
// console.log(user1());

// document.querySelector('.button').addEventListener('click', function(e) {
// 	const input = document.querySelector('.input').value;
// 	if (!input) {
// 		return;
// 	}
// 	document.querySelector('.panel').innerText = input;
// 	document.querySelector('.input').value = '';
// });

function submitForm(){
	const input = document.querySelector('.input').value;
	if (!input) {
		return;
	}
	document.querySelector('.panel').innerText = input;
	document.querySelector('.input').value = '';
	const textString = JSON.stringify({ text: input });
	localStorage.setItem('text', textString);
}

function inputChanged(e) {
	if (e.code == 'Enter') {
		submitForm()
	}
}

// document.querySelector('.input').addEventListener('keydown', (e) => {
	
// });
