var ball = document.querySelector('#ball');
var nameset = ['캔디핑크10', '벚꽃핑크', '수놓은별빛', '강코랄', '옌로우', '챈메랄드', '챔무', '백설민주', '나부키하늘', '토미베이지', '율렌지', '블루지니', 'IZ*ONE',];
var backgroundset = ['#d9598c', '#f1d2e7', '#bbb0dc', '#db706c', '#fcf695', '#a7e0e1', '#cee5d5', '#f2f2f2', '#b7d3e9', '#f1c3aa','#f3aa51','#567ace','url(./showcon.jpg) center/144%',];
for(var i = 0; i<13; i++){
    var color = document.createElement('div');
    color.id = nameset[i];
    color.title = nameset[i];
    color.style.background = backgroundset[i];
    ball.appendChild(color);
}
document.querySelectorAll('#ball>div').forEach(function(element){
    element.addEventListener('click',function(){
        document.body.style.background = this.style.background;
    });
});