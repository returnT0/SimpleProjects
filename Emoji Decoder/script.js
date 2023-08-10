const emojiMap = {
    '😀': 'A', '😁': 'B', '😂': 'C', '🤣': 'D', '😃': 'E',
    '😄': 'F', '😅': 'G', '😆': 'H', '😇': 'I', '😈': 'J',
    '😉': 'K', '😊': 'L', '😋': 'M', '😌': 'N', '😍': 'O',
    '😎': 'P', '😏': 'Q', '😐': 'R', '😑': 'S', '😒': 'T',
    '😓': 'U', '😔': 'V', '😕': 'W', '😖': 'X', '😗': 'Y',
    '😘': 'Z',
};

const emojiInput = document.getElementById('emojiInput');
const decodeButton = document.getElementById('decodeButton');
const decodedMessage = document.getElementById('decodedMessage');
const errorMessage = document.getElementById('errorMessage');
const warningMessage = document.getElementById('warningMessage');

decodeButton.addEventListener('click', () => {
    errorMessage.textContent = '';
    decodedMessage.textContent = '';
    warningMessage.textContent = '';

    const inputText = emojiInput.value.trim();
    if (!inputText) {
        warningMessage.textContent = 'Please enter an emoji string';
        return;
    }

    if (!isValidEmojiInput(inputText)) {
        warningMessage.textContent = 'Invalid input. Please use emojis only.';
        return;
    }

    const decodedText = decodeEmojiString(inputText);
    if (decodedText === '') {
        errorMessage.textContent = 'Invalid input. Please use emojis only.';
    } else {
        decodedMessage.textContent = decodedText;
    }
});

function isValidEmojiInput(text) {
    const emojiRegex = /(?:[\u2700-\u27BF]|(?:\uD83C[\uDDE6-\uDDE9\uDDF2\uDDF3\uDDF4\uDDF5\uDDF6\uDDF7\uDDF8\uDDF9\uDDFA\uDDFB\uDDFC\uDDFD\uDDFE\uDDFF])|\uD83D[\uDC00-\uDE4F\uDFFD])/g;

    return emojiRegex.test(text);
}

function decodeEmojiString(emojiString) {
    const emojis = emojiString.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
    let decodedText = '';

    for (const emoji of emojis) {
        const mappedChar = emojiMap[emoji];
        if (mappedChar !== undefined) {
            decodedText += mappedChar;
        } else {
            decodedText += emoji; // Keep the emoji if not in the mapping
        }
    }

    return decodedText;
}