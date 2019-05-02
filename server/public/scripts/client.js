$(document).ready(onReady);

function onReady() {
    getRestaurants();
    $('.js-btn-addRestaurant').on('click', addRestaurant);
    $('.container').on('click', '.js-btn-remove', deleteRestaurant);
}

function addRestaurant() {
    const name = $('#name').val();
    const address = $('#address').val();
    const bestfood = $('#bestfood').val();

    const restaurantObject = {
        name,
        address,
        bestfood
    }

    postRestaurant(restaurantObject);
}

function postRestaurant(restaurantObject) {
    $.ajax({
        type: 'POST',
        url: '/restaurants',
        data: restaurantObject
    }).then(function(response) {
        getRestaurants();
    })
}

function getRestaurants() {
    $.ajax({
        type: 'GET',
        url: '/restaurants'
    }).then(function(arrayFromDatabase) {
        render(arrayFromDatabase);
    });
}

function deleteRestaurant() {
    const $restaurantContr = $(this).parent();
    const restaurantId = $restaurantContr.data('id');
    console.log(restaurantId);

    $.ajax({
        type: 'DELETE',
        url: `/restaurants/delete/${restaurantId}`,
    })
    .then(function(response) {
        getRestaurants();
    });
}

function render(arrayFromDatabase) {
    $('.container').empty();

    for (let restaurant of arrayFromDatabase) {
        $('.container').append(`
            <div data-id="${restaurant.id}">
                <h2>${restaurant.name}</h2>
                <h6>${restaurant.address}</h6>
                <p>${restaurant.bestfood}</p>
                <button class="js-btn-remove">Remove</button>
            </div>
        `);
    }
}