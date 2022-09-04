import "./forecast.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const ForecastWeather = ({ data }) => {
  return (
    <>
      <h3 className="forecast-title">Daily</h3>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, index) => (
          <AccordionItem>
            <AccordionItemHeading></AccordionItemHeading>
            <AccordionItemButton></AccordionItemButton>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default ForecastWeather;
