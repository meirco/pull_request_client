import './App.css';
import {useEffect, useState} from "react";
import MUIDataTable from "mui-datatables";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPullData()
  }, [])

  const getPullData = () => {
    fetch('http://localhost:5000/pulldata')
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setData([data])
        })
  }

  const columns = ["action", "number", "pull_request", "raw_data", "repository", "sender"];

  return (
    <div>
      <div className="App">
        <button onClick={getPullData}>Get data</button>
      </div>
      <MUIDataTable
        title={"Last pull request data"}
        data={data ? data : []}
        columns={columns}
        style={{verticalAlign: "top"}}
        options={{
            selectableRows: "none",
            pagination: false,
            print: false,
            filter: false,
            download: false,
            viewColumns: false,
        }}
    />
    </div>
  );
}

export default App;
