// import React, { Component } from 'react'; 
// // import PropTypes from 'prop-types';
// import './CreateOrUpdate.css';

// import * as PersonServices from '../services/person';

// export class Create extends Component {
   
//     constructor(props){
//         super(props);

//         this.state = {
//             person: {
//                 image:'data:image/jpeg;base64,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',
//                 firstname: '',
//                 lastname: '',
//                 color: '',
//                 welcomeMsg: '',
//                 email:'', 
//                 emailError:'',
//             },
//             test: false,
//             existPerson: false,
//             textLength: this.props.maxLength,
//         }
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleChar = this.handleChar.bind(this);
//     }
    
//     onSelectPerson = (email) => {
//        if(email){
//         PersonServices.displayPerson(email)
//             .then(r => r.json())
//             .then(person => this.setState({person}));
//        }
//     };

//     componentDidMount(){
//         this.onSelectPerson(this.props.match.params.email) 
        
//         let isAdmin = JSON.parse(sessionStorage.getItem('isAdmin'));
//         let userEmail = sessionStorage.getItem('userEmail');
//         let existPerson= sessionStorage.getItem('existPerson', existPerson);


//         this.setState({
//             isAdmin, userEmail, existPerson
//         })

//         console.log("sessionStorageC", isAdmin)
//         console.log("userNameC", userEmail)
//     }

//     getImage = (e) => {
//         const files = e.currentTarget.files;
//         var reader = new FileReader();

//         reader.onload = (e) => {
//         //  this.setState({image: e.target.result});
//             const person = this.state.person;
//             person.image = e.target.result;
//             this.setState({person});
//         }
//         reader.readAsDataURL(files[0]);
//     }

//     handleChange = (e) => {
//         console.log("handleChange", e.target.value)
//         const {person} = this.state;
//         person[e.target.id] = e.target.value;
//         this.setState({person})
//     }

//     verifPerson = (email) => {
//         return PersonServices.verifPerson(email)
//             .then(r => r.json())
//             .then(test => this.setState({test}))
//     }

//     validate = () => {
//         let isError = false;
//         console.log("valideemail")
//         const errors = {
//             emailError: '',
//         };

//         if (this.state.person.email.indexOf("@") === -1){
//             isError = true;
//             errors.emailError = "Mettez une email valide ";
//         }

//         this.setState({
//             ...this.state,
//             ...errors
//         });
//         return isError;
//     }

//     handleSubmit = async (e) => {
//         e.preventDefault();
//         const err = this.validate();
//         let postPerson = PersonServices.updatePerson(this.state.person);
//         const isPresent = this.state.person.id;
//         await this.verifPerson(this.state.person.email);
//         console.log("emailtest",this.state.person.email);
//         console.log("Mon test",this.state.test);
        
//         let promesseResponse = postPerson
//             .then((response) =>{
//             console.log("status 200",response);
//             return response.json();
//         });
        
//             {
//                 (!this.state.test ?
       
//                     promesseResponse
//                         .then((person)=>{
//                         this.props.history.push("/trombinoscope");
//                         let message1 = person.firstname + " " + person.lastname + " ayant \nla couleur préférée: " + person.color +
//                                                         "\nle message de bienvenue: " + person.welcomeMsg +
//                                                         "\nl'email: " + person.email + " a été créée.";
//                         let message2 = "Les informations de " + person.firstname + " " + person.lastname +" ont été mises à jour.";
            
//                         let message3 = ( isPresent ? message2 : message1 );
//                         alert(message3);
//                         })
//                     .catch((response)=>{
//                     console.log("error", response);
//                     response.json().then((error)=>{
//                     alert(error.message);
//                     })
//                     }) : alert("La persone existe deja")
//                 )
//             }
//     }

//     goToHomePage = () => {
//         this.props.history.push(`/trombinoscope`);
//     }

//     // limite du caractère
//     handleChar = (e) => {
//         console.log("handleChange", e.target.value)
//         const {person} = this.state;
//         person[e.target.id] = e.target.value;
//         var length= e.target.value.length;

//         this.setState({person, textLength : this.props.maxLength - length});
//     }


//     render(){
//         const { person } = this.state;
//         const { isAdmin, userEmail, existPerson} = this.state;
//         const { test } = this.state
//         const isPresent = person.id;

//         console.log("sessionStorageC1", isAdmin)
//         console.log("userNameC1", userEmail)
//         console.log("existPersonCreate", existPerson)
//         console.log("test", test)
//         console.log("existPC", existPerson)

//         return(
//             <CreateOrUpdate handleChange={this.handleChange.bind(this)} mode={"create"}>
//             </CreateOrUpdate>
//         )
//     }
// }

// {/* <span><p>Email : {userEmail}</p></span>  */}
// // { 
// //     ( (isAdmin) || (test === false) ?
// //     <span ><input placeholder="Votre email.." id="email" value={person.email} onChange={this.handleChange.bind(this)} required style={{width:"350px"}}></input></span> 
// //         :(person.email === userEmail ?
// //         <span><label placeholder="Votre email.." id="email" value={person.email} onChange={this.handleChange.bind(this)} required></label></span> 
// //             : <span><p>Email : {userEmail}</p></span> 
// //         ))
// //     }