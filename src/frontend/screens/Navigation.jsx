import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { IndexLinkContainer } from 'react-router-bootstrap';
import { withTranslation } from 'react-i18next';
import Home from '../components/Home/Home';
import OutfitList from '../components/Outfit/List';
import OutfitForm from '../components/Outfit/Form';
import NoteList from '../components/Note/List';
import NoteEditor from '../components/Note/Editor';
import Comparision from '../components/UI/Comparision/Comparision';
import NameList from '../components/Name/List';
import ImageList from '../components/Image/List';
import ImageForm from '../components/Image/Form';

class Navigation extends Component {
    render() {
        const {t} = this.props;
        const navbarIconHeight = 50;

        return (
            <Router>
                <div>
                    <div>
                        <IndexLinkContainer to="/" activeClassName="active">
                            <img
                                src={require('../assets/navbar/home.svg')}
                                title={ t('workspace') }
                                height={navbarIconHeight}
                            />
                        </IndexLinkContainer>
                    </div>
                    <div>
                        <IndexLinkContainer to="/notes" activeClassName="active">
                            <img
                                src={require('../assets/navbar/notes.svg')}
                                title={ t('notes') }
                                height={navbarIconHeight}
                            />
                        </IndexLinkContainer>
                    </div>
                    <div>
                        <IndexLinkContainer to="/note/0" activeClassName="active">
                            <img
                                src={require('../assets/navbar/note.svg')}
                                title={ t('note') }
                                height={navbarIconHeight}
                            />
                        </IndexLinkContainer>
                    </div>
                    <div>
                        <IndexLinkContainer to="/outfits" activeClassName="active">
                            <img
                                src={require('../assets/navbar/outfits.svg')}
                                title={ t('outfits') }
                                height={navbarIconHeight}
                            />
                        </IndexLinkContainer>
                    </div>
                    <div>
                        <IndexLinkContainer to="/outfit" activeClassName="active">
                            <img
                                src={require('../assets/navbar/outfit.svg')}
                                title={ t('outfit') }
                                height={navbarIconHeight}
                            />
                        </IndexLinkContainer>
                    </div>
                    <div>
                        <IndexLinkContainer to="/names" activeClassName="active">
                            <img
                                src={require('../assets/navbar/names.svg')}
                                title={ t('names') }
                                height={navbarIconHeight}
                            />
                        </IndexLinkContainer>
                    </div>
                    <div>
                        <IndexLinkContainer to="/images" activeClassName="active">
                            <img
                                src={require('../assets/navbar/images.svg')}
                                title={ t('images') }
                                height={navbarIconHeight}
                            />
                        </IndexLinkContainer>
                    </div>
                    <div>
                        <IndexLinkContainer to="/comparision" activeClassName="active">
                            <img
                                src={require('../assets/navbar/comparision.svg')}
                                title={ t('comparision') }
                                height={navbarIconHeight}
                            />
                        </IndexLinkContainer>
                    </div>

                    <Route exact path="/" component={Home} />
                    <Route exact path="/notes" component={NoteList} />
                    <Route exact path="/note/:noteId" component={NoteEditor} />
                    <Route exact path="/outfits" component={OutfitList} />
                    <Route exact path="/outfit" component={OutfitForm} />
                    <Route exact path="/comparision" component={Comparision} />
                    <Route exact path="/names" component={NameList} />
                    <Route exact path="/images" component={ImageList} />
                    <Route exact path="/image/:imageId" component={ImageForm} />
                </div>
            </Router>
        );
    }
}

export default withTranslation('navigation')(Navigation);
