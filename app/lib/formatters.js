import moment from 'moment';

export const formatTime = time =>
  moment(time).format('mm:ss');
