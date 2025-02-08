document.getElementById('check-btn').addEventListener('click', function() {
    const inputString = document.getElementById('text-input').value;
    
        if (inputString === "") {
                    alert("Por favor insira uma palavra");
                    return;
                }
    
    const cleanedString = inputString.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedString = cleanedString.split('').reverse().join('');
    const isPalindrome = cleanedString === reversedString;
    const resultElement = document.getElementById('result');
        if (isPalindrome) {
            resultElement.textContent = `${inputString} é um palíndromo`;
    
    }           else {
                    resultElement.textContent = `${inputString} não é um palíndromo`;
                }
            });