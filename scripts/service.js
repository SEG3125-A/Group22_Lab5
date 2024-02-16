

// Function to verify that the phone number is correct.
// Here, I validate for (12345), but you have to change that for a phone validation
// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions 
// https://flaviocopes.com/javascript-regular-expressions/ 
// Regular expressions can get complex, you can think in terms of a series of characters
// or numbers 
function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (123) 456-7890
    var filter = /^\(\d{3}\) \d{3}-\d{4}$/;
    
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateCreditCard(txtCreditCard) {
    var cardNumber = document.getElementById(txtCreditCard).value;
    // This regex matches a credit card format of four groups of four digits separated by spaces
    var filter = /^\d{4} \d{4} \d{4} \d{4}$/;
    
    if (filter.test(cardNumber)) {
        return true;
    }
    else {
        return false;
    }
}

function validateName(pname, nameError) {
    var nameInput = document.getElementById(pname);
    var errorDiv = document.getElementById(nameError);
    // Regular expression to match any numbers
    var hasNumber = /\d/;

    if (hasNumber.test(nameInput.value)) {
        // If there's a number in the name, show the error message
        errorDiv.style.display = 'block';
    } else {
        // Otherwise, hide the error message
        errorDiv.style.display = 'none';
    }
}

function validateExpiryDate(edate) {
    var dateInput = document.getElementById(edate).value;
    // Regular expression to match the date format mm/yy (so 1-12 for months and anything for year)
    var filter = /^(0[1-9]|1[0-2])\/(\d{2})$/;

    if (filter.test(dateInput)) {
        return true;
    }
    else {
        return false;
    }
}

function validateSecurityCode(scode) {
    var codeInput = document.getElementById(scode).value;
    // Regular expression to match exactly 3 digits
    var filter = /^\d{3}$/;

    if (filter.test(codeInput)) {
        return true;
    }
    else {
        return false;
    }
}

function validatePostalCode(postal) {
    var postalCode = document.getElementById(postal).value;
    // Regular expression to match exactly 6 characters (digits or letters)
    var filter = /^[a-zA-Z0-9]{6}$/;

    if (filter.test(postalCode)) {
        return true;
    } else {
        return false;
    }
}


// HERE, JQuery "LISTENING" starts
$(document).ready(function(){

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#phone").on("change", function(){
        if (!validatePhone("phone")){
            alert("Wrong format for phone. Please use the format (123) 456-7890.");
            $("#phone").addClass("error");
        }
        else {
            $("#phone").removeClass("error");
        }
    });

    // Add event listener for the credit card input field
    $(document).ready(function(){
        $("#credit").on("change", function(){
            if (!validateCreditCard("credit")){
                alert("Wrong format for credit card. Please use the format xxxx xxxx xxxx xxxx.");
                $("#credit").addClass("error");
            }
            else {
                $("#credit").removeClass("error");
            }
        });
    });

    // Add event listener for the name input field
    $(document).ready(function(){
        $("#name").on("input", function(){
            validateName("name", "nameError");
        });
    });

    // Add event listener for the full name input field (credit card)
    $(document).ready(function(){
        $("#cname").on("input", function(){
            validateName("cname", "cnameError");
        });
    });

    // Add event listener for the date input field
    $(document).ready(function(){
        $("#expiry").on("change", function(){
            if (!validateExpiryDate("expiry")){
                alert("Wrong format for expiry date. Please use the format mm/yy");
                $("#expiry").addClass("error");
            }
            else {
                $("#expiry").removeClass("error");
            }
        });
    });

    // Add event listener for the security input field
    $(document).ready(function(){
        $("#security").on("change", function(){
            if (!validateSecurityCode("security")){
                alert("Wrong format for security code. Please enter the 3-digit number on the back of your card.");
                $("#security").addClass("error");
            }
            else {
                $("#security").removeClass("error");
            }
        });
    });

    // Add event listener for the postal code input field
    $(document).ready(function(){
        $("#postal").on("change", function(){
            if (!validatePostalCode("postal")){
                alert("Wrong format for the postal code. Please enter the 6 characters corresponding to your postal code (no spaces)");
                $("#postal").addClass("error");
            } else {
                $("#postal").removeClass("error");
            }
        });
    });

    // https://jqueryui.com/tooltip/ 
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#cname").tooltip();
});