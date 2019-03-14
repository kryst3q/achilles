import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { IndexLinkContainer } from 'react-router-bootstrap';
import { withTranslation } from 'react-i18next';
import Home from '../components/Home/Home.jsx';
import ScreensOutfitList from '../screens/Outfit/List.jsx';
import ScreensOutfitForm from '../screens/Outfit/Form.jsx';

class Navigation extends Component {
    render() {
        const {t} = this.props;

        return (
            <Router>
                <div>
                    <Nav className="flex-column">
                        <IndexLinkContainer to="/" activeClassName="active">
                            <Nav.Link >{ t('workspace') }</Nav.Link>
                        </IndexLinkContainer>
                        <IndexLinkContainer to="/outfits" activeClassName="active">
                            <Nav.Link>{ t('outfits') }</Nav.Link>
                        </IndexLinkContainer>
                        <IndexLinkContainer to="/outfit" activeClassName="active">
                            <Nav.Link>{ t('outfit') }</Nav.Link>
                        </IndexLinkContainer>
                    </Nav>

                    <Route exact path="/" component={Home} />
                    <Route exact path="/outfits" component={ScreensOutfitList} />
                    <Route exact path="/outfit" component={ScreensOutfitForm} />
                </div>
            </Router>
        );
    }
}

export default withTranslation('navigation')(Navigation);
