type User = {
    type:"user";
    name: string;
    age: number;
};
  type Admin = {
    type : "Admin";
    name: string;
    email: string;
    role: string;
  };
   type Person = User | Admin;

   function filterPersons(
    Person: Person[],
    PersonType: "User" | "Admin",
    criteria: Omit<Partial<User>,  "type"> | Omit<Partial<Admin>,  "type">
   ): Person[] {
    return Persons.filter((Person) => {
      if(Person.type !== PersonType)
        return false;
      Object.entries(criteria).every(([Key, value]) =>{
        return (Person as any) [Key] === value;
      });
    });
   }
  const Persons: Person[] = [
    {type:"user", name:"ada", age:24},
    {type:"user", name:"obi", age: 30},
    {type:"Admin", name:"charles",email:"charleseze23@gmail.com ",role:"manager"},
    {type:"Admin", name:"sandra",email:"sandraobi31@gmail.com ",role:"receptionst"},
    {type:"Admin", name:"dave",email:"davelove11@gmail.com ",role:"banker"},
  ];

   
const filteredUsers = filterPersons(Persons, "User",{age:30});
console.log(filteredUsers);

const filteredAdmins = filterPersons(Persons, "Admin",{role:"banker"});
console.log(filteredAdmins);