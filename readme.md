# Events website
A full-stack website created with create-next-app that shows the upcoming events.

download the UI from here: (.fig file - Figma file) https://1drv.ms/u/s!AtIoK8pbai_RhRmIYUxqxvxpxOKH?e=aIsweo

# About this project:
This is a full-stack events website. It shows the upcoming events and has some functionalities.
Since this project is created on top of Nextjs, both front-end and back-end are in the same directory (/src).
in case of the database, I used MongoDB and mongoose library to handle the operations and queries.
it has multiple pages and for each event, dynamically it creates a page base on the template.
- users can log in/logout
- users can comment below the events
- logged in users can sign up for an event
- if an event is near (if it will hold in less than a coming month), automatically a badge of "near event" will be added at the top of the event card.
- if less than 5 signups are remaining, a badge of warning about running out of the signups will be shown at the bottom of the event card.
- admin can add events in URL/admin (right now there is no authorization for admin but it can be added easily)
