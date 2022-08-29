// Add your code here
function submitData(name, email) {
    const userName = {
        name: name,
        email: email
    };
   return fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                'accept': "application/json"
            },

            body: JSON.stringify(userName),
        })
        .then(response => response.json())
        .then(user => {
            const userid = document.createElement('h1');
            const body = document.querySelector('body');
            userid.textContent = user.id;
            body.appendChild(userid);

        })
        .catch(error => {
        alert("error occurred"); 
        });
}