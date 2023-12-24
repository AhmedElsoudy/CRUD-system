
var siteNameInput = document.getElementById('siteName')
var siteUrlInput = document.getElementById('siteUrl')

var sites = []

if(localStorage.getItem('websites') != null){
    sites = JSON.parse(localStorage.getItem('websites'))
    displaySites()
}
function getInputValue(){
    if(validationEmail()){
      var site = {
        name: siteNameInput.value,
        url: siteUrlInput.value
    }
    sites.push(site)
    localStorage.setItem('websites',JSON.stringify(sites))
    displaySites()
    clearAll()
    }
}
function displaySites(){
    var cartona = ''
    for(var i=0; i<sites.length; i++){
        cartona +=`
        <div class="col-md-6 col-lg-4 ">
          <div class="inner g-4 text-center rounded-4 py-3 my-3">
            <span class="my-2 p-2 rounded-2 fw-bolder">${i+1}</span>
            <h3 class="my-3 fw-bold">${sites[i].name}</h3>
            <button class="btn btn-danger m-2" onclick="deleteSite(${i})" >
              <i class="fa-solid fa-trash-can fa-fw"></i>
            </button>
            <a href="${sites[i].url}" target="_blank" type="button" class="btn btn-go m-2"><i class="fa-solid fa-eye fa-fw"></i></a>
            <button class="btn btn-update m-2" onclick="readyUpdate(${i})" >
            <i class="fa-regular fa-pen-to-square fa-fw text-white"></i>
            </button>
          </div>
        </div>
        `
    }
    document.getElementById('rowId').innerHTML = cartona
}
function deleteSite(index){
    sites.splice(index,1)
    localStorage.setItem('websites',JSON.stringify(sites))
    displaySites()

}
function searchSite(value){
    
    var cartona = ''
    for(var i =0; i<sites.length; i++){
        if(sites[i].name.toLowerCase().includes(value.toLowerCase())){
            cartona +=`
            <div class="col-md-6 col-lg-4 ">
            <div class="inner g-4 text-center rounded-4 py-3 my-3">
              <span class="my-2 p-2 rounded-2 fw-bolder">${i+1}</span>
              <h3 class="my-3 fw-bold">${sites[i].name}</h3>
              <button class="btn btn-danger m-2" onclick="deleteSite(${i})" >
                <i class="fa-solid fa-trash-can fa-fw"></i>
              </button>
              <a href="${sites[i].url}" target="_blank" type="button" class="btn btn-go m-2"><i class="fa-solid fa-eye fa-fw"></i></a>
              <button class="btn btn-update m-2" onclick="readyUpdate(${i})" >
              <i class="fa-regular fa-pen-to-square fa-fw text-white"></i>
              </button>
            </div>
          </div>
          `
        }
    }
    document.getElementById('rowId').innerHTML = cartona
}

var updateIndex = 0
function readyUpdate(index){
  updateIndex = index
  siteNameInput.value = sites[index].name
  siteUrlInput.value = sites[index].url
  window.scrollTo(0,0)
  document.getElementById('updatebtn').style.display = 'block'
  document.getElementById('addbtn').style.display = 'none'
}

function updateSite(){
  document.getElementById('updatebtn').style.display = 'none'
  document.getElementById('addbtn').style.display = 'block'
  sites[updateIndex].name = siteNameInput.value
  sites[updateIndex].url = siteUrlInput.value
  localStorage.setItem('websites',JSON.stringify(sites))
  displaySites()
  clearAll()
}

function clearAll(){
  siteNameInput.value = ""
  siteUrlInput.value = ""
}


var warningInput = document.getElementById('warning')

function validationEmail(){
  var regexEmail = /^(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?$/
  var testEmail = siteUrlInput.value
  if(regexEmail.test(testEmail)){
    siteUrlInput.classList.add("is-valid")
    siteUrlInput.classList.remove("is-invalid")
      warningInput.classList.add('d-none')
    return true
    
  }else{
    siteUrlInput.classList.add("is-invalid")
    siteUrlInput.classList.remove("is-valid")
    if(siteUrlInput.value != ""){
      warningInput.classList.remove('d-none')
    }
    
    return false
  }
}

/** 
 * 
 * 
 * 
 * 
 * 
 * 
 *  

  if(regexEmail.test(testEmail)){
    siteUrlInput.classList.add("is-valid")
    siteUrlInput.classList.remove("is-invalid")
    return true
  }else{
    siteUrlInput.classList.add("is-invalid")
    siteUrlInput.classList.remove("is-valid")
    return false
  }
 * 
 * 
 * 
 * */ 