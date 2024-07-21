
let mealDescription = [];

function getMealDescription(ID){
    $.ajax({
    type: "GET",
    url: `https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${ID}`,
    data: {},
    dataType: "json",
    success: function (mealdesc) {
        console.log(mealdesc.meals);

        mealDescription = mealdesc.meals

        displayMealDescription()
        
    }
});
}
getMealDescription()

function displayMealDescription(){

    mealdesc = ``


    for (let i = 0; i <mealDescription.length; i++) {
        
        mealdesc += `<div class="col-md-6">

                <div class="img-content">
                    <img src="${mealDescription[i].strMealThumb}" alt="description" class="w-100">
                    <h3>${mealDescription[i].strCategory}</h3>
                </div>

            </div>

            <div class="col-md-6">

                <div class="meal-description">
                    <h3>Instruction</h3>
                    <p>${mealDescription[i].strInstructions}</p>
                </div>
                <h3>Area : ${mealDescription[i].strArea}</h3>
                <h3>Category : </h3>
                <h3>Recipes :</h3>
                    
                <ul class="list-unstyled d-flex flex-wrap w-100">
                    <li class = "bg-success p-1 rounded-2">${mealDescription[i].strMeasure1}</li>
                    <li class = "bg-success p-1 rounded-2">${mealDescription[i].strMeasure2}</li>
                    <li class = "bg-success p-1 rounded-2">${mealDescription[i].strMeasure3}</li>
                    <li class = "bg-success p-1 rounded-2">${mealDescription[i].strMeasure4}</li>
                    <li class = "bg-success p-1 rounded-2">${mealDescription[i].strMeasure5}</li>
                    <li class = "bg-success p-1 rounded-2">${mealDescription[i].strMeasure6}</li>
                    <li class = "bg-success p-1 rounded-2">${mealDescription[i].strMeasure7}</li>
                    <li class = "bg-success p-1 rounded-2">${mealDescription[i].strMeasure8}</li>
                    <li class = "bg-success p-1 rounded-2">${mealDescription[i].strMeasure9}</li>
                    <li class = "bg-success p-1 rounded-2">${mealDescription[i].strMeasure10}</li>
                    <li class = "bg-success p-1 rounded-2">${mealDescription[i].strMeasure11}</li>
                    <li class = "bg-success p-1 rounded-2">${mealDescription[i].strMeasure12}</li>
                    <li class = "bg-success p-1 rounded-2">${mealDescription[i].strMeasure13}</li>
                    <li class = "bg-success p-1 rounded-2">${mealDescription[i].strMeasure14}</li>
                    <li class = "bg-success p-1 rounded-2">${mealDescription[i].strMeasure15}</li>
                    
                </ul>
    
                <h3>Tags :</h3>
                <ul class="list-unstyled d-flex flex-wrap">
                    <li class="bg-white text-danger m-2 p-1">${mealDescription[i].strTags}</li>
                </ul> 

                <div class="buttons my-1">
                    <button class="btn btn-success"><a href="${mealDescription[i].strYoutube}">Source</a></button>
                    <button class="btn btn-danger"><a href="${mealDescription[i].strYoutube}">Youtube</a></button>
                </div>

            </div>`
        
    }
    document.querySelector("#myMealDescription").innerHTML = mealdesc;
}



$("#slide i.x-icon").on("click",function(){
    let contentWidth = $("#slide .content").outerWidth()

    if($("#slide").css("left") == "0px"){

        $("#slide").animate({left : -contentWidth},1000)
        
            }else{
                $("#slide").animate({left:0},1000)
        
            }
    
})
