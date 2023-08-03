const filename = '../data/carousel.json'
let carousels = require(filename)
const helper = require('../helpers/helper')

function getCarousels() {
    return new Promise((resolve, reject) => {
        if (carousels.length === 0) {
            reject({
                message: 'no carousels available',
                status: 202
            })
        }
        resolve(carousels)
    })
}

function getCarousel(id) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(carousels, id)
        .then(post => resolve(post))
        .catch(err => reject(err))
    })
}

module.exports = {
    getCarousels,
    getCarousel, 
}
