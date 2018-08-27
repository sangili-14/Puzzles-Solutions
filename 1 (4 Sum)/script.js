var a,b,c,d,total,count;
var ahasval=false,bhasval=false,chasval=false,dhasval=false,thasval=false;
count=0;

$(function(){
  $a=$('#a');
  $b=$('#b');
  $c=$('#c');
  $d=$('#d');
  $total=$('#total');
  $a.blur(function(){
    a=parseInt($a.val());
    count++;
    ahasval=true;
    check();
  });
  $b.blur(function(){
    b=parseInt($b.val());
    count++;
    bhasval=true;
    check();
  });
  $c.blur(function(){
    c=parseInt($c.val());
    count++;
    chasval=true;
    check();
  });
  $d.blur(function(){
    d=parseInt($d.val());
    count++;
    dhasval=true;
    check();
  });
  $total.blur(function(){
    total=parseInt($total.val());
    totalhasval=true;
  }); 
   
  function check(){
      if(count==3 && totalhasval==true){
          
          if(ahasval==true && bhasval==true &&dhasval==true){
             var temp=total-(a+b+d);
             $c.val(temp);
          }
          else if(bhasval==true && chasval==true && dhasval==true){
            var temp=total-(b+c+d);
            $a.val(temp);
          }
          else if(ahasval==true && chasval==true && dhasval==true){
            var  temp=total-(a+c+d);
            $b.val(temp);
          }
           else if(ahasval==true && chasval==true && bhasval==true){
            var  temp=total-(a+c+b);
            $d.val(temp);
          }

      }
  } 
});