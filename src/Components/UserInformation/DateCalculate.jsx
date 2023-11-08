import moment from 'moment';
import PropTypes from 'prop-types'

const DateCalculate = ({ date, setIsDateValid }) => {
    const currentDate = moment().format("YY-MM-DD");
    console.log(currentDate.split("-"));
    const currentDateInt = parseInt(currentDate.split("-")[2]);
    console.log(currentDateInt)
    const givenDate2 = parseInt(date.split("-")[2]);
    const dateDifference2 =  currentDateInt-givenDate2;
    console.log(dateDifference2)

    if (dateDifference2 > 1) {
        setIsDateValid(true);
    } else {
        setIsDateValid(false);
    }
};

DateCalculate.propTypes = {
    date: PropTypes.string.isRequired,
    date2: PropTypes.string.isRequired,
    setIsDateValid: PropTypes.func.isRequired
}

export default DateCalculate;