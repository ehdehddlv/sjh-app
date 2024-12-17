import React, {useState, useCallback} from 'react';
import ThemeContext from './ThemeContext';
import MainContent from './MainContent';

function DarkOrLight(props){

    const [theme, setTheme] = useState('light');

    // 해당 함수도 작동됨
    // const toggleTheme = () => {
    //     if(theme == "light"){
    //         setTheme("dark");
    //     }else if(theme == "dark"){
    //         setTheme("light");
    //     }
    // };

    const toggleTheme = useCallback(() => {
        if(theme == "light"){
            setTheme("dark");
        }else if(theme == "dark"){
            setTheme("light");
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <MainContent />
        </ThemeContext.Provider>
    );

}

export default DarkOrLight;