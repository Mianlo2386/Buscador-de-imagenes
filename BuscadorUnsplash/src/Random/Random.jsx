/* const accesKey = ('9NQwitXw0qC17sFzywcOn6vsSMj0TPvaGO5CEchO7I4');
const endPoint = 'https://api.unsplash.com/search/photos';

async function getImages(query){
     let response = await fetch(endPoint + '?query=' + query + 
    '&client_id=' + accesKey)
    let jsonResponse = await response.json();
    let imagesList = await jsonResponse.results;
    }



function createImages(imagesList){
    for(let i = 0 ; i < imagesList.length ; i++ ) {
    const image = document.createElement('img');
    image.src = imagesList[i].urls.thumb;
    document.body.appendChild(image);
    }
    }

    createImages(imagesList);

    getImages('random'); */