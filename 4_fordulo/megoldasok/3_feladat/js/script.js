window.onload = function () {
    let numbers = []
    let hNumbers = [];
    const tdInTable = document.querySelectorAll('td');

    function addToInput(n){
        if (hNumbers != 4){
            hNumbers.push(n);
            document.querySelector('#input').innerHTML = '*';
        } else {
            //check
        }
        console.log(hNumbers)
    }

    for (let i = 0; i < 10; i++) {
        let rndNum = Math.floor(Math.random() * 10);
        (numbers.includes(rndNum)) ? i -= 1 : numbers.push(rndNum);
    }
    for (let i = 0; i < 10; i++) {
        document.getElementById(`button${i}`).innerHTML = numbers[i]
    }
    for (let i = 0; i < tdInTable.length; i++) {
        tdInTable[i].addEventListener('click',function(){
            addToInput(numbers[i+1])
        });
    }
}