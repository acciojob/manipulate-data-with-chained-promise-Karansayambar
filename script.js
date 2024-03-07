document.addEventListener("DOMContentLoaded", () => {
    let arr = [1, 2, 3, 4];
    let output = document.getElementById("output");

    let promise1 = (inputArry) => {
        return new Promise((resolve, reject) => {
                resolve(inputArry);
        },1000);
    };
    promise1(arr)
        .then(filteredData => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    let evenNumbers = filteredData.filter(item => item % 2 === 0);
                    output.innerHTML = evenNumbers.join(", ");
                    resolve(evenNumbers);
                }, 2000);
            });
        })
        .then(evenNumbers => {
            return new Promise((resolve, reject) => {
                    let multiply = evenNumbers.map(item => item * 2);
                    output.innerHTML = multiply.join(", ");
                    resolve(multiply);
            });
        })
        .catch(err => {
            console.log(err);
        });
});
