
import { performRequest } from '../utilities/ajaxRequest';

// Profile loader
export function loadMyProfile(){
    //return axios.post('/api/users/getprofile');
    return performRequest('post', '/api/users/getprofile');
}

// Update email address
export function userUpdateEmail(data){
    //return axios.post('/api/users/myemail', data);
    return performRequest('post', '/api/users/myemail', data);
}

// Update password
export function userUpdatePassword(data){
    //return axios.post('/api/users/mypassword', data);
    return performRequest('post', '/api/users/mypassword', data);
}

// Update profile e.g. first name, last name, birthday, location etc..
export function userUpdateProfile(data){
    //return axios.post('/api/users/myprofile', data);
    return performRequest('post', '/api/users/myprofile', data);
}
