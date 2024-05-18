//Инпуты

let productType = document.getElementById("type-select")
let productName = document.getElementById("product-name")
let productCount = document.getElementById("product-count")

// Кнопки

let addBtn = document.querySelector(".add-product")
let clearBtn = document.querySelector(".clear-list")

//Список  
let productList = document.querySelector(".products-list")
let arrayProducts =[]


addBtn.addEventListener("click",addProduct)


function addProduct(){
    let productTypeValue= productType.value
    let productNameValue= productName.value
    let productCountValue = productCount.value
    
    let productItem= ""

    if (productTypeValue !=="" && productNameValue !=="" && productCountValue !==""){
        let productObj={
        productType:productTypeValue,
        productName:productNameValue,
        productCount:productCountValue
        }
        productItem = `Тип: ${productObj.productType} 
        Название: ${productObj.productName}  
        Колличество: ${productObj.productCount}`
        arrayProducts.push(productObj)
        console.log(arrayProducts); 
    }
    else {
        productItem = ""
    }
    
    
    let products =""
    

    
    arrayProducts.forEach((e)=>{
        products+= `<div class="product-item">Тип: ${e.productType} 
        Название: ${e.productName}  
        Колличество: ${e.productCount}</div>`
    })
    productList.innerHTML=products
    
    productType.Value = ""
    productName.value = ""
    productCount.value = ""

}


