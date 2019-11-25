import React, { useState } from "react";
import PlayField from "./PlayField";
const App = () => {
    const [isOn, setValue] = useState("false");
    return (
        <div>
            <div>
                <i
                    className="play icon"
                    onMouseEnter={() => setValue("true")}
                    onMouseLeave={() => setValue("false")}
                >
                    Hover
                </i>
            </div>
            <PlayField isOn={isOn} />
        </div>
    );
};

export default App;
