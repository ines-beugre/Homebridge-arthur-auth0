import React, { Component } from 'react'; 
import PropTypes from 'prop-types';
import TrombiCard from './TrombiCard';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import '../App.css';
import './Trombinoscope.css';

import * as PersonServices from '../services/person';

export class Trombinoscope extends Component {

    static propTypes = {
        onSelectedPerson: PropTypes.func,
        persons: PropTypes.array, 
        person: PropTypes.object
    };

    constructor(props){
        super(props);
        this.state = {
            persons: [],
            personsToDisplay: [],
            person: {},
            search:'',
            profile: {},
            isAdmin:false,
            existPerson: true,
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    displayList(){
        PersonServices.getPersonList()
            .then(r => r.json())
            .then(persons => {
                this.setState({persons, personsToDisplay: persons})
            });
    }
  
    componentDidMount () {
        {this.displayList()};

        let isAdmin = JSON.parse(sessionStorage.getItem('isAdmin'));
        let userEmail =sessionStorage.getItem('userEmail');
        let existPerson=JSON.parse(sessionStorage.getItem('existPerson'));

        this.setState({ isAdmin, userEmail, existPerson }); 
              
        console.log("sessionStorage", isAdmin)
        console.log("userNameT", userEmail)
        console.log("isAdmin", isAdmin)

    };

    // barre de recherche
    handleSearch = (e) => {
        console.log("updateSearch", e.target.value);
        const persons = this.search(e.target.value);
        this.setState({search: e.target.value, personsToDisplay: persons});
    }

    search = (query) => {
        const {persons} = this.state;
        return persons.filter(
            (person) => {
                let queryObject = Object.keys(person).filter(
                    (key) => {
                        return person[key].toLowerCase && person[key].toLowerCase().indexOf(query) !== -1;
                    }
                );
                return queryObject.length > 0
            }
        );
    }

    // redirection pour créer une personne
    goToCreate = () => {
        this.props.history.push(`/create`);

    }

    // suppression d'une personne
    handleDelete = (person) => {
        console.log("list", this.state.persons);
        console.log("person a supprimer", person.name);
        PersonServices.removePerson(person.email).then(()=>{
            this.displayList();
            let message = person.firstname + " " + person.lastname + " a été supprimé(e)";
            alert(message);
        }); 
    }

    deletePerson=(person)=>{
        if (window.confirm(`Êtes-vous sur? Ce processus est irreversible.`)){
            this.handleDelete(person)
        }
    }

    //verifie la presence de la personn
    
    render(){
        const personsToDisplay = this.state.personsToDisplay;
        const {isAdmin, existPerson} = this.state;

        console.log ('isAdmin', isAdmin)
        console.log ('existPerson', existPerson)


        return(
            <div className="App">
                <h2 className="trombi-title"><b>Membres de la Team Serli</b></h2>

                    {
                        ((isAdmin) ?
                        <OverlayTrigger placement="bottom"
                            overlay={  <Tooltip id="tooltip" >  Ajouter une nouvelle personne :).</Tooltip>} >
                            <button type="button" className="bouton2" onClick={ () =>this.goToCreate() }>
                             <i className="fa fa-plus"></i>
                             </button>
                        </OverlayTrigger> 
                        : null)
                    }

                    {/* barre de recherche */}
                    <div className="search-bar">
                        <div className="input-group">
                            <label htmlFor="search" className="input-group-addon" style={{minWidth: "20px"}}>
                            <i className="fa fa-fw fa-search" />
                            </label>        
                            <input
                                id="query"
                                type="text"
                                value={this.state.search}
                                onChange={this.handleSearch.bind(this)}
                                className="form-control"
                                placeholder="Search..."
                            />
                        </div>
                        <p>{this.state.query}</p>
                    </div>

                    {/* affichage des personnes */}
                    <div className="trombi-container animated pulse">
                            {
                            personsToDisplay.map(person =>(
                                <TrombiCard isAdmin={isAdmin} key={person.email} person = {person} deletePerson = {this.deletePerson.bind(this)}/>
                                )
                            )    
                            }
                    </div>

                    {/* bouton d'ajout d'une personne */}

                    { ( (isAdmin) ? 
                        <div className="">
                            <button type="button" className="btn btn-primary add-new" onClick={ () => {this.goToCreate()} }>
                            <i className="fa fa-plus"></i> Ajouter une nouvelle personne :)</button>
                        </div>  : ( existPerson === false ?  
                        <div className="">
                        <button type="button" className="btn btn-primary add-new" onClick={ () => {this.goToCreate()} }>
                        <i className="fa fa-plus"></i> Ajouter une nouvelle personne :)</button>
                    </div> :
                        null ))
                    }
            </div>
        )
    }
}

// <div className="">
                    //     <button type="button" className="btn btn-primary add-new" onClick={ () => {this.goToCreate()} }>
                    //     <i className="fa fa-plus"></i> Ajouter une nouvelle personne :)</button>
                    //     {/* <button type="button" className="bouton2" onClick={ () => {this.goToCreate()} }><i class="fa fa-plus"></i></button> */}
                    // </div> 