import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css"

const WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

const Forecast = ({ data }) => {

    const day = new Date().getDay();
    const  forecastDay =   WEEK.slice(day,WEEK.length).concat(WEEK.slice(0,day));
   

  return (
    <>
      <label className="title">Daily Forecast</label>
      <Accordion allowZeroExpanded>
        {data.list.filter((a,i)=> i%8 == 0).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
                <AccordionItemButton>
                    <div className="daily-item">
                        <img alt="weather forecast" className="icon-small" src={`icons/${item.weather[0].icon}.png`}/>
                        <label className="day">{forecastDay[index]}</label>
                        <label className="description">{item.weather[0].descripton}</label>
                        <label className="min-max"> {Math.round(item.main.temp)}°C</label>
                    </div>
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <div className="daily-details-grid">
                    <div className="daily-details-grid-item">
                        <label>Atmospheric Pressure</label>
                        <label>{item.main.pressure} hPa</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label>Humidity</label>
                        <label>{item.main.humidity} %</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label>Cloudiness</label>
                        <label>{item.clouds.all} %</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label>Wind Speed</label>
                        <label>{item.wind.speed} m/s</label>
                    </div>
                </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
