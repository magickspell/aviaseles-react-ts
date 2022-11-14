import React from "react";
import {timeArr} from "../app/data";

interface propsI {
    cityTo: string,
    cityFrom: string,
    dateThere: string,
    cityShortFrom: string,
    cityShortTo: string,
    wayThere: string,
    timeThere: number,
    setTimeThere: React.Dispatch<React.SetStateAction<number>>
}

export const Ticket = (props: propsI) => {

    const TimeThereArr = timeArr.filter(i => i.type === 'there')

    return(<div className={'result__ticket_one'}>
        <div className={'result__ticket__logo'}>
            <p className={'result__ticket__no-chargeback'}>{'Невозвратный'}</p>
            <div className={'result__ticket__logo__img'}>
                {'S7'}
            </div>
            <div className={'result__ticket__logo__text'}>
                {'S7 Airlines'}
            </div>
        </div>
        <div className={'result__ticket__body'}>
            <section>
                <div className={'result__ticket__info_there'}>
                    <p className={'result__ticket__info__time'}>{TimeThereArr[props.timeThere].start}</p>
                    <p className={'result__ticket__info__city'}>{props.cityFrom}</p>
                    <p className={'result__ticket__info__date'}>{props.dateThere}</p>
                </div>
                <div className={'result__ticket__way'}>
                    <div className={'result__ticket__way__top'}>
                        <p>{props.cityShortFrom}</p>
                        <p>{props.cityShortTo}</p>
                    </div>
                    <div className={'hr'}>
                        <div className={'hr__dot'}></div>
                        <div className={'hr__line'}></div>
                        <div className={'hr__dot'}></div>
                    </div>
                    <p className={'result__ticket__way__bot'}>В пути {props.wayThere}</p>
                </div>
                <div className={'result__ticket__info_from'}>
                    <p className={'result__ticket__info__time'}>{TimeThereArr[props.timeThere].end}</p>
                    <p className={'result__ticket__info__city'}>{props.cityTo}</p>
                    <p className={'result__ticket__info__date'}>{props.dateThere}</p>
                </div>
                <div className={'result__ticket__info__picks'}>
                    <img src={require('../img/pocket.png')} alt="pocket"/>
                    <img src={require('../img/bag.png')} alt="bag"/>
                </div>
            </section>
            <div className={'result__ticket__times'}>
                {
                    TimeThereArr.map((i, n) => {
                        return (
                            <p key={`time-there-${n}`}
                               className={
                                   `${TimeThereArr[props.timeThere].start} - ${TimeThereArr[props.timeThere].end}` === `${i.start} - ${i.end}`
                                       ? `active` : ''
                               }
                               onClick={() => {
                                   props.setTimeThere(n)
                               }}
                            >{`${i.start} - ${i.end}`}</p>
                        )
                    })
                }
            </div>
        </div>
    </div>)
}