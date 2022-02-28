// load mobile data 
const loadMobilesData = () => {
    const textField = document.getElementById('text-field')
    const textFieldValue = textField.value
    // clear textField
    textField.value = ''


    const url = `https://openapi.programming-hero.com/api/phones?search=${textFieldValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMobileData(data.data))

}


// display mobile data 

const displayMobileData = (mobiles) => {
    const mobileContainer = document.getElementById('mobile-container')
    mobileContainer.textContent = ''


    mobiles?.slice(0, 20).forEach(mobile => {
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
            <div class="card h-100">
                            <img src="${mobile.image}" class="card-img-top w-50" alt="...">
                            <div class="card-body">
                             <h5 class="card-title">${mobile.brand}</h5>
                              <h6>${mobile.phone_name}</h6>
                             <button onclick="loadDetails('${mobile.slug}')" class="btn btn-outline-info text-dark">See Details</button>
                            </div>
                        </div>
            `
        mobileContainer.appendChild(div)

    })

}

// load mobile details

const loadDetails = (mobileId) => {

    const url = ` https://openapi.programming-hero.com/api/phone/${mobileId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data))
}
// display details

const displayDetails = (details) => {

    const detailsContainer = document.getElementById('mobile-details')
    detailsContainer.textContent = ''
    const div = document.createElement('div')
    div.innerHTML = `
            <div class="card h-100">
            <img src="${details.data.image}" class="card-img-top w-50" alt="...">
            <div class="card-body">
            <h6 class="card-title">${details.data.releaseDate ? details.data.releaseDate : 'no realise date found'}</h6>
            <p>${details.data.mainFeatures.sensors}</P>

            <p>${details.data.others.WLAN}</P>
            <p>${details.data.others.Bluetooth}</P>
            <p>${details.data.others.GPS}</P>
            <p>${details.data.others.NFC}</P>
            <p>${details.data.others.Radio}</P>
            <p>${details.data.others.USB}</P>
           
            </div >
            </div >
    `
    detailsContainer.appendChild(div)

}
