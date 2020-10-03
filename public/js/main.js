//$(function () {

   // if ($('textarea#ta').length) {
     //   CKEDITOR.replace('ta');
    //}
//});



tinymce.init({
    forced_root_block : "",
    selector: '#ta',
    
  });
$('a.confirmDeletion').on('click', function () {
    if (!confirm('Confirm deletion'))
        return false;
});
