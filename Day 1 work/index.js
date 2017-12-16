$('#red-butt').on('click', () =>{
    alert('correct!!')
})

$('#butt-2').on('mouseover', ()=>{
    $('#butt-2').css('position','absolute');
    let randX = Math.floor(Math.random() * 100) + 1 ;
    let randY = Math.floor(Math.random() * 100) + 1 ;
   $('#butt-2').css('top', randX+'%');
   $('#butt-2').css('left', randY+'%');

})

$('#correct').on('click', ()=>{
    alert('correct!!')
})