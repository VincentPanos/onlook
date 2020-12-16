import React from 'react';
import './table.css';

const Table = (props) =>{

    const {headers, data, striped, border} = props;
    const style = [ 'center',  striped ? 'striped' : null, border ? 'border' :null ];

    return (
            <table className={style.join(' ')}>
                <thead>
                    <tr>
                        {headers.map(header => <th key={header.fieldId}>{header.field}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {data.map((datum, index) => 
                        <tr key={index}>
                            {headers.map ( (header, key)=>
                                <td key={header.fieldId+key}>{datum[header.fieldId]}</td>
                            )}
                        </tr>)}
                </tbody>
            </table>
    );
}

export default Table;