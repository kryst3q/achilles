import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { IndexLinkContainer } from 'react-router-bootstrap';
import { withTranslation } from 'react-i18next';
import Home from '../components/Home/Home';
import ScreensOutfitList from '../screens/Outfit/List';
import ScreensOutfitForm from '../screens/Outfit/Form';
import ScreensNoteList from '../screens/Note/List';
import ScreensNoteEditor from '../screens/Note/Editor';
import ScreensComparision from '../screens/UI/Comparision';

class Navigation extends Component {
    render() {
        const {t} = this.props;

        return (
            <Router>
                <div>
                    <ul>
                        <IndexLinkContainer to="/" activeClassName="active">
                            <li>{ t('workspace') }</li>
                        </IndexLinkContainer>
                        <IndexLinkContainer to="/notes" activeClassName="active">
                            <li>{ t('notes') }</li>
                        </IndexLinkContainer>
                        <IndexLinkContainer to="/note" activeClassName="active">
                            <li>{ t('note') }</li>
                        </IndexLinkContainer>
                        <IndexLinkContainer to="/outfits" activeClassName="active">
                            <li>{ t('outfits') }</li>
                        </IndexLinkContainer>
                        <IndexLinkContainer to="/outfit" activeClassName="active">
                            <li>{ t('outfit') }</li>
                        </IndexLinkContainer>
                        <IndexLinkContainer to="/comparision" activeClassName="active">
                            <li>{ t('comparision') }</li>
                        </IndexLinkContainer>
                    </ul>

                    <Route exact path="/" component={Home} />
                    <Route exact path="/notes" component={ScreensNoteList} />
                    <Route exact path="/note" component={ScreensNoteEditor} />
                    <Route exact path="/outfits" component={ScreensOutfitList} />
                    <Route exact path="/outfit" component={ScreensOutfitForm} />
                    <Route exact path="/comparision" component={ScreensComparision} />
                </div>
            </Router>
        );
    }
}

export default withTranslation('navigation')(Navigation);
