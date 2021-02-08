import React, {useState} from 'react'
import { Input } from "semantic-ui-react"

const SearchBar = ({onFormSubmit}) => {
    const [term, setTerm] = useState('')

    const changeSearchValue = (event) => {
        setTerm(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()

        onFormSubmit(term)
    }

    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label htmlFor="search-bar">Video search for a video!!</label>
                    <Input
                        action={{ icon: "search" }}
                        placeholder="Search..."
                        id="search-bar"
                        value={term}
                        onChange={changeSearchValue}
                    />
                </div>
            </form>
        </div>
    )
}

export default SearchBar