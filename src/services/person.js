const url = "http://localhost";
//const url = "bga0z9gnry4qboe-mongodb.services.clever-cloud.com";
// const url1= "http://192.168.86.14";
// const url2= "http://192.168.43.93";


export function getPersonList(){
    return fetch (`${url}:8080/person/list`);
}

export function postPerson(data){
    return fetch (`${url}:8080/person/create`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
}

export function updatePerson(data){
    return fetch(`${url}:8080/person/modify`, {
        method: "post",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
}

export function removePerson(email){
    return fetch(`${url}:8080/person/delete/${email}`,{
        method: "delete",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(email)
    });
}

export function displayPerson(email){
    return fetch(`${url}:8080/person/email?email=${email}`);
}

export function verifPerson(email) {
    return fetch(`${url}:8080/person/verification/email?email=${email}`);
}
