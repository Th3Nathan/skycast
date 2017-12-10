import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import axios from 'axios';
class AutocompleteForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { address: 'San Francisco, CA' }
    this.onChange = (address) => this.setState({ address })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        // put the search in the redux store 
        // put form typing in redux, then pass add search through combine props

        // if there is a current user, put the location on thier association 
        // need a create query route that takes userid as well... protected if possible 
        // protected route means maybe the user id isnt passed up but is inferred from the server

        // set current location slice of state in redux to the info
        // weather charts will use that, can listen to same action SUBMIT_QUERY as first part

        // I need to see my list of queries get updated, and I need to see the queries pop up
        // in the database 

        // so I have queries and history of user queries... how do I deal with that so i dont repeat myself
        // issue being a user searches some places, then logs in. 
        // I need to store all them in the same place 
 
        // a user logs in, first submit all queries to the database, then download all queries for user,
        // let database handle uniqueness and stuff in scope of user id... a later step
        // a user logs out, change nothing



        console.log('Success', latLng)})
      .catch(error => console.error('Error', error))
  }

  handleClick = () => {
    
    const $ = axios.create({withCredentials: true});
    
    return $.get('http://localhost:8080/queries').then(d => {
        console.log(d);
    })
    return $.get('http://localhost:8080/queries').done(d => {
        console.log(d);
    })

  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }

    return (
      <form onSubmit={this.handleFormSubmit}>
        <PlacesAutocomplete inputProps={inputProps} />
        <button type="submit">Submit</button>
        <div onClick={this.handleClick}>Try me!</div>
      </form>
    )
  }
}

// const mapStateToProps = state => {
//     return {
//         loggedIn: !!state.session.username,
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         addSearch: data => dispatch(addSearch(data)),
//         saveSearch: data => dispatch(createSearch(data)),
//     }
// }

export default AutocompleteForm