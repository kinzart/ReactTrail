// WHY USE TYPESCRIPT AS A BRAIN OF YOUR PROJECT





// Mission: Incluir na msg a cidade e UF

/* Typing the information */
type User = {
    name: string;
    address: {
        city: string;
        uf: string;
    }
};

/*writing the function*/
function showWelcome(user: User) {
    console.log(user);

    return `Welcome ${user.name} (${user.address.city} - ${user.address.uf})`;
}


/*calling the function*/
showWelcome({
    name: 'Ricardo',
    address: {
        city: 'Florianópolis',
        uf: 'SC'
    }
})


