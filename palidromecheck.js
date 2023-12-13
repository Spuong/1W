function checkPalindrome() {
    let str = document.getElementById('inputString').value.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let reversed = str.split('').reverse().join('');
    if (str === reversed) {
        document.getElementById('result').innerText = 'Это палиндром!';
    } else {
        document.getElementById('result').innerText = 'Это не палиндром!';
    }
}