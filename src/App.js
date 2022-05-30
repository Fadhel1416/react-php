import { useState } from "react";
import $ from "jquery";
import "./App.css";
  
function App() {
    const [name, setName] = useState("");
    const [result, setResult] = useState("");
  
    const handleChange = (e) => {
        setName(e.target.value);
    };
  
    const handleSumbit = (e) => {
        e.preventDefault();
        const form = $(e.target);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                setResult(data);
            },
        });
    };
  
    return (
        <div className="App">
            <form
                action="http://localhost/server-js/Server.php"
                method="post"
                onSubmit={(event) => handleSumbit(event)}
            >
                <label htmlFor="name">Name: </label>
              <div class="form-group"><input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    className="form-control"
                    onChange={(event) => handleChange(event)}
                /></div>
                <br />
                <button type="submit">Submit</button>
            </form>
            <h1>{result}</h1>
        </div>
    );
}
  
export default App;