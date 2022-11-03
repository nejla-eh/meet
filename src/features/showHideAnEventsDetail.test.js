import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from "enzyme";
import App from "../App";

const feature = loadFeature(
  "./src/features/showHideAnEventsDetails.feature.txt"
);

defineFeature(feature, (test) => {
  let AppWrapper;
  test("An event element is collapsed by default", ({ given, when, then }) => {
    given("the event’s page was open", () => {});

    when("the user checks the page", () => {
      AppWrapper = mount(<App />);
    });

    then("event element would be collapsed", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event .event-details")).toHaveLength(0);
    });
  });

  test("User can expand an event to see its details", ({
    given,
    when,
    then,
  }) => {
    given("user wanted to see event’s details", () => {
      AppWrapper = mount(<App />);
    });

    when("the user clicks on an event", () => {
      AppWrapper.update();
      AppWrapper.find(".event .details-btn").at(0).simulate("click");
    });

    then("the user should see expanded event element", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event .event-details")).toHaveLength(1);
    });
  });

  test("User can collapse an event to hide its details", ({
    given,
    when,
    then,
  }) => {
    given("user hasn’t searched for event’s details", async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      AppWrapper.find(".event .details-btn").at(0).simulate("click");
    });

    when("the user clicks again on an event", () => {
      AppWrapper.update();
      AppWrapper.find(".event .details-btn").at(0).simulate("click");
    });

    then("the event element should collapse", () => {
      expect(AppWrapper.find(".event .event-details")).toHaveLength(0);
    });
  });
});
