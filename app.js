function getDogImage(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images`)
        .then(response => response.json())
        .then(responseJson => displayImages(responseJson))
        .catch(error => alert('Something went wrong. Try again later'));
}

function onSubmit() {
    $('form').on('submit', event => {
        event.preventDefault();
        let breed = $('input[type="text"]').val();  
        console.log(breed);
        getDogImage(breed);  
    });
}

function displayImages(responseJson) {
    console.log(responseJson);
    $('#target').append(`<img src="${responseJson.message[0]}" class="results-img">`);
    $('.results').removeClass('hidden');
};

function handler() {
    onSubmit();
}

handler();

