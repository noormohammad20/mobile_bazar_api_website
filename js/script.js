// load mobile data 
const loadMobilesData = () => {
    const textField = document.getElementById('text-field')
    const textFieldValue = textField.value

    const url = `https://openapi.programming-hero.com/api/phones?search=${textFieldValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMobileData(data.data))

    // clear textField
    textField.value = ''
}

loadMobilesData()

// display mobile data 

const displayMobileData = (mobiles) => {
    const mobileContainer = document.getElementById('mobile-container')
    mobiles.forEach(mobile => {
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
    <div class="card h-100">
                    <img src="${mobile.image}" class="card-img-top w-50" alt="...">
                    <div class="card-body">
                     <h5 class="card-title">${mobile.brand}</h5>
                      <h6>${mobile.phone_name}</h6>
                     <button class="btn btn-outline-info text-dark">See Details</button>
                    </div>
                </div>
    `
        mobileContainer.appendChild(div)

    })

}