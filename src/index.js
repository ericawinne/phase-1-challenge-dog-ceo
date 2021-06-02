console.log('%c HI', 'color: firebrick')
//once the page loads, fetch images from URL
//convert the response as JSON
//pull images from an array and add them to the dom through image elements 

const init = () => {
const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
    fetch(imgUrl)
    .then(response => response.json())
    .then(images => {
        const dogImages = document.querySelector("#dog-image-container")
 //for each image in json url we want to set to dogImageElement and then append
 //to our element         
        console.log(images)
        images.message.forEach(element => {
            const dogImagesElement = document.createElement("img")
            dogImagesElement.src=element
            console.log(dogImagesElement)
            dogImages.append(dogImagesElement)
        })
    })
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
        fetch(breedUrl)
        .then(response => response.json())
        .then(breed => {
            const dogBreeds = document.querySelector("#dog-breeds")
    const dogarray = Object.keys(breed.message)
    dogarray.forEach(element => {
        const dogBreedsElement = document.createElement("li")
            dogBreedsElement.innerHTML=element
            console.log(dogBreedsElement)
            dogBreeds.append(dogBreedsElement)
    })
    console.log(dogarray)

        
        })
 //pull breeds from an object and get into a form thats easy to itterate
}

document.addEventListener('DOMContentLoaded', init);



