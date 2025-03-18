function calculate(operation) {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    if (num1 && num2) {
        const url = `http://localhost:3000/${operation}?num1=${num1}&num2=${num2}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                document.getElementById("result").innerHTML = `The result of ${operation} is: ${data.result}`;
            })
            .catch(error => {
                document.getElementById("result").innerHTML = `Error: ${error.message}`;
            });
    } else {
        document.getElementById("result").innerHTML = "Please fill out all fields.";
    }
}
