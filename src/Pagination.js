import React, { useState, useEffect } from 'react'
import { useGlobalContext } from './context'
import {FcNext, FcPrevious} from 'react-icons/fc'

function Pagination() {
    const {pagination,setPagination} = useGlobalContext() 
    const [pages, setPages] = useState([])
    const [selectedValue, setSelectedValue] = useState(1)

    useEffect(()=>{
        let tempPages = []
        for(let i = 0;i<pagination.totalPage;i++){
            tempPages.push(i+1)
        }
        setPages(tempPages)
    }, [pagination.totalPage])

    useEffect(()=>{
        setPagination((prev)=>{
            return {...prev, currentPage:selectedValue}
        })
    }, [selectedValue])

    useEffect(()=>{
        setSelectedValue(pagination.currentPage)
    }, [pagination.currentPage])

    return (
        <div className="pagination-container">

            <div className="page-details">Page {pagination.currentPage} of {pagination.totalPage}</div>

            <div className="navigate">

                <FcPrevious className="page-nav-btn" onClick={()=>{
                    setPagination((prev)=>{
                        if(prev.currentPage !== 1){
                        return {...prev, currentPage:prev.currentPage-1}
                        }
                        return prev
                    })
                }
                } />
                <FcNext className="page-nav-btn" onClick={()=>{
                    setPagination((prev)=>{
                        if(prev.currentPage < prev.totalPage){
                        return {...prev, currentPage:prev.currentPage+1}
                        }
                        return prev
                    })
                }
                } />
                <div className="jump-to">
                    <p>Jump to page</p>
                <select value={selectedValue} onChange={(e)=>setSelectedValue(e.target.value)}>
                    {
                        pages.map((page)=><option value={page}>{page}</option>)
                    }
                </select>
                </div>
            </div>
        </div>
    )
}

export default Pagination
