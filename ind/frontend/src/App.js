import './App.css';
import { useState } from 'react';


function Msg({ type, closeMsg, text }) {
    return (
        <div className={`Msg ${type}`}> 
            <div className='msg-header'>
                <div className='msg-title'></div>
                <button className='msg-close' onClick={ closeMsg } >×</button>
            </div>
            <div className='msg-body'>{ text }</div> 
        </div>
    );
}

function SearchForm ({ onSearch }) {
    const [value, setValue] = useState('');
    return (
        <div className='SearchForm'>
            <div className='label'>Введіть назву товару</div> 
            <input className='input' type='text' value={value} onChange={e => setValue(e.target.value)} /> 
            <input className='button' type='button' value='Почати пошук' onClick={() => onSearch(value)} />
        </div>
    );
}

function Footter() {
    return (
        <div className='Footter'>
            <a className='link' target='_blank' href='https://github.com/Vlad156763/4SWeb.git'>Git Repository</a>
        </div>
    );
}

function Result( {data} ) {
    if (!Array.isArray(data)) return <div>Немає даних</div>;
    return (
        <div className='Result'>
            {data.map((item, i) => (
                <a href={item.link} target='_blank'>
                    <div key={i} className='Result-block'>
                        <div className='block-top'>{item.store}</div>
                        <div className='block-main'>{item.price}</div>
                    </div> 
                </a>
            ))}
        </div>
    );
}

function App() {
    const [dataResult, setData] = useState('');
    const [msg, setMsg] = useState({ type: '', text: '', isHidden: true });
    const showMsg = (type, text) => setMsg({type, text, isHidden: false });
    const hideMsg = () => setMsg({...msg, isHidden: true });
    const handleCloseMsg = () => setMsg({ type: 'hidden', text: '' });
    const view = { 
        search: 1,
        loading: 2,
        done: 3
    };
    const [viewMain, setViewMain] = useState(view.search);
    const handleSearch = (value) => {
        if (!value.trim()) {
            showMsg( 'error', 'Поле не може бути пустим' );
            return;
        }
        hideMsg();
        setViewMain(view.loading);
        const query = encodeURIComponent(value);
        fetch(`http://localhost:4000/api/search?q=${query}`).then(res => res.json()).then(data => {
                setViewMain(view.done);
                setData(data);
            }).catch(err => {
                setMsg({ type: 'error', text: 'Помилка при запиті до проксі' });
                setViewMain(view.search);
            });
    };

    return (
        <div className="App">
            { msg.isHidden === false && <Msg type={msg.type} text={msg.text} closeMsg={handleCloseMsg}/> }
            { viewMain === view.loading && <img className='gif' src='gif/Rolling.gif' alt='gif' /> }
            { (viewMain === view.search || viewMain === view.done) && <SearchForm onSearch={handleSearch} /> }
            { viewMain === view.done && <Result data={dataResult} /> }
            <Footter />
        </div>
    );
}

export default App;
