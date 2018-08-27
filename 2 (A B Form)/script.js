$(function(){
    var first=[];
    var second=[];
    var i=0;
    var j=0;
    $('#fbutton').click(function(){
        //alert($('#f').val());
        var temp=parseInt($('#f').val());
        first[i]=temp;
        i++;
        $('#fcontent').append(temp+'<br />');
        $('#f').val('').focus();
    });
    $('#sbutton').click(function(){
        var temp=parseInt($('#s').val());
        second[j]=temp;
        j++;
        $('#scontent').append(temp+'<br />');
       result(i,j);
       $('#s').val('').focus();
    });
    function result(i,j){
        $('#result').html(' ');
       for(var k=0;k<=j;k++)
        for(var l=0;l<=i;l++)
            {
                if((first[l]+second[k])>=100){
                    $('#result').append(second[k]+'+'+first[l]+'='+(first[l]+second[k]+'<br />'));
                }
            }      
    }
});