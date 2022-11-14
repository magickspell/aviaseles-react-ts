interface cityI {
    city: string,
    cityShort: string,
}

export const cityArr: cityI[] = [
    {
        city: 'Москва',
        cityShort: 'MSK'
    },
    {
        city: 'Краснодар',
        cityShort: 'KRS'
    },
    {
        city: 'Сочи',
        cityShort: 'SCH'
    },
    {
        city: 'Астрахань',
        cityShort: 'AST'
    },
    {
        city: 'Тбилиси',
        cityShort: 'TBI'
    },
    {
        city: 'Батуми',
        cityShort: 'BTM'
    },
    {
        city: 'Актау',
        cityShort: 'AKT'
    },
    {
        city: 'Воронеж',
        cityShort: 'VRN'
    },
    {
        city: 'Бишкек',
        cityShort: 'BSK'
    },
    {
        city: 'Дубаи',
        cityShort: 'DUB'
    },
]

export const priceArr: string[] = [
    '4 150 ₽',
    '9 300 ₽',
]

export const timeArr: { start: string, end: string, diff: string, type: 'there' | 'back' }[] = [
    { start: '09:20', end: '11:05', diff: '1 ч. 45 мин.', type: 'there'},
    { start: '10:20', end: '14:20', diff: '4 ч. 00 мин.', type: 'there'},
    { start: '15:45', end: '20:13', diff: '4 ч. 27 мин.', type: 'there'},
    { start: '00:30', end: '10:00', diff: '9 ч. 30 мин.', type: 'back' },
    { start: '12:57', end: '21:33', diff: '8 ч. 36 мин.', type: 'back' },
]