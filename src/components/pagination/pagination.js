import React from 'react';
import './pagination.css';


const Pagination = ({totalPages, currentPage, handlePaging}) =>{
    
    const previousCurrentPage = () =>{

        const previous = () => {
            const previousPages = []
            for (let i =2; i >= 0; i--){
                if((currentPage-i) > 0 ){
                    previousPages.push(<a href="/#" onClick={() => handlePaging(currentPage-(i+1))}>{currentPage - i}</a>)
                }
            }
            return previousPages
        }

        return (
            <span>
                {currentPage > 3?
                    <span>
                        <a href="/#" onClick={() => handlePaging(0)} >1</a>
                        ...
                    </span>
                :
                <span/>}
                {previous()}
            </span>
        );
    }

    const afterCurrentPage = () =>{
        const after = () => {
            const afterPages = []
            for (let i =1; i <= 3; i++){
                if((currentPage+(i-1)) < (totalPages -1)){
                    afterPages.push(<a href="/#" onClick={() => handlePaging(currentPage+i)}>{currentPage+i+1}</a>)
                }
            }
            return afterPages
        }

        return (
            <span>
                {after()}
                {currentPage < totalPages - 4 ?
                    <span>
                        ...
                        <a href="/#" onClick={() => handlePaging(totalPages -1)} >{totalPages}</a>
                    </span>
                :
                <span/>}
            </span>
        );
    }

    return (
        <div className="pagination">
            {currentPage > 0 ?
                <a href="/#" onClick={() =>  handlePaging(currentPage-1)}>&laquo;</a>:
                <span />}
            {previousCurrentPage()}
            <a href="/#" className="active" onClick={() => handlePaging(currentPage)}>{currentPage+1}</a>
            {afterCurrentPage()}
            {currentPage < totalPages-1 ?
                <a href="/#" onClick={() => handlePaging(currentPage+1)}>&raquo;</a>:
                <span />
            }
        </div> 
    )
}

export default Pagination