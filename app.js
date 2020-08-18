// let form = document.getElementById('form');

// form.addEventListener("change", () => {
//     document.getElementById('btSubmit').disabled = !validate();
// });

window.onload = function () {
    validate();
}

function validate() {
    //name validation 
    var bt = document.getElementById('btSubmit');

    if (name() && clas() && year() && pom()) {

        bt.disabled = false;

    } else {
        bt.disabled = true;
    }

}

//name validation

function name() {

    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var firstName = document.forms["myForm"]["fname"].value;
    var lastName = document.forms["myForm"]["lname"].value;

    if (firstName != "" && lastName != "") {

        return true;

    } else {
        return false;
    }


}

//class validation
function clas() {
    //validating class
    var clas = document.forms["myForm"]["class"].value;
    //clas = "5A";
    var letterNumber = /^[0-9a-zA-Z]+$/;
    if (clas != "") {
        if (clas.match(letterNumber)) {

            return true;

        } else {
            return false;
        }
    } else {
        return false;
    }
}

//validating year of pass
function year() {

    let yea = document.forms["myForm"]["yop"].value;

    if (yea != "") {
        let year = parseInt(yea);
        if (year > 2017) {

            return true;
        }
    } else {
        return false;
    }
}

//validating a percentage

function pom() {

    var pom = document.forms["myForm"]["pom"].value;

    var z1 = /^[0-9]*\d$/;
    if (pom != "") {
        let po = parseInt(pom);
        if (z1.test(po)) {

            return true;
        }
    } else {
        return false;
    }
}

function reset() {
    form.reset();
}