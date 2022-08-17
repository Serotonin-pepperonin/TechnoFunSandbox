interface User  {
    name: string,
    age: number,
    skill: string[]
}

interface Role{
    roleId: number
}

interface UserWithRole extends User, Role{
}


const user:UserWithRole = {
    name: 'pepe',
    age: 33,
    skill: ['1','1'],
    roleId: 5
};


