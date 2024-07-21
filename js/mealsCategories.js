let mealsOfCategories = []

function getmealsOfCategories(items){
    $.ajax({
    type: "GET",
    url: `https://www.themealdb.com/api/json/v1/1/filter.php?c=${items}`,
    data: {},
    dataType: "json",
    success: function (mealsCategories) {
        console.log(mealsCategories);

        mealsOfCategories = mealsCategories.meals

        displaymealsCategories(mealsOfCategories)

    }
});
}
getmealsOfCategories()


function displaymealsCategories() { 

    mealscats = ``
    for (let i = 0; i < mealsOfCategories.length; i++) {
        cont += ` <div class="col-md-3">

                <div onclick ="getmealsOfCategories(${mealsOfCategories[i]})" class="categories mouse">
                <img class = "w-100" src="${mealsOfCategories[i].strCategoryThumb}" alt="food">
                <h3 class="text-white text-center">${mealsOfCategories[i].strCategory}</h3>
                <p class="text-white text-center">${mealsOfCategories[i].strCategoryDescription.split(" ").slice(0,15).join(" ")}</p>
                </div>
                
            </div>`  
        
    }
    document.querySelector("#mealsCategories").innerHTML = mealscats;
}





$("#slide i.x-icon").on("click",function(){
    let contentWidth = $("#slide .content").outerWidth()

    if($("#slide").css("left") == "0px"){

        $("#slide").animate({left : -contentWidth},1000)
        
            }else{
                $("#slide").animate({left:0},1000)
        
            }
    
})
