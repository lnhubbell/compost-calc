import React from 'react';

import classes from './PileItem.css';
import edit from '../../../../assets/images/edit.png';
import deletePng from '../../../../assets/images/delete.png';

const pileItem = (props) => {

    const bgColor = (
        props.item.carbon/props.item.nitrogen > 30 ?
        {backgroundColor: '#A08C7B'} : {}
    );
    return (
        <tr style={bgColor}>
            <td>
                <div>
                    <input
                        className={classes.inputCls}
                        value={props.item.qty}
                        onChange={
                            (event) => props.quantityHandler(event, props.ind)
                        }
                    />
                    <img className={classes.editImg} src={edit} alt="edit" />
                </div>
            </td>
            <td>{props.item.name}</td>
            <td className={classes.Carbon}>{props.item.carbon}</td>
            <td className={classes.Nitrogen}>{props.item.nitrogen}</td>
            <td className={classes.CarbonNitrogen}>{props.item.carbon}/{props.item.nitrogen}</td>
            <td>
                <img
                    onClick={() => props.remove(props.ind)}
                    src={deletePng}
                    alt="delete"
                    className={classes.deleteImg}
                />
            </td>
        </tr>
    );

};

export default pileItem;
