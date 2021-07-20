import React from 'react';
import LogsTable from "./components/LogsTable.js";

function DataStore (){
    return (
        <div
            style={{
                marginTop:"75px",
                marginBottom:"100px",
                marginLeft:"150px",
                marginRight:"150px"
            }}>
            <LogsTable/>
        </div>
    )
}

export default DataStore;