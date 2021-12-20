window.onload = function () {
    let numbers = [];
    let hNumbers = [];
    const tdInTable = document.querySelectorAll('td');

    function openFunction(){
        document.getElementById('doorImg').style.backgroundImage = "url('img/door.jpg')";
    }
    function retryFunction(){
        alert('Próbáld újra!')
        document.querySelector('#input').innerHTML = '';
        hNumbers = [];
    }
    function addToInput(n) {
        if (hNumbers.length != 4) {
            hNumbers.push(n);
            document.querySelector('#input').innerHTML =
                document.querySelector('#input').innerHTML + '*';
        } if (hNumbers.length == 4) {
            setTimeout(function () {
                (hNumbers.toString() == '8,9,9,6') ? openFunction() : retryFunction();
            }, 1);
        }
    }

    for (let i = 0; i < 10; i++) {
        let rndNum = Math.floor(Math.random() * 10);
        (numbers.includes(rndNum)) ? i -= 1 : numbers.push(rndNum);
    }
    for (let i = 0; i < 10; i++) {
        document.getElementById(`button${i}`).innerHTML = numbers[i];
    }
    for (let i = 0; i < tdInTable.length; i++) {
        if (i == 10) {
            tdInTable[10].addEventListener('click', function () {
                addToInput(numbers[i - 10])
            });
        } else {
            tdInTable[i].addEventListener('click', function () {
                addToInput(numbers[i + 1]);
            });
        }

    }
}