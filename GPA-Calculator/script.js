subjects = []
var i = 0;
function AddSub() {

    let Name = document.getElementById("SubName").value;
    let Deg = document.getElementById("SubDeg").value;
    let Cred = document.getElementById("SubCredit").value;
    subjects[i] = { Name, Deg, Cred };
    i++;

    if(i==1)
    document.getElementById("subjects").innerHTML += " <tr><th>Subject</th> <th>Grade</th> <th>Credit</th></tr>";
    document.getElementById("subjects").innerHTML +="<tr>"+"<td>"+subjects[i - 1].Name + "</td> " +"<td>"+ subjects[i - 1].Deg +"</td><td>  "+subjects[i-1].Cred +"</td><tr>";

}

function GetGPA() {

    let tot=0,totCred=0;
    for (var j = 0; j < i; j++) {
        if(subjects[j].Deg=="A")tot+=3.8;
        else if(subjects[j].Deg=="A+") tot+=4.0;
        else if(subjects[j].Deg=="B+") tot+=3.2;
        else if(subjects[j].Deg=="B") tot+=3.0;
        else if (subjects[j].Deg=="C+") tot+=2.8;
        else if (sibjects[j].Deg=="C") tot+=2.5;
        else if(subjects[j].Deg=="D+") tot+=2.3;
        else tot+=2.0;
        tot*=subjects[j].Cred;
        totCred+=subjects[j].Cred;

    }
    document.getElementById("result").innerHTML = "Your GPA is =        " + tot / totCred;

}
