import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import List from "../../molecules/List";
import BoardTemplate from "../../templates/Board";

import * as date from "../../utils/date";
import * as dayService from "../../services/days";
import NavIcon from "../../atoms/NavIcon";

export default function Board() {
  const [days, setDays] = useState([]);
  const [currentWeek, setCurrentWeek] = useState([]);
  const [primaryAxisX, setPrimaryAxisX] = useState(0);

  const handleNavWeekBack = () => {
    setCurrentWeek(
      days.filter((day) => {
        return day.numberOfTheWeek === (currentWeek[0] && currentWeek[0].numberOfTheWeek - 1);
      })
    );
  };

  const handleNavDayBack = () => {
    const bkpCurrentWeek = Object.assign([], currentWeek);
    const newDay = days.find((day) => {
      return day.numberOfTheDay === currentWeek[0].numberOfTheDay - 1;
    });
    bkpCurrentWeek.unshift(newDay);
    setCurrentWeek(bkpCurrentWeek);
    setPrimaryAxisX(primaryAxisX + 14.3);
  };

  const handleNavWeekForward = () => {
    setCurrentWeek(
      days.filter((day) => {
        return day.numberOfTheWeek === (currentWeek[0] && currentWeek[0].numberOfTheWeek + 1);
      })
    );
  };

  const handleNavDayForward = () => {
    const bkpCurrentWeek = Object.assign([], currentWeek);
    const newDay = days.find((day) => {
      return day.numberOfTheDay === currentWeek[0].numberOfTheDay + 1;
    });
    bkpCurrentWeek.push(newDay);
    setCurrentWeek(bkpCurrentWeek);
    setPrimaryAxisX(primaryAxisX - 14.3);
  };

  const handleNavWeekOriginal = () => {
    setPrimaryAxisX(0);
    setCurrentWeek(
      days.filter((day) => {
        return day.numberOfTheWeek === date.getCurrentWeekNumber();
      })
    );
  };

  useEffect(() => {
    async function loadDays() {
      const days = await dayService.days();
      setDays(days);
      setCurrentWeek(
        days.filter((day) => {
          return day.numberOfTheWeek === date.getCurrentWeekNumber();
        })
      );
    }
    loadDays();
  }, []);

  return (
    <>
      <Helmet title="FreeTeuxDeux - Board" />
      <BoardTemplate
        primaryAxisX={primaryAxisX}
        primary={
          <>
            {currentWeek.map((dayOfTheCurrentWeek) => {
              return (
                <List
                  id={dayOfTheCurrentWeek.id}
                  key={dayOfTheCurrentWeek.id}
                  disabled={date.getDisabledDates(dayOfTheCurrentWeek.dayOfTheYear)}
                  title={dayOfTheCurrentWeek.dayOfTheWeek}
                  subtitle={dayOfTheCurrentWeek.dayOfTheYear}
                  last={days[dayOfTheCurrentWeek.id] && days[dayOfTheCurrentWeek.id].numberOfTheWeek > dayOfTheCurrentWeek.numberOfTheWeek}
                />
              );
            })}
          </>
        }
        primaryNavLeft={
          <>
            <NavIcon primary icon="angle-left" onClick={() => handleNavDayBack()} />
            <NavIcon icon="angle-double-left" onClick={() => handleNavWeekBack()} />
            <NavIcon icon="home" onClick={() => handleNavWeekOriginal()} />
          </>
        }
        primaryNavRight={
          <>
            <NavIcon primary icon="angle-right" onClick={() => handleNavDayForward()} />
            <NavIcon icon="angle-double-right" onClick={() => handleNavWeekForward()} />
            <NavIcon icon="calendar-alt" />
          </>
        }
        secondaryNavLeft={
          <>
            <NavIcon primary icon="angle-left" onClick={() => alert("secondaryNavLeft")} />
          </>
        }
        secondaryNavRight={
          <>
            <NavIcon primary icon="angle-right" onClick={() => alert("secondaryNavRight")} />
          </>
        }
        secondary={
          <>
            <h1>h2</h1>
          </>
        }
      ></BoardTemplate>
    </>
  );
}
