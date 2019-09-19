function getName(){
    var name = document.getElementById('userInput').value;
    sessionStorage.setItem('userName', name);
}
window.onload = function() {
    document.getElementById('sName').innerText = sessionStorage.getItem('userName');
};

var campusAndDep = new Array ();

campusAndDep['Gardan Campus'] = ['Select Department', 'Bio-chemistry', 'Bio-technology', 'Botany','Chemistry', 'Melbourne', 'Computer Science','Environmental Sciences', 'English', 'Economics','Education', 'Islamic Studies', 'Geology', 'Mathematics', 'Microbiology','Management Sciences', 'Museum', 'Physics','Statistics', 'Sociology', 'Tourism &amp; Hospitality','Zoology'];
campusAndDep['Main Cmpus'] = ['International Relations (IR)', 'Political Science', 'Sociology'];
campusAndDep['SRH pabbi Campus'] = ['Management Sciences', 'Computer Science'];
campusAndDep['Timargara Campus'] = ['Management Sciences', 'Computer Science'];
campusAndDep['University College for Women'] = ['English'];
function ChangeDropContent (select1, select2) {

    var campus = select1.options[select1.selectedIndex].text;
    var select2 = document.getElementById (select2);

    // removes all options from select 2
    while (select2.options.length) {
        select2.options.remove (0);
    }

    // adds new options to select 2
    var campusArray = campusAndDep[campus];

    if (campusArray) {
        for (var i=0; i < campusArray.length; i++) {
            var option = new Option (campusArray[i], i);
            select2.options.add (option);
        }
    }
}
