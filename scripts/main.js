const skuNumberField = document.getElementById("skuNumberField");
const updateSkuBtn = document.getElementById("skuNumberFieldSubmitBtn");
const clearSkuInputFieldBtn = document.getElementById("skuNumberFieldClear");
const skuValue = document.getElementsByClassName("sku-value");


const titleTextInputField = document.getElementById("titleTextField");
const updateTitleBtn = document.getElementById("titleTextFieldSubmitBtn");
const clearTitleFieldBtn = document.getElementById("titleTextFieldClear");
const titleFill = document.getElementsByClassName("title-fill");

function clearTitleFieldInput(){
    titleTextInputField.value = "";
}

function updateTitle(){
    for(const titles of titleFill){
        titles.innerHTML = titleTextInputField.value;
    }
}

function clearSkuFieldInput(){
    skuNumberField.value = "";
}

function updateSku(){
    for(const skus of skuValue){
        skus.innerHTML = skuNumberField.value;
    }
}


// TITLE FIELDS
updateTitleBtn.addEventListener("click", updateTitle);
clearTitleFieldBtn.addEventListener("click", clearTitleFieldInput);

// SKU FIELDS
clearSkuInputFieldBtn.addEventListener("click", clearSkuFieldInput);
updateSkuBtn.addEventListener("click", updateSku);