window.onload=function(){

    //  放大镜
    var fdj = document.getElementById('fdj');
    var icon_f = document.getElementById('icon_fdj');
    icon_f.onmouseover = function(){
        fdj.style.display = 'block';
        icon_f.style.color = '#2dd382';
    };
    icon_f.onmouseout = function(){
        fdj.style.display = 'none';
        icon_f.style.color = '';
    };

    //bottom
    var close = document.getElementById('close');
    var closed = document.getElementById('bottom_fix');
    close.onclick = function(){
        closed.style.display = 'none';
    };

    //  header
    var tits = document.getElementsByClassName('sea_tit');
    var subs = document.getElementsByClassName('sea_sub');

    for(i=0;i<tits.length;i++){
        tits[i].id = i;
        tits[i].onclick = function () {
            tab(this.id);
        }
    }
    function tab(nowid){
        for(j=0;j<tits.length;j++){
            if(nowid == j){
                subs[j].style.display = 'block';
            }else{
                subs[j].style.display = 'none';
            }
        }
    }

    //  最世界
    var z_ul = document.getElementsByClassName('zsj_ul');
    var z_but = document.getElementsByClassName('zsj_but');

    for(i=0;i<z_but.length;i++){
        z_but[i].id = i;
        z_but[i].onmouseover = function () {
            tab1(this.id);
        }
    }
    function tab1(nowid){
        for(j=0;j<z_but.length;j++){
            if(nowid == j){
                z_ul[j].style.display = 'block';
            }else{
                z_ul[j].style.display = 'none';
            }
        }
    }

    //  游记
    var yj_ul = document.getElementsByClassName('yj_ul');
    var yj_but = document.getElementsByClassName('yj_but');

    for(i=0;i<yj_but.length;i++){
        yj_but[i].id = i;
        yj_but[i].onmouseover = function () {
            tab2(this.id);
        }
    }
    function tab2(nowid){
        for(j=0;j<yj_but.length;j++){
            if(nowid == j){
                yj_ul[j].style.display = 'block';
            }else{
                yj_ul[j].style.display = 'none';
            }
        }
    }

};

