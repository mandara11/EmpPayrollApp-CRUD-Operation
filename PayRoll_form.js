let isUpdate=false;
let employeePayrollobj=
{};

window.addEventListener('DOMContentLoaded',(event)=>{
    const name=document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input',function()
    {
        let nameRegex=RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name.value))
        {
            textError.textContent="";
            return;  
        }
        try{
            (new EmployeePayRoll()).name=name.value;
            textError.textContent="";
        }catch(e)
        {
            textError.textContent=e;
        }
      
    }
    );

    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    salary.addEventListener('input', function()
    {
        output.textContent = salary.value;
    })
    checkForUpdate();
});

const checkForUpdate=()=>
{
    const employeePayrollJSON=localStorage.getItem('editEmp');
    isUpdate=employeePayrollJSON?true:false;
    if(!isUpdate) return;
    employeePayrollobj=JSON.parse(employeePayrollJSON);
    setForm();
}

const setForm=()=>
{
    setValue('#name',employeePayrollobj._name);
    setSelectedValues('[name=profile]',employeePayrollobj._profilePic);

}

const setSelectedValues=(propertValue,value)=>
{
    let allItems=document.querySelectorAll(propertValue);
    allItems.forEach(item =>
        {
            if(Array.isArray(value))
            {
                if(value.includes(item.value))
                {
                    item.checked=true;
                }
               
            }
            else if(item.value===value)
            item.checked=true;
        });
}

const setValue=(id,value)=>
{
const element=document.querySelector(id);
element.value=value;
}


function createAndUpdateStorage(employeePayRollData)
{
    let employeePayRollList=JSON.parse(localStorage.getItem("EmployeePayrollList"));

    if (employeePayRollList!=undefined)
    {
        employeePayRollList.push(employeePayRollData);
    }
    else
    {
        employeePayRollList=[employeePayRollData]
    }
    alert(employeePayRollList.toString());
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayRollList));
}



const save=()=>
{
    try{
        let employeePayRollData=createEmployeePayRoll();
        createAndUpdateStorage(employeePayRollData);
        window.location.replace(site_properties.home_page);
        
    }catch(e)
    {
        console.log(e);
        return;
    }
}






const createEmployeePayRoll=()=>
{
    let employeePayrollData=new EmployeePayRoll();
    try{
        employeePayrollData.name=getInputValurById('#name');
    }catch(e)
    {
        setTextValue('.text-error', e);
        throw e;
    }
    employeePayrollData.profilePic=getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender=getSelectedValues('[name=gender]').pop();
    employeePayrollData.department=getSelectedValues('[name=department');
    employeePayrollData.note=getInputValurById('#notes');
    employeePayrollData.salary=getInputValurById('#salary');
    let date=getInputValurById('#day')+" "+getInputValurById("#month")+" " + getInputValurById('#year');
    employeePayrollData.startDate=date;
    alert(employeePayrollData.toString());
    return employeePayrollData;
}

const getInputValurById=(id)=>
{
    let value=document.querySelector(id).value;
    return value;
}

const getInputElementValue=(id)=>
{
    let value=document.getElementById(id).value;
    return value;
}

const getSelectedValues=(propertyValue)=>{
    let allItems=document.querySelectorAll(propertyValue);
    let selItems=[];
    allItems.forEach(item =>
        {
            if(item.checked)
            selItems.push(item.value);
        });
        return selItems;
}

const resetform=()=>
{
    setValue('#name', '');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary','');
    setValue('#day', '3');
    setValue('#month','January');
    setValue('#year','2020');
}

const unsetSelectedValues=(propertyValue)=>
{
    let allItems=document.querySelector(propertyValue);
    allItems.forEach(item=>
        {
            item.checked=false;
        });
}

const setTextValue=(id, value)=>{
const element = document.querySelector(id);
element.textContent = value;
}

