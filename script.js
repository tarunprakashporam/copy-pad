let textBoxCount = 0;

function addTextBox() {
    textBoxCount++;
    
    const container = document.getElementById('container');
    
    const textBox = document.createElement('div');
    textBox.className = 'text-box';
    textBox.id = `textBox${textBoxCount}`;
    
    const input = document.createElement('input');
    input.type = 'text';
    input.id = `input${textBoxCount}`;
    input.placeholder = 'Enter text here...';
    
    const button = document.createElement('button');
    button.textContent = 'Copy';
    button.onclick = () => copyText(input.id);
    
    textBox.appendChild(input);
    textBox.appendChild(button);
    
    container.insertBefore(textBox, container.firstChild);
}

function copyText(inputId) {
    const inputElement = document.getElementById(inputId);
    const textToCopy = inputElement.value;

    navigator.clipboard.writeText(textToCopy).then(() => {
        console.log('Text copied to clipboard');
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

