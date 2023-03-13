let numberToGuess = Math.floor(Math.random() * 1000);
console.log("Загадано: ", numberToGuess)

while (true) {
    const numberFromUser = prompt('Введите число в диапазоне от 0 до 999 или "q" для выхода:')
    console.log("Введено: ", numberFromUser)

    if (numberFromUser === 'q') {
        break
    }
    if (isNaN(+numberFromUser) || (+numberFromUser < 0 && +numberFromUser > 999)) {
        alert('Введите корректное число в диапазоне от 0 до 999 или "q" для выхода:')
    } else if (numberFromUser > numberToGuess) {
        alert('Загаданное число меньше')
    } else if (numberFromUser < numberToGuess) {
        alert('Загаданное число больше')
    } else if (numberFromUser == numberToGuess) {
        alert(`Вы угадали! Это было число ${numberToGuess}`)
        break 
    }
}