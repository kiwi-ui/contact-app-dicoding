import React from 'react';
import ContactList from '../components/ContactList';
import { deleteContact, getContacts } from '../utils/data';
import SearchBar from '../components/SearchBar';
import { useSearchParams } from 'react-router-dom';

const HomePageWrapper = () => {
  const [searhParams, setSearchParams] = useSearchParams();
  const keyword = searhParams.get('keyword');
  const changeSearchParams = (keyword) => {
    setSearchParams({ keyword })
  }
  return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams}/>
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      contacts: getContacts(),
      keyword: props.defaultKeyword || '',
    }
 
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }
 
  onDeleteHandler(id) {
    deleteContact(id);
 
    // update the contact state from data.js
    this.setState(() => {
      return {
        contacts: getContacts(),
      }
    });
  }

  onKeywordChangeHandler(keyword){
    this.setState(() =>{
      return{
        keyword
      }}
    )
    this.props.keywordChange(keyword)
  }
  
  render() {
    const contacts = this.state.contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(
        this.state.keyword.toLowerCase()
      )
    })
    return (
      <section>
        <h2>Daftar Kontak</h2>
        <SearchBar keyword={this.keyword} keywordChange={this.onKeywordChangeHandler}/>
        <ContactList contacts={contacts}  onDelete={this.onDeleteHandler} />
      </section>
    )
  }
}
 
export default HomePageWrapper;