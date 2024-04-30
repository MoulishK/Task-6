class Person{
    constructor(name,age,gender,contactNumber,address,education,skill,hobbies,internship) {

   this.name= "Moulish K",
    this.age= "24",
    this.gender = "male",
    this.contactNumber="8667219992",
    this.address={
        city:"Tirucgengoe",
        district:"Namakkal",
        state:"TanilNadu",
    },
    this.education ={
        school:"KSR matriculation higher secondary school",
        college:"KPR institute of engineering and technology",
        degree:"Computer science and engineering",
        year:"2021"
    },
    this.skill=["js","python","block chain","c++"],
    this.hobbies=["listening music","playing","exploring new places"],
    this.internship="Worked in BSH Household Appliance as a intern for a year "

}
}
let person1=new Person
console.log(person1.name)
console.log(person1.address)