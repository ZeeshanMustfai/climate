import React, { useState } from "react";
import { Animate, AnimateGroup } from "react-simple-animate";
import CustomRadio from "./CustomRadio";
import Slide from "./Slide";

function Animation() {
  const [selected, setSelected] = useState("one");
  const handleRadioBtn = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSelected(e.target.value);
  };
  const isRadioSelected = (value: string): boolean => selected === value;

  return (
    <>
      <Slide>
        <AnimateGroup play>
          <Animate
            start={{ opacity: 0 }}
            end={{ opacity: 1 }}
            sequenceIndex={0}
          >
            <CustomRadio
              name="radioBtn"
              label={"Electricity is measured in units called watts"}
              onChange={handleRadioBtn}
              value="one"
              checked={isRadioSelected("one")}
            />
          </Animate>
          <Animate
            start={{ opacity: 0 }}
            end={{ opacity: 1 }}
            sequenceIndex={1}
          >
            <CustomRadio
              name="radioBtn"
              label={"Second One"}
              onChange={handleRadioBtn}
              value="two"
              checked={isRadioSelected("two")}
            />
          </Animate>
          <Animate
            start={{ opacity: 0 }}
            end={{ opacity: 1 }}
            sequenceIndex={2}
          >
            <CustomRadio
              name="radioBtn"
              label={"Third One"}
              onChange={handleRadioBtn}
              value="third"
              checked={isRadioSelected("third")}
            />
          </Animate>
        </AnimateGroup>
      </Slide>
    </>
  );
}
export default Animation;
