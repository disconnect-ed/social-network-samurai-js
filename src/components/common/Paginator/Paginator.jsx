import React, {useState} from 'react';
import styles from "./Paginator.module.css";
import cn from "classnames";
import {Pagination} from "react-bootstrap";

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 5}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return <div className={cn(styles.paginator)}>

        <Pagination>
            {portionNumber > 1 &&
            <Pagination.Prev onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}/>}

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <Pagination.Item active={(currentPage === p) ? true : false}
                                            key={p}
                                            onClick={(e) => {
                                                onPageChanged(p);
                                            }}>{p}</Pagination.Item>

                })}
            {portionCount > portionNumber &&
            <Pagination.Next onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}/>
            }
        </Pagination>

    </div>
}

export default Paginator;