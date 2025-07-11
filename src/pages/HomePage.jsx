import React from 'react';
import ContactList from '../components/ContactList';
import SearchBar from '../components/SearchBar';
import { useSearchParams } from 'react-router-dom';
import { deleteContact, getContacts } from '../utils/api';

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
      contacts: [],
      keyword: props.defaultKeyword || '',
    }
 
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  async componentDidMount() {
    const { data } = await getContacts();
 
    this.setState(() => {
      return {
        contacts: data,
      }
    });
  }
 
  async onDeleteHandler(id) {
    deleteContact(id);
 
    const { data } = await getContacts();
    this.setState(() => {
      return {
        contacts: data,
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
