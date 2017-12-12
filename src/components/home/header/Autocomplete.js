import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import axios from 'axios';
import { connect } from 'react-redux';
import { addQuery, setLocation, postQuery, fetchCurrentWeather } from '../../../redux/actions';
import './Autocomplete.css';
class Autocomplete extends React.Component {
  constructor(props) {
    super(props)
    this.state = { address: '' }
    this.onChange = (address) => this.setState({ address })
  }

  handleFormSubmit = (address) => {
    this.setState({address});
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
        let query = {...latLng, name: this.state.address};
        if (this.props.loggedIn) {
          this.props.postQuery(query);
        } else {
          this.props.addQuery(query);
        }
        // this.props.fetchCurrentWeather(query);
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
    const myStyles = {
      root: { position: 'absolute', top: '20px' },
      input: { width: '224px', fontSize: '17px' },
      autocompleteContainer: { width: '224px', margin: '0', padding: '0', border: 'none' },
      autocompleteItem: { width: '224px', color: 'black', fontSize: '15px' },
      autocompleteItemActive: { color: '#3437d4' },
      googleLogoContainer: {display: 'none'}
    }
  
    const inputProps = {
      value: this.state.address,
      placeholder: 'Enter a location',
      onChange: this.onChange,
    }
    const AutocompleteItem = ({ suggestion }) => (<button onClick={this.handleFormSubmit} type="submit"><i className="fa fa-map-marker"/>{suggestion}</button>)
    return (
      <div className="Autocomplete">
        <i className="fa fa-search" aria-hidden="true"></i>
        <form onSubmit={this.handleFormSubmit}>
        
          <PlacesAutocomplete 
              inputProps={inputProps} 
              onSelect={this.handleFormSubmit} 
              styles={myStyles} 
              />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        queries: !!state.queries.userQueries,
        loggedIn: !!state.session.username,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addQuery: query => dispatch(addQuery(query)),
        postQuery: query => dispatch(postQuery(query)),
        setLocation: query => dispatch(setLocation(query)),
        fetchCurrentWeather: (query) => dispatch(fetchCurrentWeather(query)),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Autocomplete);