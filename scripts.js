const removeProduct = document.getElementsByClassName("remove_product")
console.log(removeProduct)
for (var i = 0 ; i < removeProduct.length; i++) {
    removeProduct[i].addEventListener("click", function(event) {
    event.target.parentElement.remove()
    })
    }