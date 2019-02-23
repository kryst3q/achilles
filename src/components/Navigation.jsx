import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { IndexLinkContainer } from 'react-router-bootstrap';
import Home from './Home';
import FootwearForm from './FootwearForm';
import OutfitForm from './OutfitForm.jsx';

class Navigation extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Nav className="flex-column">
                        <IndexLinkContainer to="/" activeClassName="active">
                            <Nav.Link >Home</Nav.Link>
                        </IndexLinkContainer>
                        <IndexLinkContainer to="/footwear" activeClassName="active">
                            <Nav.Link >Footwear</Nav.Link>
                        </IndexLinkContainer>
                        <IndexLinkContainer to="/outfit" activeClassName="active">
                            <Nav.Link>Outfit</Nav.Link>
                        </IndexLinkContainer>
                    </Nav>

                    <Route exact path="/" component={Home} />
                    <Route exact path="/footwear" component={FootwearForm} />
                    <Route exact path="/outfit" component={OutfitForm} />
                </div>
            </Router>
        );
    }
}

export default Navigation;
