function Even_odd() {
    let num = prompt(("Enter a Number"));
    for (num >= 20 && num <= 30) {
        if ((num | 1) > num) {
            document.write("the number is even " + num);
        } else {
            document.write("The Number is Odd" + num);
        }
    }
}

function Even_odd();