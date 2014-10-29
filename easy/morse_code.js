// https://www.codeeval.com/open_challenges/116/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line === '') {
        return;
    }
    console.log(morse_code(line));
});

function morse_code(string) {
    var morseMap = {
        '.-':       'A',
        '-...':     'B',
        '-.-.':     'C',
        '-..':      'D',
        '.':        'E',
        '..-.':     'F',
        '--.':      'G',
        '....':     'H',
        '..':       'I',
        '.---':     'J',
        '-.-':      'K',
        '.-..':     'L',
        '--':       'M',
        '-.':       'N',
        '---':      'O',
        '.--.':     'P',
        '--.-':     'Q',
        '.-.':      'R',
        '...':      'S',
        '-':        'T',
        '..-':      'U',
        '...-':     'V',
        '.--':      'W',
        '-..-':     'X',
        '-.--':     'Y',
        '--..':     'Z',
        '.----':    '1',
        '..---':    '2',
        '...--':    '3',
        '....-':    '4',
        '.....':    '5',
        '-....':    '6',
        '--...':    '7',
        '---..':    '8',
        '----.':    '9',
        '-----':    '0'
    };
    return string.split(' ').map(function(item) {
        if (item === '') {
            return ' ';
        }
        return morseMap[item];
    }).join('');
}

