import moment from "moment";

export function formatCurrency(num) {
  return Number(num.toFixed(1)).toLocaleString() + " € ";
}
export function formatDate(datetime){
  return moment(datetime).format('DD-MM-YYYY');
}
export function formatTime(datetime){
  return moment(datetime).format('HH:mm');
}