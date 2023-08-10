const asciiOutput = document.getElementById("asciiOutput");
const textInput = document.getElementById("textInput");
const boldButton = document.getElementById("boldButton");
const italicButton = document.getElementById("italicButton");

let isBold = false;
let isItalic = false;

function convertToAscii(text) {
    const letters = {
        'a': ['   ##   ', '  #  #  ', ' #    # ', '#      #', '########', '#      #', '#      #'],
        'b': ['#####   ', '#     # ', '######  ', '#     # ', '#     # ', '#     # ', '#####   '],
        'c': ['  ###   ', ' #      ', '#       ', '#       ', '#       ', ' #      ', '  ###   '],
        'd': ['#####   ', '#     # ', '#      #', '#      #', '#      #', '#     # ', '#####   '],
        'e': ['######  ', '#       ', '#####   ', '#       ', '#       ', '#       ', '######  '],
        'f': ['######  ', '#       ', '#####   ', '#       ', '#       ', '#       ', '#       '],
        'g': ['  ###   ', ' #      ', '#   ####', '#      #', ' #    # ', '  #   # ', '   ###  '],
        'h': ['#     # ', '#     # ', '####### ', '#     # ', '#     # ', '#     # ', '#     # '],
        'i': ['  ###   ', '   #    ', '   #    ', '   #    ', '   #    ', '   #    ', '  ###   '],
        'j': ['   ###  ', '    #   ', '    #   ', '    #   ', '    #   ', '#   #   ', ' ##     '],
        'k': ['#     # ', '#   #   ', '###     ', '#   #   ', '#    #  ', '#     # ', '#      #'],
        'l': ['#       ', '#       ', '#       ', '#       ', '#       ', '#       ', '####### '],
        'm': ['#       #', '# #   # #', '#  # #  #', '#   #   #', '#       #', '#       #', '#       #'],
        'n': ['#       #', '# #     ', '#   #   ', '#    #  ', '#     # ', '#      #', '#       #'],
        'o': ['  ###   ', ' #   #  ', '#     # ', '#     # ', '#     # ', ' #   #  ', '  ###   '],
        'p': ['#####   ', '#     # ', '#     # ', '#####   ', '#       ', '#       ', '#       '],
        'q': ['  ###   ', ' #   #  ', '#     # ', '#     # ', ' #   #  ', '  #  #  ', '   ## # '],
        'r': ['#####   ', '#     # ', '#####   ', '#   #   ', '#    #  ', '#     # ', '#      #'],
        's': ['  ###   ', ' #      ', '  ###   ', '     ###', '       #', ' #     #', '  ###   '],
        't': ['####### ', '   #    ', '   #    ', '   #    ', '   #    ', '   #    ', '   #    '],
        'u': ['#       #', '#       #', '#       #', '#       #', '#       #', ' #     #', '  ###  #'],
        'v': ['#       #', '#       #', ' #     # ', '  #   #  ', '   # #   ', '    #    ', '         '],
        'w': ['#       #', '#       #', '#   #   #', '#  # #  #', '#   #   #', '#       #', '#       #'],
        'x': ['#       #', ' #     # ', '  #   #  ', '   # #   ', '   # #   ', '  #   #  ', '#       #'],
        'y': ['#       #', ' #     # ', '  #   #  ', '   # #   ', '    #    ', '    #    ', '    #    '],
        'z': ['####### ', '     #  ', '    #   ', '   #    ', '  #     ', ' #      ', '####### '],
    };

    const lines = new Array(7).fill('');

    for (let i = 0; i < text.length; i++) {
        const char = text[i].toLowerCase();
        if (letters[char]) {
            for (let j = 0; j < 7; j++) {
                lines[j] += letters[char][j] + ' ';
            }
            lines.forEach((line, index, arr) => {
                arr[index] = line.substring(0, line.length - 1); // Remove the trailing space
            });
        } else {
            for (let j = 0; j < 7; j++) {
                lines[j] += '     '; // Add spaces for missing letters
            }
        }
    }

    let asciiText = lines.join('\n');

    if (isBold) {
        asciiText = '<strong>' + asciiText + '</strong>';
    }
    if (isItalic) {
        asciiText = '<em>' + asciiText + '</em>';
    }

    asciiOutput.innerHTML = asciiText;
}

textInput.addEventListener("input", () => {
    const userInput = textInput.value;
    convertToAscii(userInput);
});

boldButton.addEventListener("click", () => {
    isBold = !isBold;
    boldButton.classList.toggle('active', isBold);
    const userInput = textInput.value;
    convertToAscii(userInput);
});

italicButton.addEventListener("click", () => {
    isItalic = !isItalic;
    italicButton.classList.toggle('active', isItalic);
    const userInput = textInput.value;
    convertToAscii(userInput);
});