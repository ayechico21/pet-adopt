import { createContext } from "react";

// const [theme, setTheme] = useState("darkblue")
const ThemeContext = createContext(["darkBlue", () => {}]);

export default ThemeContext;
