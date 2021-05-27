function num_range() {
    let num = parseInt(prompt("Enter the number"));
    if (num > 50 && num < 100) {
        document.write("The entered Number is in the range");
    } else {
        document.write("Number is out of the Range");
    }
}
num_range();