

let Categories = [];

function getCategories() {

    $.ajax({
        type: "GET",
        url: `https://www.themealdb.com/api/json/v1/1/categories.php`,
        data: {},
        dataType: "json",
        success: function (categ) {
            console.log(categ.categories);
    
            Categories = categ.categories.slice(0,20)

            displayCategories()
        }
            

    });
}
getCategories()

function displayCategories() { 

    cont = ``
    for (let i = 0; i < Categories.length; i++) {
        cont += ` <div class="col-md-3">

                <div onclick ="getCategories()" class="categories mouse">
                <img class = "w-100" src="${Categories[i].strCategoryThumb}" alt="food">
                <h3 class="text-white text-center">${Categories[i].strCategory}</h3>
                <p class="text-white text-center">${Categories[i].strCategoryDescription.split(" ").slice(0,15).join(" ")}</p>
                </div>
                
            </div>`
        
    }
    document.querySelector("#myCategories").innerHTML = cont;
}


$("#slide i.x-icon").on("click",function(){
    let contentWidth = $("#slide .content").outerWidth()

    if($("#slide").css("left") == "0px"){

        $("#slide").animate({left : -contentWidth},1000)
        
            }else{
                $("#slide").animate({left:0},1000)
        
            }
    
})
