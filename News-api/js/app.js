// class
const ui = new UI()
const newsAPI = new News()



// listeners
listeners()
function listeners(){
    document.querySelector('#submitBtn').addEventListener('click', search)
}



// functions
function search(e){
    e.preventDefault()
    const newsName = document.querySelector('#news-name').value
    const country = document.querySelector('#country').value
    const category = document.querySelector('#category').value

    if (newsName !== '' || country !== '' || category !=='' ) {
        newsAPI.queryAPI(newsName, country, category)
    } else {
        ui.printMessage('Please enter atleast one parameter', 'text-center alert alert-danger mt-4')
    }
}