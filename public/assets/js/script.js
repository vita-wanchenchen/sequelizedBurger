$(document).on("click", ".devour", function() {
    console.log("click");
    var id=$(this).val();
    console.log(id);
    $.ajax({
        method: "PUT",
        url: "/burgers/" + id
    }).then(function(data) {
        location.reload();
    });
});