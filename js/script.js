// load mobile data 
const loadMobilesData = () => {
    const textField = document.getElementById('text-field')
    const textFieldValue = textField.value

    const url = `https://openapi.programming-hero.com/api/phones?search=${textFieldValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))

    // clear textField
    textField.value = ''
}

loadMobilesData()

