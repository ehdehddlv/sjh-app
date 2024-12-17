import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function MainContent(props){

    const {theme, toggleTheme} = useContext(ThemeContext);

    return(
        <div style={{
          width: "100vw",
          height: "30vw",
          padding: "1.5rem",
          backgroundColor: theme == "light" ? "white" : "black",
          color: theme == "light" ? "black" : "white"  
        }}>
            <p>안녕하세요. 접니다. useContext를 사용해서, theme 데이터를 하위 컴포넌트로 전달하는 페이지</p>
            <button onClick={toggleTheme}>테마변경</button>
        </div>
    );

}

export default MainContent;