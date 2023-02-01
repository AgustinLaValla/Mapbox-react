import React from 'react'

export const SearchBar = () => {

  const debunceRef = React.useRef<NodeJS.Timeout>();

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (debunceRef.current) clearTimeout(debunceRef.current);

    const { value } = event.target;
    debunceRef.current = setTimeout(() => {

      //some code to search place

    }, 500);

  }

  return (
    <div className='search-container'>
      <input
        type="text"
        className='form-control'
        placeholder='search place...'
        onChange={onInputChange}
      />
    </div>
  )
}
