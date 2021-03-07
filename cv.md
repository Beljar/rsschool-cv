# Ilia Kotov
Email: [iliavkotov@gmail.com](mailto:iliavkotov@gmail.com)\
Telegram: [#IliaCat](https://t.me/IliaCat)
## Junior Front End Developer
While having some experience in non-profit projects currently looking to apply in real production project. I have vast experience working with CAD systems in past and I am interested in computational generative design, so would be particularly interested in participating in some kind of on-line designing/cad system projects.
### Skills
* Javascript
* HTML 
* CSS
* BEM
* React, Redux
* Python, Selenium
* Git
### Code example
```javascript
import React from 'react';
import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import HeaderComponent from './HeaderComponent';
import EventPicker from './EventPickerComponent';
import EventCard from './EventCardComponent';
import Features from './FeaturesComponent';
import FooterComponent from './FooterComponent';

const mapStateToProps = state => {
    return {
        events: state.events,
        activeEventId: state.activeEventId
    }
}

const mapDispatchToProps = dispatch => (
    {
        selectEvent: (activeEventId) => dispatch(selectEvent(activeEventId))
    }
)

class Main extends Component {
    constructor(props) {
        super(props);
    }
    eventSelectHandle(eventId) {
        console.log("clicked");
        console.log(eventId);
        this.setState(
            { activeEventId: eventId }
        )
    }
    toggleMobileMenu() {
        const elem = document.getElementById("menu");
        const className = "on";
        let cArr = elem.className.split(" ");
        if (elem.classList.contains("on")) { elem.classList.remove("on"); }
        else {
            elem.classList.add("on");
        }
    }
    render() {
        const activeIvent = this.props.events.filter((event) => { return (event.id == this.props.activeEventId) })[0];
        return (
            <div>
                <HeaderComponent />
                <EventPicker events={this.props.events} activeEventId={this.props.activeEventId} selectEvent={this.props.selectEvent} />
                <EventCard event={activeIvent} />
                <Features />
                <FooterComponent />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
```