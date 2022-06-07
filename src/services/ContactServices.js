import axios from 'axios'

const rest = axios.create({
    baseURL: 'http://localhost:3006'
})


export const addContact = (contact) => {

    return rest.post('/contacts', contact )
        .then(response => console.log('successfully added contact into DB'))
        .catch(error => { 
            console.error('failed to add contact into DB')
            return error;
        })
}

export const getContacts = () => {
    return rest.get('/contacts')
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error('fetching failed: ' + error)
        })
}


export const deleteContacts = (id) => {
    return rest.delete('/contacts/'+id)
           .then(response=> {

           })
           .catch(error=> {
               throw new Error('deletion failed');
           })

}