class EmployeePayRoll
{
    get id(){
        return this._id;
    }
    set id(id)
    {
        this._id=id
    }

    get name(){
        return this._name;
    }

    set name(name)
    {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$')
        if(nameRegex.test(name))
        this._name=name;
        else
        throw 'name is incorrenct';
    }

    get profilePic()
    {
        return this._profilePic;
    }

    set profilePic(profilePic)
    {
        this._profilePic = profilePic;
    }

    get gender()
    {
        return this._gender;
    }
    
    set gender(gender)
    {
        this._gender=gender;
    }

    get department()
    {
        return this._department;
    }
    
    set department(department)
    {
        this._department=department;
    }

    get salary()
    {
        return this._salary;
    }
     set salary(salary)
     {
        this._salary=salary;
     }

     get note()
     {
        return this._note;
     }

     set note(note)
    {
        this._note=note;
    }

    get startDate()
     {
        return this._startDate;
     }

     set startDate(startDate)
    {
        this._startDate=startDate;
    }


     

    toString()
    {
        const options ={year: 'numaric', month:'long',day:'numeric'};
        const empDate = this.strartdate===undefined?"undefined":
        this.startDate.toLocaleDeteString("en-US",options);
        return "id = "+ this.id+", name= "+this.name+" , profilePic = " + this.profilePic 
        +" , salary= "+this.salary + " , gender = "+ this.gender 
        +" , department = "+ this.department + " , startdate = " + this.startDate + " , note = " + this.note ;
    }
}