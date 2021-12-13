let numbers = []
for (let i = 0; i < 10; i++) {
    let rndNum = Math.floor(Math.random() * 10);
    //if (rndNum == 0) rndNum = 1;
    (numbers.includes(rndNum)) ? i -= 1 : numbers.push(rndNum);
}
console.log(numbers);
for (let i = 0; i < 10; i++) {
    document.getElementById(`button${i}`).innerHTML = numbers[i]
}
document.querySelectorAll('td','td').addEventListener('click',function(){
    alert('asd')
});
