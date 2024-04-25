var scope, g_form;
$.find("input").every(el => {
    if (g_form){
        console.log('g_form already exists');
        return false;
    }
    try {
        console.log('Trying to select element id "' + el.id + '"');
        scope = angular.element($('#' + el.id)).scope();
        g_form = scope.$parent.$parent.$parent.getGlideForm();
    } catch (e) {}
    if (g_form){
        console.log('Was able to grab element id  "' + el.id + '"');
       return false;
    }
	console.log('Was not able to find angular element containing g_form');
    return true;
});
