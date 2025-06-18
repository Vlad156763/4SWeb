import './App.css';

function App() {
    return (
        <div className="App">
            <div className='SearchForm'>
                <div className='label'>Введіть назву товару</div>
                <input className='input' type='text'/>
                <br/>
                <input className='button' type='button' value='Почати пошук'/>
            </div>
        </div>
    );
}

export default App;
