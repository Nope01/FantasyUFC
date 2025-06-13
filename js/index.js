async function displayFighter(buttonId, outputId) {
    const button = document.getElementById(buttonId);
    const output = document.getElementById(outputId);

    if (!button || !output) {
        console.error(`Button or output element not found`);
        return;
    }

    button.addEventListener('click', async () => {
        //const fighter = await fetchData("http://localhost:8080/ufc/fighter/1");
        //const fighters = await fetchData("http://localhost:8080/ufc/fighters");

        //console.log(fighter.name);
        output.textContent = "Bingus";

        //console.log(fighters[0]);
    });
}

async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        let json = await response.json();
        console.log(json);
        return json;

    } catch (error) {
        console.error(error);
    }
}

function validateFighters(fighters) {
    if (!Array.isArray(fighters)) {
        return { error: "Invalid input: must be a non-empty array" };
    }

    return fighters;
}

function renderFighters(fighters) {
    const container = document.getElementById('fighters-container');
    container.innerHTML = fighters
        .map(fighter => `
      <div class="fighter-card">
        <h3>${fighter.name}</h3>
        <p>Record: ${fighter.wins}-${fighter.losses}</p>
      </div>
    `)
        .join('');
}