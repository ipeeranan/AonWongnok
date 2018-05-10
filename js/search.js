$(function () {

    $('#search').click(function(){
        $('#searchresult').empty();
        var keyword = $('#keyword').val();
        var type = $('#type').val();
        var radius = $('#radius').val();
        PlaceSearch.Search(keyword, type, radius).then(function(data){
            for(var i=0;i<data.length;i++){
                var row = 
                '<a href="detail.html?placeid=' + data[i].id + '">' + 
                '<div class="row">' + 
                '<div class="col"><img width="180" height="300" src=' + data[i].photo + ' class="thumbnail" /></div>' +'<br><br><br><br>'+
                '<div class="col" style="color:black">' + data[i].name + '</div>' +
                '<div class="col" style="color:black">' + data[i].rating + '</div>' +
                '</div>' +
                '</a>';
                $('#searchresult').append(row);
            }
        });
    });    
});