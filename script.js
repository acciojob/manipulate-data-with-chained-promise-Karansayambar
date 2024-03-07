document.addEventListener("DOMContentLoaded", () => {
    let arr = [1, 2, 3, 4];
    let output = document.getElementById("output");

    let promise1 = (inputArry) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(inputArry);
            });
        });
    };

    promise1(arr)
        .then(filteredData => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    let evenNumbers = filteredData.filter(item => item % 2 === 0);
                    output.innerHTML = evenNumbers.join(", ");
                    resolve(evenNumbers);
                }, 1000);
            });
        })
        .then(evenNumbers => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    let multiply = evenNumbers.map(item => item * 2);
                    output.innerHTML = multiply.join(", ");
                    resolve(multiply);
                }, 2000);
            });
        })
        .catch(err => {
            console.log(err);
        });
});
