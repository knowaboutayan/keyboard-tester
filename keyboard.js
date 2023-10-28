
let alphabate_keyName = [
    ['Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'],//list=0
    ["\`", "!", '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '=', 'backspace'],//list=1
    ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', "\\"],
    ['Caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter'],
    ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '>', '?', 'Shift'],
    ['Ctrl', 'WIN', 'Alt', 'Space', 'Alt', 'Ctrl']

];



let control_keyName = [
    ['PauseBreak', 'ScrollLock', 'Home',],
    ['Insert', 'Delete', 'End'],
    ['PageUp', 'PageDn'],

];


let number_keyName = [
    ['NumLock', "/", "*", "+"],
    ['7', '8', '9', '-'],
    ['4', '5', '6', '%'],
    ['1', '2', '3'],
    ['0', '.', 'Enter']
];


let keyboard_partition = [document.querySelectorAll('#alphabate_key .keyboard_row'), document.querySelectorAll('#control_key .keyboard_row'), document.querySelectorAll('#number_key .keyboard_row')]



let printKeys = (keyListName, partition) => {
    for (let list = 0; list < keyListName.length; list++) {
        for (let key = 0; key < keyListName[list].length; key++) {
            let createKey = document.createElement('span');
            createKey.innerHTML = keyListName[list][key];
            keyboard_partition[partition][list].appendChild(createKey);
            createKey.setAttribute('id', `${keyListName[list][key].toLowerCase()}`)
        }
    }
}


printKeys(alphabate_keyName, 0);
printKeys(control_keyName, 1);
printKeys(number_keyName, 2);

let check_key = (key_press) => {
    

    switch (key_press.key.toLowerCase()) {
        case 'escape': document.getElementById('esc').style.cssText += 'background:rgb(105, 199, 11);box-shadow:none;';
            return 0;
        case ' ': document.getElementById('space').style.cssText += 'background:rgb(105, 199, 11);box-shadow:none;';
            return 0;
        case 'control': document.getElementById('ctrl').style.cssText += 'background:rgb(105, 199, 11);box-shadow:none;';
            return 0;
        case 'capslock': document.getElementById('caps').style.cssText += 'background:rgb(105, 199, 11);box-shadow:none;';
            return 0;

        case 'arrowup': document.getElementById('ArrowUp').style.cssText += 'background:rgb(105, 199, 11);box-shadow:none;';
            return 0;

        case 'arrowdown': document.getElementById('ArrowDown').style.cssText += 'background:rgb(105, 199, 11);box-shadow:none;';
            return 0;

        case 'arrowleft': document.getElementById('ArrowLeft').style.cssText += 'background:rgb(105, 199, 11);box-shadow:none;';
            return 0;
        case 'arrowright': document.getElementById('ArrowRight').style.cssText += 'background:rgb(105, 199, 11);box-shadow:none;';
            return 0;
            case 'pagedown': document.getElementById('pagedn').style.cssText += 'background:rgb(105, 199, 11);box-shadow:none; opecity:0.8;';
            return 0;
            case 'meta': document.getElementById('win').style.cssText += 'background:rgb(105, 199, 11);box-shadow:none;';
            return 0;

    }
    for (let i = 0; i < alphabate_keyName.length; i++) {
        for (let j = 0; j < alphabate_keyName[i].length; j++) {
            if (key_press.key.toLowerCase() == alphabate_keyName[i][j].toLowerCase()) {
                console.log(key_press.key + 'key tracked');
                document.getElementById(`${alphabate_keyName[i][j].toLowerCase()}`).style.cssText += 'background:rgb(105, 199, 11);box-shadow:none;';
                return 0;
            }
        }
    }
    for (let i = 0; i < control_keyName.length; i++) {
        for (let j = 0; j < control_keyName[i].length; j++) {
            if (key_press.key.toLowerCase() == control_keyName[i][j].toLowerCase()) {
                console.log(key_press.key + 'key tracked');
                document.getElementById(`${control_keyName[i][j].toLowerCase()}`).style.cssText += 'background:rgb(105, 199, 11);box-shadow:none;';
                return 0;
            }
        }
    }
    for (let i = 0; i < number_keyName.length; i++) {
        for (let j = 0; j < number_keyName[i].length; j++) {
            if (key_press.key.toLowerCase() == number_keyName[i][j].toLowerCase()) {
                console.log(key_press.key + 'key tracked');
                document.getElementById(`${number_keyName[i][j].toLowerCase()}`).style.cssText += 'background:rgb(105, 199, 11);box-shadow:none;';
                return 0;
            }
        }
    }

}

window.addEventListener('keydown', check_key);