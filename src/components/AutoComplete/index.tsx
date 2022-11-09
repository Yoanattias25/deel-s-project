import { useCallback, useState } from 'react'
import './styles.css'


type SuggestionListProps = {
    suggestions: string[]
    onSuggestionSelected: (suggestion: string) => void
}

function SuggestionList({ suggestions, onSuggestionSelected }: SuggestionListProps) {
    return <ul>
        {suggestions.map((suggestion, index) => (
            <li key={suggestion + index}
                onClick={() => onSuggestionSelected(suggestion)}>
                {suggestion}
            </li>
        ))}
    </ul >
}

type AutoCompleteProps = {
    items: string[],
    onSelected: (item: string) => void
}

// auto complete component
export default function AutoComplete({ items, onSelected }: AutoCompleteProps) {
    const [suggestions, setSuggestions] = useState([])
    const [text, setText] = useState('')


    // handle text change
    const onTextChanged = (e: any) => {
        const value = e.target.value
        let suggestions: any = []
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i')
            suggestions = items.sort().filter(v => regex.test(v))
        }
        setSuggestions(suggestions)
        setText(value)
    }

    // handle suggestion selected
    const suggestionSelected = (value: any) => {
        setText(value)
        setSuggestions([])
        onSelected(value)
    }

    // clear suggestions
    const clear = () => {
        setText('')
        setSuggestions([])
    }

    // render suggestions
    const renderSuggestions = useCallback(() => {
        if (suggestions.length === 0)
            return null
        return <SuggestionList
            suggestions={suggestions}
            onSuggestionSelected={suggestionSelected} />
    }, [suggestions])

    return (
        <div className="ac_container">
            <input value={text}
                onChange={onTextChanged}
                type="text"
                placeholder={'Type to search'} />
            {renderSuggestions()}
            <button onClick={clear}>clear</button>
        </div>
    )
}