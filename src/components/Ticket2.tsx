import React from "react";
import {timeArr} from "../app/data";

interface propsI {
    cityTo: string,
    cityFrom: string,
    dateFrom: string,
    cityShortFrom: string,
    cityShortTo: string,
    wayBack: string,
    timeBack: number,
    setTimeBack: React.Dispatch<React.SetStateAction<number>>
}

export const Ticket2 = (props: propsI) => {

    const TimeBackArr = timeArr.filter(i => i.type === 'back')

    return(
        <div className={'result__ticket_two'}>
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
                        <p className={'result__ticket__info__time'}>{TimeBackArr[props.timeBack].start}</p>
                        <p className={'result__ticket__info__city'}>{props.cityTo}</p>
                        <p className={'result__ticket__info__date'}>{props.dateFrom}</p>
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
                        <p className={'result__ticket__way__bot'}>В пути {props.wayBack}</p>
                    </div>
                    <div className={'result__ticket__info_from'}>
                        <p className={'result__ticket__info__time'}>{TimeBackArr[props.timeBack].end}</p>
                        <p className={'result__ticket__info__city'}>{props.cityFrom}</p>
                        <p className={'result__ticket__info__date'}>{props.dateFrom}</p>
                    </div>
                    <div className={'result__ticket__info__picks'}>
                        <img src={require('../img/pocket.png')} alt="pocket"/>
                        <img src={require('../img/bag.png')} alt="bag"/>
                    </div>
                </section>
                <div className={'result__ticket__times'}>
                    {
                        TimeBackArr.map((i, n) => {
                            return (
                                <p key={`time-back-${n}`}
                                   className={
                                       `${TimeBackArr[props.timeBack].start} - ${TimeBackArr[props.timeBack].end}` === `${i.start} - ${i.end}`
                                           ? `active` : ''
                                   }
                                   onClick={() => {
                                       props.setTimeBack(n)
                                   }}
                                >{`${i.start} - ${i.end}`}</p>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}