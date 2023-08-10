$(document).ready(function() {
    const generateBtn = $("#generateBtn");
    const jokeDisplay = $("#jokeDisplay");
    const shareBtn = $("#shareBtn");

    generateBtn.on("click", generateJoke);

    function showJokeDisplay(joke) {
        jokeDisplay.empty();
        const jokeText = $("<p>").text(joke);
        jokeDisplay.append(jokeText);
        jokeDisplay.show();
        shareBtn.prop("disabled", false);
    }

    async function generateJoke() {
        const url = "https://v2.jokeapi.dev/joke/Dark?type=single";

        try {
            const response = await fetch(url);
            const result = await response.json();

            if (!result.error && result.joke) {
                showJokeDisplay(result.joke);
            } else {
                jokeDisplay.text("No jokes available.");
                jokeDisplay.show();
                shareBtn.prop("disabled", true);
            }
        } catch (error) {
            console.error(error);
            jokeDisplay.text("Failed to fetch jokes.");
            jokeDisplay.show();
            shareBtn.prop("disabled", true);
        }
    }

    shareBtn.on("click", function() {
        const jokeText = jokeDisplay.find("p").text();
        copyToClipboard(jokeText);
        shareBtn.text("Joke Copied!");
        setTimeout(function() {
            shareBtn.text("Share Joke");
        }, 2000);
    });

    function copyToClipboard(text) {
        const tempElement = document.createElement("textarea");
        tempElement.value = text;
        document.body.appendChild(tempElement);
        tempElement.select();
        document.execCommand("copy");
        document.body.removeChild(tempElement);
    }
});
