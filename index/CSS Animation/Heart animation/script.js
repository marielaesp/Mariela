window.addEventListener('DOMContentLoaded', () =>{
    //const path = document.querySelector('#heart path');
    //console.log(path.getTotalLength());

   
    const heart = document.getElementById('heart');

    const likeUnlike = function() {
        if (heart.classList.contains('like')){
            heart.classList.remove('like');
            heart.classList.add('unlike');
        }else{
         heart.classList.remove('unlike');
         heart.classList.add('like');
        }
    }
    heart.addEventListener('click', likeUnlike)
})

        