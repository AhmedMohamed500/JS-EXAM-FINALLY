
let searchName = document.querySelector(".search1");
let searchLetter = document.querySelector(".search2")
let mySearch = document.querySelector("#mySearch")





let search = [];

function getsearch(searchItem) {

    $.ajax({
        type: "GET",
        url: `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`,
        data: {},
        dataType: "json",
        success: function (food) {
            console.log(food.meals);
    
            search = food.meals

            getCotent(food.meals)
        }

        
    });

}
getsearch()




function getCotent() {
    mySearch.innerHTML = `<div class="col-md-6">
                <div class="input-group mb-2 p-3">
                    <input onkeyup="getsearch(this.value)" id="search1" class="input-style w-100" type="text" class="form-control" placeholder="Search By Name" aria-label="Username" aria-describedby="basic-addon1">
                </div>
            </div>
    
            <div class="col-md-6">
                <div class="input-group mb-2 p-3">
                    <input id="search2" class="input-style w-100" type="text" class="form-control" placeholder="Search By First Letter" aria-label="Username" aria-describedby="basic-addon1">
                </div>
    
            </div>`
}
getCotent() 



$("#slide i.x-icon").on("click",function(){
    let contentWidth = $("#slide .content").outerWidth()

    if($("#slide").css("left") == "0px"){

        $("#slide").animate({left : -contentWidth},1000)
        
            }else{
                $("#slide").animate({left:0},1000)
        
            }
    
})
