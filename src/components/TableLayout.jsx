
import React, {useState, useRef, useEffect, useMemo, useCallback} from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import './Table.css'
const TableLayout = () => {
    const [rowData, setRowData] = useState();

    const gridRef = useRef();
  
    const [columnDefs, setColumnDefs] = useState([
      {field: 'make'},
      {field: 'model'},
      {field: 'price'}
    ]);
  
    const defaultColDef = useMemo( ()=> (
      {
        sortable: true, 
        filter: true
      }
    ));
  
    const cellClickedListener = useCallback( event => {
      console.log('cellClicked', event);
    }, []);
  
    useEffect(() => {
      fetch('https://www.ag-grid.com/example-assets/row-data.json')
      .then(result => result.json())
      .then(rowData => setRowData(rowData))
    }, []);
  
    const buttonListener = useCallback( e => {
      gridRef.current.api.deselectAll();
    }, []);
  return (
    <>
    <div className="ag-theme-alpine" style={{width:1000, height: 500}}>
      <AgGridReact 
          ref={gridRef}
          rowData={rowData} columnDefs={columnDefs}
          animateRows={true} rowSelection='multiple'
          onCellClicked={cellClickedListener}
          defaultColDef={defaultColDef}/>
    </div>
    </>
    
  )
}

export default TableLayout