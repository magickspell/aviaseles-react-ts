import {cityArr, priceArr, timeArr} from "../../app/data";
import {useLocation, useNavigate} from "react-router";
import {useEffect, useState} from "react";
import {Ticket} from "../../components/Ticket";
import {Ticket2} from "../../components/Ticket2";

require('./search-result.scss')

export const SearchResult = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const TimeArr = timeArr
    const TimeThereArr = TimeArr.filter(i => i.type === 'there')
    const TimeBackArr = TimeArr.filter(i => i.type === 'back')

    const [timeThere, setTimeThere] = useState<number>(0)
    const [wayThere, setWayThere] = useState<string>('')
    useEffect(() => {
        setWayThere(TimeThereArr[timeThere].diff)
    }, [timeThere])

    const [timeBack, setTimeBack] = useState<number>(0)
    const [wayBack, setWayBack] = useState<string>('')
    useEffect(() => {
        setWayBack(TimeBackArr[timeBack].diff)
    }, [timeBack])

    const cityTo = location.state.cityTo?.value
    const cityShortTo = cityArr.filter(i => i.city === cityTo)[0].cityShort
    const cityFrom = location.state.cityFrom?.value
    const cityShortFrom = cityArr.filter(i => i.city === cityFrom)[0].cityShort
    const dateThere = location.state.dateThere?.value.split('-').reverse().join('.')
    const dateFrom = location.state.dateFrom?.value.split('-').reverse().join('.')

    // redirect if values empty
    useEffect(() => {
        if (cityTo.length == 0 || cityFrom.length == 0 || dateThere.length == 0) {
            navigate('/avia')
        }
        console.log(location)
    }, [])

    return (
        <div className={'result-wrapper'}>
            <section>
                <div className={'result'}>

                    <div className={'result__ticket'}>

                        <section>
                            <Ticket cityTo={cityTo}
                                    cityFrom={cityFrom}
                                    dateThere={dateThere}
                                    cityShortFrom={cityShortFrom}
                                    cityShortTo={cityShortTo}
                                    wayThere={wayThere}
                                    timeThere={timeThere}
                                    setTimeThere={setTimeThere}
                            />
                            {
                                dateFrom
                                    ? <Ticket2
                                        dateFrom={dateFrom}
                                        cityShortFrom={cityShortFrom}
                                        cityShortTo={cityShortTo}
                                        cityFrom={cityFrom}
                                        setTimeBack={setTimeBack}
                                        cityTo={cityTo}
                                        timeBack={timeBack}
                                        wayBack={wayBack}
                                    />
                                    : []
                            }
                        </section>

                        <div className={'result__price'}>
                            <p>{dateFrom ? priceArr[1] : priceArr[0]}</p>
                        </div>


                    </div>
                </div>
            </section>
        </div>
    )
}