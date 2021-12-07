const data = {};
const format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

function handleInput(e) {
  data[e.name] = e.value;
}

function myOver(id) {
  document.getElementById(id).style.backgroundColor ='red';
}

function myLeave(e) {
  document.getElementById("check").innerHTML = "";
  document.getElementById("check").style.color = "white";
}

function checkFunction() {
  let spaceCount = 0;
  let numbersInFullname = 0;
  let numbersInPassword = 0;
  let upperLettersInUsername = 0;
  let upperLettersInPassword = 0;
  for (let i = 0; i < data['fullname'].length; i++) {
    if (data['fullname'][i] == ' ') {
      spaceCount++;
    }
    if (Number.isInteger(data['fullname'][i])) {
      numbersInFullname++;
    }
  }
  for (let i = 0; i < data['username'].length; i++) {
    if (!isLowerCase(data['username'][i])) {
      upperLettersInUsername++;
    }
  }
  for (let i = 0; i < data['password1'].length; i++) {
    if (!isLowerCase(data['password1'][i])) {
      upperLettersInPassword++;
    }
    if (Number.isInteger(data['password1'][i])) {
      numbersInPassword++;
    }
  }
  if (data['fullname'][data['fullname'].length - 1] == ' ' || data['fullname'][0] == ' ') {
    alert('A teljes neved nem kezdődhet, vagy végződhet szóközzel!');
  } else if (spaceCount != 1) {
    alert('A teljes nevednek kötelező tartalmaznia 1 szóközt, de többet viszont nem!');
  } else if (format.test(data['fullname'] && data['username'] && data['password1']) && data['password1']) {
    alert('Nem használhatsz semelyik mezőben sem speciális karaktereket!');
  } else if (numbersInFullname != 0) {
    alert('Nem tartalmazhat számokat a teljes neved!');
  } else if (upperLettersInUsername != 0) {
    alert('Nem tartalmazhat a felhasználóneved nagybetűket!');
  } else if (data['password1'].length != data['password2'].length) {
    alert('A jelszónak minimum 7 karakter hosszúnak kell lennie!');
  } else if (data['password1'] != data['password2']) {
    alert('Az általad megadott jelszavak nem egyeznek!');
  } else if ((upperLettersInPassword == 0) || (upperLettersInPassword == data['password1'].length)) {
    alert('A jelszavadnak muszáj tartalmaznia legalább 1 nagy- vagy kisbetűt!');
  } else if ((numbersInPassword == 0) || (numbersInPassword == data['password1'].length)) {
    alert('A jelszavadnak muszáj tartalmaznia legalább 1 számot!');
  }
}