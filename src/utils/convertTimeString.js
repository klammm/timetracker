import moment from 'moment';

export const convertDateToString = (date) => {
  return moment(date).format('h:mma')
}