var ball = document.querySelector('#ball');
var backgroundcolor = document;
var colorset = ['#d9598c', '#f1d2e7', '#bbb0dc', '#db706c', '#fcf695', '#a7e0e1', '#cee5d5', '#f2f2f2', '#b7d3e9', '#f1c3aa','#f3aa51','#567ace','url(./showcon.jpg) center/144%',];
for(var i = 0; i<13; i++){
    document.querySelectorAll('#ball>div')[i].style.background = colorset[i];
    
}
document.querySelectorAll('div').forEach(function(element){
    element.addEventListener('click',function(){
        console.log("안녕");    
        //document.body.backgroundColor = element.backgroundColor;
    });
});
