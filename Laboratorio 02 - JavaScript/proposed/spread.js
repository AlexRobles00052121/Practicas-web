const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@test.com",
      age: 60,
      salary: 1099,
    },
    {
      id: 2,
      name: "Robert Singer",
      email: "bobby@test.com",
      age: 62,
      salary: 999,
    },
    {
      id: 3,
      name: "Misha Collins",
      email: "castiel@test.com",
      age: 35,
      salary: 899,
    },
    {
      id: 4,
      name: "Dean Winchester",
      email: "dean@test.com",
      age: 41,
      salary: 799,
    },
    {
      id: 5,
      name: "Sam Winchester",
      email: "sam@test.com",
      age: 36,
      salary: 699,
    },
  ];

console.log(users);

const updateUser = (idUser, newName, newSalary) => {
    const foundUser = users.find((user) => {
        return user.id === idUser;
    });

    foundUser.name = newName;
    foundUser.salary = newSalary;

    console.log(users);
};


updateUser(1, "John Winchester", 1500);

users.map(({id,...rest}) => rest).forEach(n=>console.log(n));