import React, {useContext} from 'react';
import { ThemeContext } from './ThemeProvider';


const ThemeToggleButton = () =>{
    const {theme, toggleTheme} = useContext(ThemeContext);
    return (
       <>
        <button class={`btn btn-${theme} txt-${theme}`} onClick={toggleTheme} id="global-theme-toggler">
            Switch to {theme === 'light' ? 'dark' : 'light'} theme
        </button>
       </>
    )

}
export {ThemeToggleButton}