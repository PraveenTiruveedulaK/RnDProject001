import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {FAB} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('screen');

class TabOneScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FAB
          icon={<Icon name="plus" size={25} color="white" />}
          placement="right"
          size="large"
          color="#52006A"
        />
        <Calendar
          style={styles.CalendarStyle}
          theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#ffffff',
            textSectionTitleColor: '#b6c1cd',
            textSectionTitleDisabledColor: '#d9e1e8',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#00adf5',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: 'orange',
            disabledArrowColor: '#d9e1e8',
            monthTextColor: 'blue',
            indicatorColor: 'blue',
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 20,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 13,
            'stylesheet.calendar.header': {
              day: {
                margin: 2,
                flexDirection: 'row',
                justifyContent: 'space-between',
              },
            },
          }}
          // Initially visible month.
          Default={new Date()}
          // current={'2021-10-01'}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={'2012-05-10'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2022-05-30'}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={day => {
            console.log('selected day', day);
          }}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={day => {
            console.log('selected day', day);
          }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={' MMMM yyyy'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={month => {
            console.log('month changed', month);
          }}
          // Hide month navigation arrows. Default = false
          hideArrows={false}
          // Replace default arrows with custom ones (direction can be 'left' or 'right')
          // renderArrow={direction => <Arrow />}
          // Do not show days of other months in month page. Default = false
          //hideExtraDays={true}
          // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={false}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
          firstDay={1}
          // Hide day names. Default = false
          //hideDayNames={true}
          // Show week numbers to the left. Default = false
          showWeekNumbers={false}
          // Handler which gets executed when press arrow icon left. It receive a callback can go back month
          onPressArrowLeft={subtractMonth => subtractMonth()}
          // Handler which gets executed when press arrow icon right. It receive a callback can go next month
          onPressArrowRight={addMonth => addMonth()}
          // Disable left arrow. Default = false
          disableArrowLeft={false}
          // Disable right arrow. Default = false
          disableArrowRight={false}
          // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
          disableAllTouchEventsForDisabledDays={true}
          // Replace default month and year title with custom one. the function receive a date as paramete
          // Enable the option to swipe between months. Default = false
          enableSwipeMonths={true}
          markingType={'custom'}
          markedDates={{
            '2021-10-03': {
              customStyles: {
                container: {
                  backgroundColor: '#B980F0',
                },
                text: {
                  color: 'white',
                  fontWeight: 'bold',
                },
              },
            },
            '2021-09-19': {
              customStyles: {
                container: {
                  backgroundColor: '#B980F0',
                },
                text: {
                  color: 'white',
                  fontWeight: 'bold',
                },
              },
            },
            '2021-09-03': {
              customStyles: {
                container: {
                  backgroundColor: '#B980F0',
                },
                text: {
                  color: 'white',
                  fontWeight: 'bold',
                },
              },
            },
            '2021-08-19': {
              customStyles: {
                container: {
                  backgroundColor: '#B980F0',
                },
                text: {
                  color: 'white',
                  fontWeight: 'bold',
                },
              },
            },
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
  },
  CalendarStyle: {
    height: 350,
    width: width * 0.95,
  },
});

export default TabOneScreen;
