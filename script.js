//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
	let arr = [1,2,3,4];
	let output = document.getElementById("output");
	let promise1 = (inputArry) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
			resolve(inputArry);
			}, 3000);
		});
	};

	promise1(arr)
	.then(filteredData => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				let evenNumbers = filteredData.filter(item => item % 2 === 0);
			    resolve(evenNumbers);
			},0);
		});
	})
	.then(evenNumbers => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				let multiply = evenNumbers.map(item => item * 2);
			output.innerHTML += multiply.join(",");
			resolve(multiply);
			},0);
		})
	})
	.catch(err => {
		console.log(err);
	})
	});