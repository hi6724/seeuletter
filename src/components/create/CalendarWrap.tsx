'use client';

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';
import moment from 'moment';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

interface CalendarWrapProps {
  onDateChange: (date: string) => void;
}

const CalendarWrap = ({ onDateChange }: CalendarWrapProps) => {
  const today = new Date();
  const [date, setDate] = useState<Value>(today);

  const handleDateChange = (newDate: Value) => {
    setDate(newDate);

    if (newDate instanceof Date) {
      const formattedDate = moment(newDate).format('YYYY-MM-DD');
      onDateChange(formattedDate);

      // 이전 날짜 선택 시 알림창 띄우기
      const todayDateString = moment(today).format('YYYY-MM-DD');
      if (moment(newDate).isBefore(todayDateString)) {
        alert('오늘보다 이전 날짜는 선택할 수 없습니다.');
      }
    }
  };

  return (
    <StyledCalendarWrapper>
      <StyledCalendar
        value={date}
        onChange={handleDateChange}
        calendarType="gregory"
        formatDay={(locale, date) => moment(date).format('DD')}
        next2Label={null} // +1년 & +10년 이동 버튼 숨기기
        prev2Label={null} // -1년 & -10년 이동 버튼 숨기기
        minDetail="year" // 10년단위 년도 숨기기
        locale="en-US"
      />
    </StyledCalendarWrapper>
  );
};

export default CalendarWrap;

const StyledCalendarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  .react-calendar {
    border: none;
    background: transparent;
  }

  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
    font-weight: 800;
  }

  //day 타일 한개 커스텀
  .react-calendar__tile {
    width: 44px;
    height: 44px;
    border-radius: 50%;
  }

  .react-calendar__month-view__days__day--weekend {
    // 주말 글씨 빨간색 없애기
    color: var(--festie-gray-800, #3a3a3a);
  }

  //오늘 날짜 커스텀
  .react-calendar__tile--now {
    background: #788ca7 !important; /* 강제 적용 */
    color: black !important;
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #788ca7;
    color: ;
  }

  .react-calendar__tile--active {
    color: white;
    background-color: #222f40;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: #222f40;
    color: white;
  }
`;

export const StyledCalendar = styled(Calendar)``;
