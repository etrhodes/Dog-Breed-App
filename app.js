function getDogImage(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(response => {
            if (!response.ok) {
                console.error(response.message)
            } else {
            response.json()
        }
    })
        .then(responseJson =>
            displayImages(responseJson)
        )
        .catch(error => alert('Something went wrong. Try again later')
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
    $('#target').replaceWith(`<img src="${responseJson.message}" class="results-img">`);
    $('.results').removeClass('hidden');
};

function handler() {
    onSubmit();
}

handler();

