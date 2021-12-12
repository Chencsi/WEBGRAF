const data = {};
const regex = new RegExp("[A-Z]");
const format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
let spaceCount, numbersInFullname, numbersInPassword, upperLettersInUsername, upperLettersInPassword;
spaceCount = numbersInFullname = numbersInPassword = upperLettersInUsername = upperLettersInPassword = 0;
const fields = ['fullname', 'username', 'password1', 'password2'];
let oldPlaceholders = ['Tanuló János', 'tanulojanos01', 'Jelszó', 'Jelszó mégegyszer'];
let newPlaceholders =
  [
    'Legalább 1 szóköz, nem több',
    'Csupa kisbetűk és számok',
    'Legalább 7 karakter, kis- és nagybetűk, számok',
    'Egyezzen meg az előbb megadott jelszóval'
  ];
const msg =
  [
    'A teljes neved nem kezdődhet, vagy végződhet szóközzel!',                    //0
    'A teljes nevednek kötelező tartalmaznia 1 szóközt, de többet viszont nem!',  //1
    'Nem használhatsz semelyik mezőben sem speciális karaktereket!',              //2
    'Nem tartalmazhat számokat a teljes neved!',                                  //3
    'Nem tartalmazhat a felhasználóneved nagybetűket!',                           //4
    'A jelszónak minimum 7 karakter hosszúnak kell lennie!',                      //5
    'Az általad megadott jelszavak nem egyeznek!',                                //6
    'A jelszavadnak muszáj tartalmaznia legalább 1 nagy- vagy kisbetűt!',         //7
    'A jelszavadnak muszáj tartalmaznia legalább 1 számot!',                      //8
    'A regisztráció sikeres volt!'                                                //9
  ];

function isLowerCase(str) { return str == str.toLowerCase() && str != str.toUpperCase(); }
function handleInput(e) { data[e.name] = e.value; }
function myOver(id) { return document.getElementsByName(fields[id])[0].placeholder = newPlaceholders[id]; }
function myLeave(id) { document.getElementsByName(fields[id])[0].placeholder = oldPlaceholders[id]; }
function checkFunction() {
  
  for (let i = 0; i < data['fullname'].length; i++) {
    (data['fullname'][i] == ' ') ? spaceCount++ : false;
    (Number.isInteger(data['fullname'][i])) ? numbersInFullname++ : false;
  }
  for (let i = 0; i < data['username'].length; i++) {
    (data['username'][i].match(regex)) ? upperLettersInUsername++ : false;
  }
  for (let i = 0; i < data['password1'].length; i++) {
    (data['password1'][i].match(regex)) ? upperLettersInPassword++ : false;
    (data['password1'][i].match(new RegExp('[0-9]'))) ? numbersInPassword++ : false;
  }

  if (data['fullname'][data['fullname'].length - 1] == ' ' || data['fullname'][0] == ' ') alert(msg[0]);
  else if (spaceCount != 1) alert(msg[1]);
  else if (format.test(data['fullname'] && data['username'] && data['password1']) && data['password1']) alert(msg[2]);
  else if (numbersInFullname != 0) alert(msg[3]);
  else if (upperLettersInUsername != 0) alert(msg[4]);
  else if (data['password1'].length != data['password2'].length) alert(msg[5]);
  else if (data['password1'] != data['password2']) alert(msg[6]);
  else if ((upperLettersInPassword == 0) || (upperLettersInPassword == data['password1'].length)) alert(msg[7]);
  else if ((numbersInPassword == 0) || (numbersInPassword == data['password1'].length)) alert(msg[8]);
  else return alert(msg[9]);
}