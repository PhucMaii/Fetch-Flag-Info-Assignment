async function fetchMeFlagInfo(){
    let data = await fetch('https://restcountries.com/v3.1/all');
    let flagData = await data.json();
    //let finalOutputArray = flagData.data;

    createUI(flagData);
}

function createUI(flagData){
    let container = document.querySelector('#main-container');

    for (let i = 0; i < flagData.length; i++){

        //make container for each country
        let cardElement = document.createElement('div');
        cardElement.classList.add('card');

        // create flag image
        let img = document.createElement('img');
        img.classList.add('flag');
        img.src = flagData[i].flags.png;

        //create content info
        let contentContainer = document.createElement('div');
        contentContainer.classList.add('content');
        
        // create flag name
        let flagName = document.createElement('p');
        flagName.textContent = flagData[i].name.official;

        // create population
        let population = document.createElement('p');
        population.textContent = flagData[i].population;
        population.classList.add('population');



        contentContainer.appendChild(flagName);
        contentContainer.appendChild(population);


        cardElement.appendChild(img);
        cardElement.appendChild(contentContainer);
        container.appendChild(cardElement);



    }




}

fetchMeFlagInfo();