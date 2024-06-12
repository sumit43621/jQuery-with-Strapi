(function($){
    // alert('okk');
    $.ajax({
        url:'http://localhost:1337/api/news-reports',
        type:'GET',
        success:function(result,status,xhr){
            console.log(result.data);
            result = result.data
            var tr = ''
            result.forEach(element => {
                console.log(element);
                tr = tr + `<tr>
                                <td>`+ element.id +`</td>
                                <td>`+ element.attributes.name +`</td>
                                <td>`+ element.attributes.location +`</td>
                                <td>`+ element.attributes.mobile +`</td>
                                <td>
                                    <button class="btn btn-sm btn-success">View</button>
                                    <button class="btn btn-sm btn-info">Edit</button>
                                    <button class="btn btn-sm btn-danger">Delete</button>
                                </td>
                            </tr>`
            });
            $('table > tbody').append(tr);
        }
    })
})(jQuery);