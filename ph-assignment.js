const factorial = (element) => {
    //base case
    if (element === 0 || element === 1) {
        return 1;
        //recursive case
    } else {
        return element * factorial(element - 1);
    }
}

const largestNumber = (numbers, n) => {
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        element = element / n;
        element = Math.floor(element);

        // factorial
        element = factorial(element);

        numbers[i] = element;
    }
    const maximumNumber = Math.max(...numbers);
    console.log(maximumNumber);
}

const numbers = [1, 4, 7, 16];
const n = 4;
// largestNumber([1, 4, 7, 16], 4);
largestNumber(numbers, n);