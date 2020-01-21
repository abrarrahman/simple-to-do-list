//check off specific todos
$("ul").on("click", "li", function(){
    $(this).toggleClass("checked");
});
//click on span to delete todo
$("ul").on("click", "span", function(event){
    $(this).parent().slideUp(function(){
        $(this).remove();
    })
    event.stopPropagation();
})
//text input to add new todos
$("input[type='text']").on("keypress",function(event){
    if(event.which === 13)
    {
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append('<li><span><i class="fas fa-trash"></i></span>'+todoText+'</li>');
        
    }
})

$(".fa-edit").on("click",function(){
    $("input").slideToggle();
})