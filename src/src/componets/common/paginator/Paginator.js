import classes from "./Paginator.module.css"
import React, {useState} from "react";
import {connect} from "react-redux";

const Paginator = (props) => {
    let pageCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pageCount / props.portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * props.portionSize + 1;
    let rightPortionNumber = portionNumber * props.portionSize;


    return (
        <div>
            <div className={classes.pageSize}>
                {portionNumber > 1 && <button className={classes.btn} onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>Назад</button>}
                {pages
                    .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                    .map(m => {
                        return <span className={props.currentPage === m && classes.select}
                                     onClick={() => {
                                         props.onPageChanged(m)
                                     }}>{m},</span>

                    })}
                {portionCount > portionNumber && <button className={classes.btn} onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>Вперед</button>}
            </div>


        </div>)
};

const mapStateToProps = (state) => {
    return {
        portionSize: state.usersPage.portionSize
    }
};

export default connect(mapStateToProps, {})(Paginator);

