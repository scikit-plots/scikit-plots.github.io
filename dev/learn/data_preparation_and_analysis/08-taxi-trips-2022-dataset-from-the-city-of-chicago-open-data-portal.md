# Taxi Trips – 2022 dataset from the City of Chicago open data portal[#](#taxi-trips-2022-dataset-from-the-city-of-chicago-open-data-portal "Link to this heading")

****Stage 2 · 🔗 Associations & Correlation**** · Lesson 08 of 56 · **beginner**

[◀ Previous · Discovering Associations Through Data: From Everyday Patterns to Chicago Taxi Trips (September 2022)](07-discovering-associations-through-data-from-everyday-patterns-to-chicago-taxi-trips-september-2022.html) · [Next · Objective Selection of the Bin Width for a Time Histogram ▶](09-objective-selection-of-the-bin-width-for-a-time-histogram.html)

## An open, real dataset[#](#an-open-real-dataset "Link to this heading")

The running dataset is the ****Taxi Trips**** file from the ****City of Chicago open data portal**** — a real,
public record of taxi journeys the city collects as a regulator. It is a favourite teaching set
because it is large, genuinely messy, and full of intuitive relationships to explore.

## What’s in a row[#](#what-s-in-a-row "Link to this heading")

Each ****row is one trip****, with a unique ID and a timestamp, described by around two dozen fields. The
most useful for association work are the numeric ones — ****Trip Miles**** (distance), ****Trip Seconds****
(duration), ****Fare****, ****Tips****, ****Tolls**** and ****Trip Total**** — alongside categorical fields like
****Payment Type**** and ****Company****, and location fields (****pickup / dropoff community area****, census
tract, and centroid latitude / longitude). Most columns load as floats or text.

## Scale and loading[#](#scale-and-loading "Link to this heading")

The full record runs to ****hundreds of millions**** of trips over the years; a single week of September
2022 is already a workable subset of tens of thousands. It is published through the city’s ****Socrata****
portal, so you can download a CSV and read it with `pandas.read_csv` (or pull a filtered slice via
the Socrata API) rather than loading everything at once.

## It needs cleaning[#](#it-needs-cleaning "Link to this heading")

Being real, it needs the ****preparation**** this course is about. Records appear with trip end ****before****
start, absent durations, impossible distances (over 100 miles), fares below the city’s base charge,
and missing community areas for trips outside Chicago. Filtering these out is a prerequisite before
any association or model is trustworthy — a concrete instance of why data preparation dominates the
workflow.

> **See also**
> ****Related lessons:**** [Discovering Associations Through Data: From Everyday Patterns to Chicago Taxi Trips (September 2022)](07-discovering-associations-through-data-from-everyday-patterns-to-chicago-taxi-trips-september-2022.html) · [The First Step in Knowing Your Data](05-the-first-step-in-knowing-your-data.html) · [Measuring Associations Between Two Continuous Variables](11-measuring-associations-between-two-continuous-variables.html) · [Objective Selection of the Bin Width for a Time Histogram](09-objective-selection-of-the-bin-width-for-a-time-histogram.html)

****Source**** (context, re-expressed in our own words): <https://insightful-data-lab.com/2026/01/14/taxi-trips-2022-dataset-from-the-city-of-chicago-open-data-portal/>

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data preparation](../../_tags/topic-data-preparation.html) [level: beginner](../../_tags/level-beginner.html)