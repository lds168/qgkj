/**
 * Created by uid on 2017/5/22.
 */
var img=document.querySelectorAll("#internet-finance .col-sm-4");
for(var i=0;i<img.length;i++){
img[i].onmouseover=function(){
    this.lastElementChild.style.opacity="1"
};
    img[i].onmouseout=function(){
        this.lastElementChild.style.opacity="0";
    };
}
