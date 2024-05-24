marked.use({
    gfm: true,
    breaks: true
})

$("#preview").html(marked.parse($("#editor").val()))

$("#editor").on("input", function () {
    const value = $("#editor").val()
    $("#preview").html(marked.parse(value));
});