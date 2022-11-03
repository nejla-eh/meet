import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from "enzyme";
import App from "../App";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature.txt");

defineFeature(feature, (test) => {
  let AppWrapper;
  test("When user hasn’t specified a number, 32 is the default number", ({
    given,
    when,
    then,
  }) => {
    given("user hasn’t specified the number of events", () => {});

    when("the user opens the events page for given city", async () => {
      AppWrapper = await mount(<App />);
    });

    then("the user should see 32 events", () => {
      AppWrapper.update();
      expect(AppWrapper.state("numberOfEvents")).toEqual(32);
    });
  });

  test("User can change the number of events they want to see", ({
    given,
    when,
    then,
  }) => {
    given("the events page is open", async () => {
      AppWrapper = await mount(<App />);
    });

    when("the user change the number of events", () => {
      AppWrapper.update();
      const NumberOfEventsWrapper = AppWrapper.find("NumberOfEvents");
      const eventObject = { target: { value: 5 } };
      NumberOfEventsWrapper.find(".num").simulate("change", eventObject);
    });

    then("the user should see exact number of events they required", () => {
      AppWrapper.update();
      expect(AppWrapper.state("numberOfEvents")).toEqual(5);
    });
  });
});
