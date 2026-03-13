// const getAllImages = document.getElementsByTagName('img')

// document.images //exists

// const cssImage = document.getElementsByClassName('css-image')

// const cssImage2 = document.getElementById('css-image')

// const image = document.querySelector('.css-image')

// const image = document.querySelectorAll('.css-image')

// const images = document.querySelectorAll('.css-image')

// images.forEach((img) => {
//   img.style.border = "4px solid red"
// })

// const images = document.querySelectorAll('img')

// const imagesUrl = [
//     // Image URL 1
//     'https://imgs.search.brave.com/OrwVsoz4QAfDn_g6Fc2wAN8p7bVkruiMYrQZ42QipG4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTk1/MDgxOTMzMy9waG90/by9uYXR1cmUtaGVh/cnQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPVl6MDZDT2dn/ejEwWUhnRU5yeDUz/Z01LdzJUVE45aVY4/Y2hScE8xZFlHUHM9',
//     // Image URL 2
//     'https://imgs.search.brave.com/CzM2zQAvdzQM3Xckoe3NfLSU1U6MKGGa7U4X8bvftfo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy90ZXh0LW5hdHVy/ZS1tZXRhbC1sZXR0/ZXJzLW9uLWEtcm9j/ay1pbi1ncmVlbi1m/b3Jlc3QtZnJlZS1w/aG90by5qcGc_dz02/MDAmcXVhbGl0eT04/MA',
//     // Image URL 3
//     'https://imgs.search.brave.com/42N4dvhIRceAXAqkrwWl20fy1xTPGyH-RYn-NBiIzUg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/dGh1bWJfYmFjay9m/aDI2MC9iYWNrZ3Jv/dW5kLzIwMjQwMzI3/L3BuZ3RyZWUtYWJz/dHJhY3QtZ3JlZW4t/bmF0dXJlLWJva2Vo/LWJhY2tncm91bmQt/c29mdC1iYWNrZ3Jv/dW5kLWJsdXItb2Yt/bmF0dXJhbC1mb2xp/YWdlLWltYWdlXzE1/NjQ2ODEzLmpwZw'
// ] 

// images[0].src = imagesUrl[0]

// Selecting elements in different ways

// images.forEach((img, index) => {

//     // Load image from array
//     if (imagesUrl[index]) {
//         img.src = imagesUrl[index]
//     }

//     // Add border so we see DOM manipulation
//     img.style.border = "4px solid red"

//     // Add click interaction
//     img.addEventListener("click", () => {
//         alert(`You clicked image ${index + 1}`)
//     })
// })

// const paragraph = document.querySelector('p')

// console.log(paragraph.innerHTML);

// paragraph.innerHTML = '<h4>Hiii</h4>'

// document.querySelector('[procodrr="title"]')

// Select the main roadmap image
const heroImage = document.querySelector('#css-image');

// 1. Get the current title
const oldTitle = heroImage.getAttribute('title');
console.log("Old Title:", oldTitle);

// 2. Set a new source and title
heroImage.setAttribute('src', 'https://placeholder.com/600x300');
heroImage.setAttribute('title', '2026 Updated Roadmap');