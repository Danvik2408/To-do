 $('#add').click(function(){
            if($('#task').val()){
                $('.taskContainer').append(`<div class='taskItem'>${($('#task').val())} 
                </div>`)

            
                $('#task').val('')
                $('.taskItem').dblclick(function(){
                    $(this).hide(100)
                })
                
            }
        })
$('.dark').click(function(){
    $('body').css('background-color','black')
    $('.dark').css('color','white')
    $('.white').css('color','white')
    $('.task').css('box-shadow','0 0 3 #fff')
    $('.BlackOrWhite').css('border','solid #fff')
    $('.add').css('color','white')
    $('#select').css('color','white')
    $('.value').css('backgroundColor','black')
})
$('.white').click(function(){
    $('body').css('background-color','white')
    $('.dark').css('color','black')
    $('.white').css('color','black')
    $('.BlackOrWhite').css('border','solid #000')
    $('.add').css('color','black')
    $('#select').css('color','black')
})
