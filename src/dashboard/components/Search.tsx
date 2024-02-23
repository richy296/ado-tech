import { useState } from "react";

export const Search = ({onNewSearch}: any) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(target.value)
    }

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const newInputValue = inputValue.trim();        
        onNewSearch(newInputValue.toLocaleLowerCase())
        setInputValue('');
    }

    return (
        <form className="flex w-full" onSubmit={onSubmit}>
            <div className="grid gap-6 md:grid-cols-2">
                <input 
                    type="text" 
                    placeholder="Presione enter para buscar el producto..."
                    value={inputValue}
                    onChange={onInputChange}
                    className="form-control mb-3"  />
            </div>
        </form>
    )
}
