import { eachDayOfInterval, format, parseISO } from 'date-fns'

import { IMarkedDateProps, IDayProps } from '.'

import { theme } from '../../styles/theme'

import { getPlataformDate } from './getPlataformDate'


export function generateInterval( start: IDayProps, end: IDayProps){

let interval: IMarkedDateProps = {}


eachDayOfInterval({ start: parseISO(start.dateString), end: parseISO(end.dateString)})
.forEach((item) => {
    const date = format(getPlataformDate(item), 'yyyy-MM-dd');

     interval = {
        ...interval,
        [date]: {
            color: start.dateString === date || end.dateString === date
            ? theme.colors.main : theme.colors.main_light,
            textColor: start.dateString === date || end.dateString === date
            ? theme.colors.main_light : theme.colors.main        }
    }


})

return interval;

}