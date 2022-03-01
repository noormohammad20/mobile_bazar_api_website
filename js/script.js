document.getElementById('error').style.display = 'none'
// load mobile data 
const loadMobilesData = () => {
    document.getElementById('mobile-container').innerHTML = ''
    document.getElementById('mobile-details').innerHTML = ''
    const textField = document.getElementById('text-field')
    const textFieldValue = textField.value
    // clear textField
    textField.value = ''
    const url = `https://openapi.programming-hero.com/api/phones?search=${textFieldValue}`
    if (textFieldValue === 'oppo' || textFieldValue === 'iphone' || textFieldValue === 'samsung' || textFieldValue === 'huawei') {
        fetch(url)

            .then(res => res.json())
            .then(data => displayMobileData(data.data))
        document.getElementById('error').style.display = 'none'
    }
    else {
        document.getElementById('error').style.display = 'block'

    }
}

// display mobile data 

const displayMobileData = (mobiles) => {
    const mobileContainer = document.getElementById('mobile-container')
    mobileContainer.textContent = ''

    mobiles.slice(0, 20).forEach(mobile => {
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
            <div class="card h-100">
            <img src="${mobile.image}" class="card-img-top w-50" alt="...">
            <div class="card-body">
            <h5 class="card-title">Brand: ${mobile.brand}</h5>
            <h6>Name: ${mobile.phone_name}</h6>
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
            <img src="${details.data.image}" class="card-img-top w-25" alt="...">
            </br>
            <div class="card-body">
            <h3 class="card-title">Release Date: ${details.data.releaseDate ? details.data.releaseDate : 'no realise date found'}</h3>
            <h5>Main Features</h5>
            <hr>
            <p>Storage: ${details.data.mainFeatures.storage}</p>
            <p>Display Size: ${details.data.mainFeatures.displaySize}</p>
            <p>Chipset: ${details.data.mainFeatures.chipSet}</p>
            <p>Memory: ${details.data.mainFeatures.memory}</p>
              <p>sensors: ${details.data.mainFeatures.sensors ? details.data.mainFeatures.sensors : 'no data found'}</P>
             <h5>OTHERS</h5>
             <hr>
           
             <p>WLAN:${details?.data?.others?.WLAN ? details.data.others.WLAN : 'no data found'}</P>
            <p>Bluetooth: ${details?.data?.others?.Bluetooth ? details.data.others.Bluetooth : 'no data found'}</P>
            <p>GPS: ${details?.data?.others?.GPS ? details.data.others.GPS : 'no data found'}</P>
            <p>NFC: ${details?.data?.others?.NFC ? details.data.others.NFC : 'no data found'}</P>
            <p>Radio: ${details?.data?.others?.Radio ? details.data.others.Radio : 'no data found'}</P>
            <p>USB: ${details?.data?.others?.USB ? details.data.others.USB : 'no data found'}</P>
            </div >
            </div >
    `
    detailsContainer.appendChild(div)
}
