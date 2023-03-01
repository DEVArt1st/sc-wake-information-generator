// SKU GENERATOR
const skuNumberField = document.getElementById("skuNumberField");
const updateSkuBtn = document.getElementById("skuNumberFieldSubmitBtn");
const clearSkuInputFieldBtn = document.getElementById("skuNumberFieldClear");
const skuValue = document.getElementsByClassName("sku-value");

// TITLE GENERATOR
const titleTextInputField = document.getElementById("titleTextField");
const updateTitleBtn = document.getElementById("titleTextFieldSubmitBtn");
const clearTitleFieldBtn = document.getElementById("titleTextFieldClear");
const titleFill = document.getElementsByClassName("title-fill");


//PRODUCT ID GENERATOR (SEA DOO)
const seaDooTextInputField = document.getElementById("seaDooTextField");
const updateSeaDooBtn = document.getElementById("seaDooFieldSubmitBtn");
const clearSeaDooBtn = document.getElementById("seaDooFieldClear");
const seaDooFill = document.getElementsByClassName("sea-doo-variant-id-fill");

// TITLE GENERATOR
function clearTitleFieldInput(){
    titleTextInputField.value = "";
}

function updateTitle(){
    for(const titles of titleFill){
        titles.innerHTML = titleTextInputField.value;
    }
}

// SKU GENERATOR
function clearSkuFieldInput(){
    skuNumberField.value = "";
}

function updateSku(){
    for(const skus of skuValue){
        skus.innerHTML = skuNumberField.value;
    }
}


// SEA DOO PRODUCT ID GENERATOR
function clearSeaDooFieldInput(){
    seaDooTextInputField.value = "";
}

function updateSeaDoo(){
    for(const seaDoo of seaDooFill){
        seaDoo.innerHTML = seaDooTextInputField.value;
    }
}


// TITLE FIELDS EVENTS
updateTitleBtn.addEventListener("click", updateTitle);
clearTitleFieldBtn.addEventListener("click", clearTitleFieldInput);

// SKU FIELDS EVENTS
clearSkuInputFieldBtn.addEventListener("click", clearSkuFieldInput);
updateSkuBtn.addEventListener("click", updateSku);

// SEA DOO PRODUCT ID EVENTS
clearSeaDooBtn.addEventListener("click", clearSeaDooFieldInput);
updateSeaDooBtn.addEventListener("click", updateSeaDoo);