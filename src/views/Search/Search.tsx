import React, {useEffect, useState} from "react";
import {cityArr} from "../../app/data";
import {useNavigate} from "react-router";

require('./search.scss')

export const Search = () => {

    const navigate = useNavigate()

    const cityNames = cityArr.map(i => i.city)
    const [cityFrom, setCityFrom] = useState<{ value: string, valid: boolean }>({value: '', valid: true})
    const [cityTo, setCityTo] = useState<{ value: string, valid: boolean }>({value: '', valid: true})
    const [possibleCities, setPossibleCities] = useState<string[]>([])

    const [dateThere, setDateThere] = useState<{ value: string, valid: boolean }>({value: '', valid: true})
    const [dateFrom, setDateFrom] = useState<{ value: string, valid: boolean }>({value: '', valid: true})

    function cityChange(e: React.ChangeEvent<HTMLInputElement>, type: 'from' | 'to') {
        if (cityNames.indexOf(e.currentTarget.value) === -1 && e.currentTarget.value.length > 0) {
            setPossibleCities(cityNames)
        } else {
            setPossibleCities([])
        }
        if (type === 'from') {
            setCityFrom(prevState => {
                if (e.target.value === cityTo.value && e.target.value.length > 0) {
                    setCityTo({valid: false, value: cityTo.value})
                }
                if (e.target.value !== cityTo.value && e.target.value.length > 0 && cityNames.indexOf(cityTo.value) !== -1) {
                    setCityTo({valid: true, value: cityTo.value})
                }
                if (cityNames.indexOf(e.target.value) === -1) {
                    return {...prevState, value: e.target.value, valid: false}
                } else {
                    return {...prevState, value: e.target.value, valid: true}
                }
            })
        }
        if (type === 'to') {
            setCityTo(prevState => {
                if ((cityFrom.value === e.target.value && e.target.value.length > 0)
                    ||
                    cityNames.indexOf(e.target.value) === -1
                ) {
                    //alert('Города должны отличаться или быть в списке!')
                    return {...prevState, valid: false, value: e.target.value}
                } else {
                    return {...prevState, valid: true, value: e.target.value}
                }
            })
        }
    }

    function dateChange(e: React.ChangeEvent<HTMLInputElement>, type: 'there' | 'from') {
        const alarm = () => alert('Дата должна быть позже текущей или позже вылета!')
        if (type === 'there') {
            const newValid = (new Date(e.currentTarget.value) > new Date())
            const newValidFrom = new Date(e.currentTarget.value) < (dateFrom.value.length > 0 ? new Date(dateFrom.value) : new Date('Thu Nov 17 2099'))
            setDateThere({value: e.currentTarget.value, valid: newValid})
            setDateFrom({value: dateFrom.value, valid: newValidFrom})
            if (!newValid || !newValidFrom) {
                alarm()
            }
        }
        if (type === 'from') {
            console.log(e.currentTarget.value)
            const newValid = new Date(e.currentTarget.value) > new Date(dateThere.value)
            setDateFrom({value: e.currentTarget.value, valid: newValid})
            if (!newValid) {
                alarm()
            }
            if (e.currentTarget.value.length === 0) {
                setDateFrom({value: e.currentTarget.value, valid: true})
            }
        }
    }

    const [btn, setBtn] = useState<boolean>(false)
    useEffect(() => {
        setBtn(cityTo.valid && cityFrom.valid && dateThere.valid && dateFrom.valid
            &&
            cityTo.value.length > 0 && cityFrom.value.length > 0 && dateThere.value.length > 0)
    }, [cityTo, cityFrom, dateThere, dateFrom])

    return (
        <div className={'search-wrapper'}>
            <section>
                <div className={'search'}>
                    <div className={'search__inputs'}>
                        <form onSubmit={(e) => {
                            e.preventDefault()
                        }}>
                            <div className={'search__inputs__item'}>
                                <label htmlFor="{'city-from'}">Откуда</label>
                                <input
                                    className={[
                                        (cityFrom.value.length > 0) ? 'filled' : '',
                                        (cityFrom.valid) ? '' : 'invalid'
                                    ].join(' ')}
                                    type={'text'}
                                    name={'city-from'}
                                    placeholder={'Город вылета'}
                                    value={cityFrom.value}
                                    onChange={(e) => {
                                        cityChange(e, 'from')
                                    }}
                                />
                            </div>

                            <div className={'search__inputs__item'}>
                                <label htmlFor="{'city-to'}">Куда</label>
                                <input
                                    className={[
                                        (cityTo.value.length > 0) ? 'filled' : '',
                                        (cityTo.valid) ? '' : 'invalid'
                                    ].join(' ')}
                                    type={'text'}
                                    name={'city-to'}
                                    placeholder={'Город прилёта'}
                                    value={cityTo.value}
                                    onChange={(e) => {
                                        cityChange(e, 'to')
                                    }}
                                />
                            </div>

                            <div className={'search__inputs__item'}>
                                <label htmlFor="{'date-there'}">Туда</label>
                                <input
                                    className={[
                                        (dateThere.value.length > 0) ? 'filled' : '',
                                        (dateThere.valid) ? '' : 'invalid'
                                    ].join(' ')}
                                    type={'date'}
                                    name={'date-there'}
                                    placeholder={'Город прилёта'}
                                    value={dateThere.value}
                                    onChange={(e) => {
                                        dateChange(e, 'there')
                                    }}
                                />
                            </div>

                            <div className={'search__inputs__item'}>
                                <label htmlFor="{'date-back'}">Обратно</label>
                                <input
                                    className={[
                                        (dateFrom.value.length > 0) ? 'filled' : '',
                                        (dateFrom.valid) ? '' : 'invalid'
                                    ].join(' ')}
                                    type={'date'}
                                    name={'date-back'}
                                    placeholder={'Город прилёта'}
                                    value={dateFrom.value}
                                    onChange={(e) => {
                                        dateChange(e, 'from')
                                    }}
                                    disabled={!(dateThere.value.length > 0)}
                                />
                            </div>
                        </form>
                    </div>
                    <div className={'search__btn'}>
                        <div className={'search__btn__city'}>
                            {
                                possibleCities.length > 0
                                    ? <>
                                        <p>Возможные города:</p>
                                        {
                                            possibleCities.map((i, n) => {
                                                return (
                                                    <div className={'search__btn__city__item'}
                                                         key={`item-${n}`}
                                                    >{i}
                                                    </div>)
                                            })
                                        }
                                    </>
                                    : []
                            }
                        </div>
                        <button
                            className={btn ? '' : 'disabled'}
                            onClick={() => {
                                if (btn) {
                                    navigate('/avia/info', {
                                        state: {
                                            cityFrom: cityFrom,
                                            cityTo: cityTo,
                                            dateThere: dateThere,
                                            dateFrom: dateFrom,
                                        }
                                    })
                                }
                            }}
                        >Найти билеты
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}