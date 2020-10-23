function getDogImage(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(response => {
            if (!response.ok) {
                return response.json().then(e => 
                    Promise.reject(e))
            } else {
                return response.json()
            }
        }
        )
        .then(responseJson =>
            displayImages(responseJson)
        )
        .catch(error => alert('Sorry, we could not find that dog breed')
        );
}

function onSubmit() {
    $('form').on('submit', event => {
        event.preventDefault();
        let breed = $('input[type="text"]').val();  
        getDogImage(breed);  
    });
}

function displayImages(responseJson) {
    $('.target').replaceWith(`<img src="${responseJson.message}" class="target">`);
    $('.results').removeClass('hidden');
};

function handler() {
    onSubmit();
}

handler();

