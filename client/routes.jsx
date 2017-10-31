import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from "./layouts/main_layout";
import Home from '../imports/ui/Home.jsx';
import Roadmap from '../imports/ui/Roadmap.jsx';
import Tickets from '../imports/ui/Tickets.jsx';

FlowRouter.route('/', {
   action() {
       mount(MainLayout, {
           content: (<Home />)
       })
   }
});

FlowRouter.route('/tickets', {
    action() {
        mount(MainLayout, {
            content: (<Tickets />)
        })
    }
});

FlowRouter.route('/roadmap', {
    action() {
        mount(MainLayout, {
            content: (<Roadmap />)
        })
    }
});