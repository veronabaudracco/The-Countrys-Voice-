// inputs
var inputs = document.querySelectorAll('input');
var fullName = inputs[0];
var email = inputs[1];
var password = inputs[2];
var passwordConfirmation = inputs[3];
var age = inputs[4];
var phone = inputs[5];
var address = inputs[6];
var city = inputs[7];
var zipCode = inputs[8];
var idNumber = inputs[9];

// input error messages
var inputMessages = document.querySelectorAll('.inputMessage');
var fullNameMessage = inputMessages[0];
var emailMessage = inputMessages[1];
var passwordMessage = inputMessages[2];
var passwordConfirmationMessage = inputMessages[3];
var ageMessage = inputMessages[4];
var phoneMessage = inputMessages[5];
var addressMessage = inputMessages[6];
var cityMessage = inputMessages[7];
var zipCodeMessage = inputMessages[8];
var idNumberMessage = inputMessages[9];


// focus events
fullName.addEventListener("focus", function() {
        fullName.classList.add("focus");
        fullNameMessage.innerHTML = '';
    });

email.addEventListener("focus", function() {
        email.classList.add("focus");
        emailMessage.innerHTML = '';
    });

password.addEventListener("focus", function() {
        password.classList.add("focus");
        passwordMessage.innerHTML = '';
    });

passwordConfirmation.addEventListener("focus", function() {
        passwordConfirmation.classList.add("focus");
        passwordConfirmationMessage.innerHTML = '';
    });

age.addEventListener("focus", function() {
        age.classList.add("focus");
        ageMessage.innerHTML = '';
    });

phone.addEventListener("focus", function() {
        phone.classList.add("focus");
        phoneMessage.innerHTML = '';
    });

address.addEventListener("focus", function() {
        address.classList.add("focus");
        addressMessage.innerHTML = '';
    });

city.addEventListener("focus", function() {
        city.classList.add("focus");
        cityMessage.innerHTML = '';
    });

zipCode.addEventListener("focus", function() {
        zipCode.classList.add("focus");
        zipCodeMessage.innerHTML = '';
    });

idNumber.addEventListener("focus", function() {
        idNumber.classList.add("focus");
        idNumberMessage.innerHTML = '';
    });

//blur events

inputs.forEach( function(input)  {
        input.addEventListener("blur",function() {
            input.classList.remove("focus");
        });
    });

fullName.addEventListener("blur", function() {
        if (validateFullName()) {
            fullName.classList.remove("invalidate");
            fullName.classList.add("validate");
            fullNameMessage.classList.remove("invalidateMessage");
            fullNameMessage.classList.add("validateMessage");
            fullNameMessage.innerHTML = "Correct";
        }
        else {
            fullName.classList.remove("validate");
            fullName.classList.add("invalidate");
            fullNameMessage.classList.remove("validateMessage");
            fullNameMessage.classList.add("invalidateMessage");
            fullNameMessage.innerHTML = "Full name must contain at least 6 letters";
        }
    });

email.addEventListener("blur", function() {
        if (validateEmail()) {
            email.classList.remove("invalidate");
            email.classList.add("validate");
            emailMessage.classList.remove("invalidateMessage");
            emailMessage.classList.add("validateMessage");
            emailMessage.innerHTML = "Correct";
        }
        else {
            email.classList.remove("validate");
            email.classList.add("invalidate");
            emailMessage.classList.remove("validateMessage");
            emailMessage.classList.add("invalidateMessage");
            emailMessage.innerHTML = "Email format invalid";
        }
    });

password.addEventListener("blur", function() {
        if (validatePassword()) {
            password.classList.remove("invalidate");
            password.classList.add("validate");
            passwordMessage.classList.remove("invalidateMessage");
            passwordMessage.classList.add("validateMessage");
            passwordMessage.innerHTML = "Correct";
        }
        else {
            password.classList.remove("validate");
            password.classList.add("invalidate");
            passwordMessage.classList.remove("validateMessage");
            passwordMessage.classList.add("invalidateMessage");
            passwordMessage.innerHTML = "At least 8 characters, consisting of letters and numbers.";
        }
    });

