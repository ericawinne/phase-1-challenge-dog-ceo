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
        images.message.forEach(element => {
            const dogImagesElement = document.createElement("img")
            dogImagesElement.src=element
            dogImages.append(dogImagesElement)
        })
    })
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(response => response.json())
    .then(breed => {
        const dogBreeds = document.querySelector("#dog-breeds")
        const dogarray = Object.keys(breed.message)
        const newArray = dogarray.forEach(element => {
            const dogBreedsElement = document.createElement("li")
            const anchor = document.createElement('a')
            anchor.href = '#'
            anchor.id = `${element}`
            anchor.innerHTML = element
            dogBreedsElement.append(anchor)
            dogBreeds.append(dogBreedsElement)
            anchor.addEventListener('click', () => {
                anchor.style.color = "green"
            })
        })
        const dropdown = document.getElementById('breed-dropdown')
        dropdown.addEventListener('change', () => {
            document.querySelector('ul').replaceWith(dogBreeds)
            // Seperate the breed by first letter, so in the dropdown whatever
            // letter is selected it will only display dogbreeds that begin with 
            // that letter
            if (dropdown.value === 'a'){
                const filtered = dogarray.filter(dog => {
                    return dog.startsWith('a')
                })
                const newUl = document.createElement('ul')
                filtered.forEach(element => {
                    const dogBreedsElement = document.createElement("li")
                    const anchor = document.createElement('a')
                    anchor.href = '#'
                    anchor.id = `${element}`
                    anchor.innerHTML = element
                    dogBreedsElement.append(anchor)
                    anchor.addEventListener('click', () => {
                        anchor.style.color = "green"
                    })
                    newUl.append(dogBreedsElement)
                    dogBreeds.replaceWith(newUl)
                })
            } else if (dropdown.value === 'b') {
                const filtered = dogarray.filter(dog => {
                    return dog.startsWith('b')
                })
                    const newUl = document.createElement('ul')
                    filtered.forEach(element => {
                        const dogBreedsElement = document.createElement("li")
                        const anchor = document.createElement('b')
                        anchor.href = '#'
                        anchor.id = `${element}`
                        anchor.innerHTML = element
                        dogBreedsElement.append(anchor)
                        anchor.addEventListener('click', () => {
                            anchor.style.color = "green"
                        })
                        newUl.append(dogBreedsElement)
                        dogBreeds.replaceWith(newUl)
                    })
            } else if (dropdown.value === 'c') {
                const filtered = dogarray.filter(dog => {
                    return dog.startsWith('c')
                })
                    const newUl = document.createElement('ul')
                    filtered.forEach(element => {
                        const dogBreedsElement = document.createElement("li")
                        const anchor = document.createElement('c')
                        anchor.href = '#'
                        anchor.id = `${element}`
                        anchor.innerHTML = element
                        dogBreedsElement.append(anchor)
                        anchor.addEventListener('click', () => {
                            anchor.style.color = "green"
                        })
                        newUl.append(dogBreedsElement)
                        dogBreeds.replaceWith(newUl)
                    })
            } else if (dropdown.value === 'd') {
                const filtered = dogarray.filter(dog => {
                    return dog.startsWith('d')
                })
                    const newUl = document.createElement('ul')
                    filtered.forEach(element => {
                        const dogBreedsElement = document.createElement("li")
                        const anchor = document.createElement('d')
                        anchor.href = '#'
                        anchor.id = `${element}`
                        anchor.innerHTML = element
                        dogBreedsElement.append(anchor)
                        anchor.addEventListener('click', () => {
                            anchor.style.color = "green"
                        })
                        newUl.append(dogBreedsElement)
                        dogBreeds.replaceWith(newUl)
                    })
            } else {
                
            }
            
        })
    })
 //pull breeds from an object and get into a form thats easy to itterate

}
document.addEventListener('DOMContentLoaded', init);