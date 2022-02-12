const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=f1c4bdeedf394301952409d27d58ba27";

const message = document.querySelector(".gamelist");

async function getGames() {
  try {
    const response = await fetch(url);

    const data = await response.json();

    const results = data.results;

    message.innerHTML = "";

    for (let i = 0; i < results.length; i++) {
      const resultsNames = results[i].name;

      const resultsRatings = results[i].rating;

      const resultsTags = results[i].tags.length;

      if (i === 8) {
        break;
      }

      message.innerHTML += `
        <div class="result">
        <p>Name: ${resultsNames}</p>
        <p>Rating: ${resultsRatings}</p>
        <p>Number of tags: ${resultsTags}</p>
        </div>
        `;
    }
  } catch (error) {
    console.log("An error occured");
    message.innerHTML = displayError("An error occured when calling the API");
  }
}

getGames();
