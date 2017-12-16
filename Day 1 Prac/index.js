$(function(){
    $('#append-button').on('click',function() {
      console.log('Whats up')
      $('#blank-box').append(`
      <div>
      <h1>eiei</h1>
      <p>aoifjiodszgnziokfnbbbbb</p>
      </div>
      `)
    })



    $(document).on('keydown',function(key){
        console.log(event)
        console.log(event.key)
    })

 $('#html-button').on('click', () => {
    $('#my-title').html(`
      <div>
        <h1>Fuck you</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eum, cupiditate nam impedit tempora ad quasi modi aliquam amet. Dolores eos sed fugiat pariatur consequuntur dolore dicta repellat eveniet nisi.</p>
      </div>
    `)
  })

   $('#css-button').on('click', () => {
    $('#my-title').css('color', 'red')
  })


  $('#alert-button').on('click', () =>{
      alert('Yes')
  } )
    // .html(), .append(), .val(), .css()







})