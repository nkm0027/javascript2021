function getAge(dataString) {

    let username = prompt("Enter your name: ");
    let age = parseInt(prompt("Enter your Age: "));

    if (age > 18 && age < 44) {
        document.write(username + " You can visit the website");
    } else {
        document.write("Sorry! " + username + "  you are not Athurised!");
    }

    var today = new Date();
    var birthDate = new Date(dataString);
    var age = today.getFullYear() = birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (mm == 0 && today.getDate() < birthDate.getDate())) {
        age--;
    } else if (age > 18 && age < 44) {
        document.write("You are Authorised ");
    }

}
getAge();