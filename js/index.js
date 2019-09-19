function getName(){
    var name = document.getElementById('userInput').value;
    sessionStorage.setItem('userName', name);
}
window.onload = function() {
    document.getElementById('sName').innerText = sessionStorage.getItem('userName');
};

function changeFormAction ()
{
  var stProgram = dropDown1.options[dropDown1.selectedIndex].text;
  var stDiscipline = dropDown2.options[dropDown2.selectedIndex].text;
  var stSemester = dropDown3.options[dropDown3.selectedIndex].text;
  if(stProgram = "Bsc" && stDiscipline == "Bsc(Hons) Open" && stSemester == "1st" )
  {
    document.getElementById("student-form").removeAttribute("action");
    document.getElementById("student-form").setAttribute("action" , "bs-hons-open-1st.html");
  }
else  if(stProgram = "Bsc" && stDiscipline == "Bsc(Hons) Open" && stSemester == "2nd" )
  {
    document.getElementById("student-form").removeAttribute("action");
    document.getElementById("student-form").setAttribute("action" , "message.html");
  }
  else  if(stProgram = "Bsc" && stDiscipline == "Bsc(Hons) Open" && stSemester == "3rd" )
    {
      document.getElementById("student-form").removeAttribute("action");
      document.getElementById("student-form").setAttribute("action" , "message.html");
    }

}
var programAndDiscipline = new Array ();

programAndDiscipline['Bsc'] = ['Bsc(Hons) Open', 'Bsc Software Open','Bsc(Hons) Self', 'Bsc Software Self'];
programAndDiscipline['Msc'] = ['Msc(Hons)', 'Msc Software', 'Msc Netwarking'];
programAndDiscipline['M.Phil'] = ['M.Phil(Hons)', 'M.Phil Software', 'M.Phil Netwarking'];
programAndDiscipline['Ph.D'] = ['Ph.D(Hons)', 'Ph.D Software', 'Ph.D Netwarking'];
function ChangeDropContent (select1, select2) {
    document.getElementById("dropDown2").removeAttribute("disabled");
    var program = select1.options[select1.selectedIndex].text;
    var select2 = document.getElementById (select2);

    // removes all options from select 2
    while (select2.options.length) {
        select2.options.remove (0);
    }

    // adds new options to select 2
    var programArray = programAndDiscipline[program];

    if (programArray) {
        for (var i=0; i < programArray.length; i++) {
            var option = new Option (programArray[i], i);
            select2.options.add (option);
        }
    }
}