passwordConfirmation.addEventListener("blur", function() {
        if (validatePasswordConfirmation()) {
            passwordConfirmation.classList.remove("invalidate");
            passwordConfirmation.classList.add("validate");
            passwordConfirmationMessage.classList.remove("invalidateMessage");
            passwordConfirmationMessage.classList.add("validateMessage");
            passwordConfirmationMessage.innerHTML = "Correct";
        }
        else {
            passwordConfirmation.classList.remove("validate");
            passwordConfirmation.classList.add("invalidate");
            passwordConfirmationMessage.classList.remove("validateMessage");
            passwordConfirmationMessage.classList.add("invalidateMessage");
            passwordConfirmationMessage.innerHTML = "Passwords do not match";
        }
    });

age.addEventListener("blur", function() {
        if (validateAge()) {
            age.classList.remove("invalidate");
            age.classList.add("validate");
            ageMessage.classList.remove("invalidateMessage");
            ageMessage.classList.add("validateMessage");
            ageMessage.innerHTML = "Correct";
        }
        else {
            age.classList.remove("validate");
            age.classList.add("invalidate");
            ageMessage.classList.remove("validateMessage");
            ageMessage.classList.add("invalidateMessage");
            ageMessage.innerHTML = "Whole number greater than or equal to 18.";
        }
    });

phone.addEventListener("blur", function() {
        if (validatePhone()) {
            phone.classList.remove("invalidate");
            phone.classList.add("validate");
            phoneMessage.classList.remove("invalidateMessage");
            phoneMessage.classList.add("validateMessage");
            phoneMessage.innerHTML = "Correct";
        }
        else {
            phone.classList.remove("validate");
            phone.classList.add("invalidate");
            phoneMessage.classList.remove("validateMessage");
            phoneMessage.classList.add("invalidateMessage");
            phoneMessage.innerHTML = "At least 7 digits, without spaces, hyphens or parentheses.";
        }
    });

address.addEventListener("blur", function() {
        if (validateAddress()) {
            address.classList.remove("invalidate");
            address.classList.add("validate");
            addressMessage.classList.remove("invalidateMessage");
            addressMessage.classList.add("validateMessage");
            addressMessage.innerHTML = "Correct";
        }
        else {
            address.classList.remove("validate");
            address.classList.add("invalidate");
            addressMessage.classList.remove("validateMessage");
            addressMessage.classList.add("invalidateMessage");
            addressMessage.innerHTML = "At least 5 characters, with letters, numbers and a space in between.";
        }
    });

city.addEventListener("blur", function() {
        if (validateCity()) {
            city.classList.remove("invalidate");
            city.classList.add("validate");
            cityMessage.classList.remove("invalidateMessage");
            cityMessage.classList.add("validateMessage");
            cityMessage.innerHTML = "Correct";
        }
        else {
            city.classList.remove("validate");
            city.classList.add("invalidate");
            cityMessage.classList.remove("validateMessage");
            cityMessage.classList.add("invalidateMessage");
            cityMessage.innerHTML = "At least 3 characters.";
        }
    });

zipCode.addEventListener("blur", function() {
        if (validateZipCode()) {
            zipCode.classList.remove("invalidate");
            zipCode.classList.add("validate");
            zipCodeMessage.classList.remove("invalidateMessage");
            zipCodeMessage.classList.add("validateMessage");
            zipCodeMessage.innerHTML = "Correct";
        }
        else {
            zipCode.classList.remove("validate");
            zipCode.classList.add("invalidate");
            zipCodeMessage.classList.remove("validateMessage");
            zipCodeMessage.classList.add("invalidateMessage");
            zipCodeMessage.innerHTML = "At least 3 characters.";
        }
    });

