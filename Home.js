let empParrollList;

window.addEventListener('DOMContentLoaded',(event)=>
{
    empParrollList=getEmployeePayrollDataFromStorage();
    createInnerHtml();
    document.querySelector('.emp-count').textContent=empParrollList.length;
});

const getEmployeePayrollDataFromStorage=()=>
{
    return localStorage.getItem('EmployeePayrollList')?
    JSON.parse(localStorage.getItem('EmployeePayrollList')):[];
}

const createInnerHtml=()=>
{
    const headerHTml="<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
    "<th>Salary</th><th>Start Date</th><th>Actions</th>";

    if(empParrollList.length==0) 
    { let innerHtml=`${headerHTml}`;
    document.querySelector('#display').innerHTML=innerHtml;
    return;}

    let innerHtml=`${headerHTml}`;
    // empParrollList=createEmployeePayrollJSON();
    for(const empParrollData of empParrollList)
     { 

        innerHtml=`${innerHtml}
    
    <tr>
    <td><img class = "profile" alt="" src=${empParrollData._profilePic}></td>
    <td>${empParrollData._name}</td>
    <td>${empParrollData._gender}</td>  
    
    <td>${getDepthtml(empParrollData._department)}</td>
    
    
    
    <td>${empParrollData._salary}</td>
    <td>${empParrollData._startDate}</td>
    <td>
        <button name="${empParrollData._name}" onclick = "remove(this)">Delete</button>
        <button name="${empParrollData._id}" onclick = "edit(this)">Edit</button>   
    </td>  
    </tr>
    `};
    document.querySelector('#display').innerHTML=innerHtml;
     
}

const getDepthtml=(depList)=>
{
    let depHtml='';
    for(const dept of depList)
    {
        depHtml=`${depHtml}<div class ='dept-label'>${dept}</div>`

    }
    return depHtml;
}

/*
const createEmployeePayrollJSON=()=>
{
    let empPayrollListLocal=
    [
    {
        _name: 'Chaitra',
        _gender: 'female',
        _department: ['HR' ,'Finance'],
        _salary: '60000',
        _startDate:'30 Oct 2019',
        _note:'',
        _id:new Date().getTime(),
        _profilePic:'employee4.jpgp'
    },
    {
        _name: 'Pruthvi',
        _gender: 'female',
        _department: ['Sales' ,'Finance'],
        _salary: '60000',
        _startDate:'15 Dec 2021',
        _note:'',
        _id:new Date().getTime(),
        _profilePic:'employee3.jpg'
    },
    {
        _name: 'Rajesh',
        _gender: 'Male',
        _department: ['HR' ,'Engineering'],
        _salary: '80000',
        _startDate:'30 Oct 2019',
        _note:'',
        _id:new Date().getTime(),
        _profilePic:'employee2.jpg'
    }
];
return empPayrollListLocal;
}
*/


const remove=(node)=>
{
    let empPayrollData=empParrollList.find(empData=>empData._name==node.name);
    if(!empPayrollData)return;
    const index=empParrollList
    .map(empData=>empData._name)
    .indexOf(empPayrollData._name);
    empParrollList.splice(index,1);
    localStorage.setItem("EmployeePayrollList",JSON.stringify(empParrollList));
    document.querySelector('.emp-count').textContent=empParrollList.length;
createInnerHtml();
}

const update=(node)=>{
    let empPayrollData=empParrollList.find(empData=>empData._name==node.name);
    if(!empPayrollData)return;
    localStorage.setItem('editEmp',JSON.stringify(empPayrollData))
    window.location.replace(site_properties.add_emp_payroll_page);
}