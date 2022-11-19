document.addEventListener("DOMContentLoaded", function(){
    alert("The document has loaded succesfully")
    const title1 = document.querySelector('h1')
    title1.addEventListener('mouseover',function(){
        title1.style.color = 'blue';
    })
    title1.addEventListener('mouseout', function(){
        title1.style.color = 'black';
    })
})