idNumber.addEventListener("blur", function() {
        if (validateIdNumber()) {
            idNumber.classList.remove("invalidate");
            idNumber.classList.add("validate");
            idNumberMessage.classList.remove("invalidateMessage");
            idNumberMessage.classList.add("validateMessage");
            idNumberMessage.innerHTML = "Correct";
        }
        else {
            idNumber.classList.remove("validate");
            idNumber.classList.add("invalidate");
            idNumberMessage.classList.remove("validateMessage");
            idNumberMessage.classList.add("invalidateMessage");
            idNumberMessage.innerHTML = "7 or 8 digit number.";
        }
    });

// input valitations
function validateFullName() {
    var space = fullName.value.indexOf('');
    if ((fullName.value.length < 7) || (space -= 0)) {
        return false;
    }
    return true;
}

function validateEmail() {
    var atSymbol = email.value.indexOf("@");
    var dot = email.value.indexOf(".");

    if (atSymbol < 1 || dot <= atSymbol + 2 || dot === email.value.length - 1 ) {
        return false;
    }
    return true;
}

function validatePassword() {
    var p = password.value;
    if (p.length < 8 || p.search(/[a-z]/) < 0 || p.search(/\d/) < 0) {
        return false;
    }
    return true;
}

function validatePasswordConfirmation() {
    var pa = passwordConfirmation.value;
    var pC = password.value;
    if (pC !== pa) {
        return false;
    }
    return true;
}

function validateAge() {
    var a = age.value;
    if (a < 18 || isNaN(a)) {
        return false;
    }
    return true;
}

function validatePhone() {
    var p = phone.value;
    if (p.length < 7 || p.search(/\W/) != -1 || isNaN(p)) {
        return false;
    }
    return true;
}

function validateAddress() {
    var l = address.value;
    if (l.length < 5 || l.search (/[0-9]/) < 0 || l.indexOf('') < 0  || l.search(/[A-z]/)) {
        return false;
    }
    return true;
}

function validateCity() {
    var c = city.value;
    if (c.length < 3) {
        return false;
    }
    return true;
}

function validateZipCode() {
    var z = zipCode.value;
    if (z.length < 3) {
        return false;
    }
    return true;
}

function validateIdNumber() {
    var i = idNumber.value;
    if (i.length < 7 || i.length > 8 || isNaN(i)) {
        return false;
    }
    return true;
}

function validateAll () {
    return (validateFullName() &&
    validateEmail() && 
    validatePassword() &&
    validatePasswordConfirmation() &&
    validateAge() &&
    validatePhone() &&
    validateAddress() &&
    validateCity() &&
    validateZipCode() &&
    validateIdNumber())
}

document.querySelector('.submitButton').addEventListener("click", function(e) {
        e.preventDefault();
        if (validateAll()) {
            sendInformation();
        }
        else if (!validateFullName()) {
            alert(fullNameMessage.innerHTML)
        }
        else if (!validateEmail()) {
            alert (emailMessage.innerHTML)
        }
        else if (!validatePassword()) {
            alert (passwordMessage.innerHTML)
        }
        else if (!validatePasswordConfirmation) {
            alert (passwordConfirmationMessage.innerHTML)
        }
        else if (!validateAge) {
            alert (ageMessage.innerHTML)
        }
        else if (!validatePhone) {
            alert (phoneMessage.innerHTML)
        }
        else if (!validateAddress) {
            alert (addressMessage.innerHTML)
        }
        else if (!validateCity) {
            alert (cityMessage.innerHTML)
        }
        else if (!validateZipCode) {
            alert (zipCodeMessage.innerHTML)
        }
        else if (!validateIdNumber) {
            alert (idNumberMessage.innerHTML)
        }
    }
)

// bonus
var bonusName = document.getElementById('hello');
fullName.addEventListener('keydown', bonus);
fullName.addEventListener('focus', bonus);
function bonus() {
	var nameValue = fullName.value;
	bonusName.innerHTML = 'Hello, ' + nameValue;
}

// -----------WEEK 06-------------

// url

var url = new URL('https://curso-dev-2021.herokuapp.com/newsletter');
var params = url.searchParams;

