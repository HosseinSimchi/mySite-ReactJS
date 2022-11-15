import {useState} from 'react';
import * as React from 'react'
// import Component's API from Material UI ( MUI )
import {TextField} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// To get the present time and use jalaliday
import dayjs from 'dayjs';
import jalaliday from 'jalaliday'
import DateFnsJalaliUtils from '@date-io/date-fns-jalali';
dayjs.extend(jalaliday)


// Using for dateAdapter's prop in LocalizationProvider
class ExtendedDateFnsJalaliUtils extends DateFnsJalaliUtils {

	instance = new DateFnsJalaliUtils();

	// Change short weekday names in 'fa' locale (see: node_modules/@mui/lab/CalendarPicker/PickersCalendar.js#L110):
	getWeekdays = () => {
		return  ['ج', 'پ', 'چ', 'س', 'د', 'ی', 'ش'] // ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'] << ['ش', '1', '2', '3', '4', '5', 'ج'] ( another options )
	};

	formatByString = (date: Date, formatString: string) => {
		let formattedString = this.instance.formatByString(date, formatString);
		if (formatString === 'YYYY/MM/dd-hh:mm' && date != null && date.getHours() === 0) { // Fix incorrect formatting for hour = 00:
			formattedString = formattedString.replace('-12:', '-00:');
		}
		if (formattedString.includes('یک‌شنبه')) {
			formattedString = formattedString.replace('یک‌شنبه', 'یکشنبه');
		}
		return formattedString;
	};
}


//Create datePicker Component
const datePicker = () => {    

    //Variables
    const date = dayjs().calendar('jalali')
    const [value, setValue] = useState(date);

    //To handle changes in TextFiled
    const handleChange = (newValue) => {
      setValue(newValue);
    };

    //return functions 
    return (
        <LocalizationProvider dateAdapter={ExtendedDateFnsJalaliUtils}>
                <DatePicker
                    label="تاریخ را وارد کنید"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => {
                    return <TextField  {...params} />}}
                />
        </LocalizationProvider>

    )
}

export default datePicker;


