import PropTypes from 'prop-types'
import React from 'react'

const SearchBar = ({ keyword, keywordChange }) => {
   
   return (
    <input
      className="search-bar"
      type="text"
      placeholder="Cari berdasarkan nama"
      value={ keyword }
      onChange={(event) => keywordChange(event.target.value)} 
    />
  )
}

SearchBar.PropTypes = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired
}

export default SearchBar
