import React, {useState, useEffect, useContext} from 'react';
import { ThemeContext } from './ThemeProvider';


const LocalThemedBox = () => {
const {theme} = useContext(ThemeContext);
const [localTheme, setLocalTheme] = useState('light');

useEffect(() => {
    setLocalTheme(theme);
}, [theme]);

return(
    <div style={{width:'200px',height:'200px',border:'2px solid green'}} id="local-themed-box">
        {/* Write code below this line */}
        <p className={`txt-${localTheme}`} id="local-themed-text-container">
            Hey There!
        </p>
        <button id="local-theme-toggler" className={`btn btn-${localTheme}`}onClick={()=>{setLocalTheme(localTheme === 'light' ? 'dark' : 'light')}}>
            Toggle local theme to {localTheme === 'light' ? 'dark' : 'light'}
        </button>
        
    </div>
)
}

export { LocalThemedBox }