function createUrl() {
    params.append('name', fullName.value);
    params.append('email', email.value);
    params.append('password', password.value);
    params.append('passwordConfirmation', passwordConfirmation.value);
    params.append('age', age.value);
    params.append('phone', phone.value);
    params.append('address', address.value);
    params.append('city', city.value);
    params.append('zipCode', zipCode.value);
    params.append('idNumber', idNumber.value);
    return url;
    
}

// send data to the server

function sendInformation() {
    fetch(createUrl())
    .then(manageResponse)
    .then(manageData)
    .catch(manageError);
}

// manage responses
function manageResponse(res){
  return res.json();
}

function manageData(data){
  okModal(data);
  saveOnLocalStorage();
  console.log(data);
}

function manageError(err){
  errorModal(err);
}

// modal 
function showModal(title, content, buttons) {
    var modal = document.createElement("div");
  
    modal.classList.add("modal");
    modal.innerHTML = `
          <div class="innerModal">
            <div class="headerModal">
                  <div class="title">${title}</div>
                  <button class="close" type="button">
                      <span class="material-icons">close</span>
                  </button>
            </div>
              <div class="content">${content}</div>
              <div class="lowerModal"></div>
          </div>
      `;
  
    for (var button of buttons) {
      var element = document.createElement("button");
  
      element.setAttribute("type", "button");
      element.classList.add("modalButton");
      element.textContent = button.label;
      element.addEventListener("click", function(e) {
        if (button.triggerClose) {
          document.body.removeChild(modal);
        }
        button.onClick(modal);
      });

      modal.querySelector(".lowerModal").appendChild(element);
    }
    modal.querySelector(".close").addEventListener("click", function(e) {
      document.body.removeChild(modal);
    });

    document.body.appendChild(modal);
  }
  
  function okModal(data){
      showModal('Validations have passed! We have submitted your information. You will be hearing from us soon ', 
      ` 
      Full name: ${data.name}, 
      Email: ${data.email}, 
      Password: ${data.password}, 
      Age: ${data.age}, 
      Phone: ${data.phone}, 
      Address: ${data.address}, 
      City: ${data.city}, 
      Postal code: ${data.zipCode},
      Id: ${data.idNumber} 
      ` , [
    {
    label: "Done",
    onClick: (modal) => {
    },
    triggerClose: true
    }
    ]);
  }
  
  function errorModal(err){
  
    if(!err){
      showModal("Something went wrong", 
      ` 
      Check your personal information
      `, [
      {
      label: "Ok",
      onClick: (modal) => {
      },
      triggerClose: true
      }
      ]);
    } else{
      showModal("Something went wrong", 
      ` 
      ${err};
      `, [
      {
      label: "Ok",
      onClick: (modal) => {
      },
      triggerClose: true
      }
      ]);
    }
  }

  //save data on local storage

  function saveOnLocalStorage(){
    localStorage.setItem('name', fullName.value)
    localStorage.setItem('email', email.value)
    localStorage.setItem('password', password.value)
    localStorage.setItem('passwordConfirmation', passwordConfirmation.value)
    localStorage.setItem('age', age.value)
    localStorage.setItem('phone', phone.value)
    localStorage.setItem('address', address.value)
    localStorage.setItem('city', city.value)
    localStorage.setItem('zipCode', zipCode.value)
    localStorage.setItem('idNumber', idNumber.value)
  }
  
  function showDataLocallyStored(){
    fullName.value = localStorage.getItem('name');
    email.value = localStorage.getItem('email');
    password.value = localStorage.getItem('password');
    passwordConfirmation.value = localStorage.getItem('passwordConfirmation');
    age.value = localStorage.getItem('age');
    phone.value = localStorage.getItem('phone');
    address.value = localStorage.getItem('address');
    city.value = localStorage.getItem('city');
    zipCode.value = localStorage.getItem('zipCode');
    idNumber.value = localStorage.getItem('idNumber');
  }

  window.onload = function() {
    showDataLocallyStored();
    var titulo = document.getElementById('hello');
    titulo.innerHTML = "Hello," + ' '+ fullName.value;
  }