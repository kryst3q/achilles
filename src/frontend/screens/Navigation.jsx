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

        return (
            <Router>
                <div>
                    <div>
                        <IndexLinkContainer to="/" activeClassName="active">
                            <img src={require('../assets/navbar/home.svg')} title={ t('workspace') } height={50} />
                        </IndexLinkContainer>
                    </div>
                    <div>
                        <IndexLinkContainer to="/notes" activeClassName="active">
                            <img src={require('../assets/navbar/notes.svg')} title={ t('notes') } height={50} />
                        </IndexLinkContainer>
                    </div>
                    <div>
                        <IndexLinkContainer to="/note/0" activeClassName="active">
                            <img src={require('../assets/navbar/note.svg')} title={ t('note') } height={50} />
                        </IndexLinkContainer>
                    </div>
                    <div>
                        <IndexLinkContainer to="/outfits" activeClassName="active">
                            <img src={require('../assets/navbar/outfit.svg')} title={ t('outfits') } height={50}/>
                        </IndexLinkContainer>
                    </div>
                    {/*<IndexLinkContainer to="/outfit" activeClassName="active">*/}
                        {/*<li>{ t('outfit') }</li>*/}
                    {/*</IndexLinkContainer>*/}
                    {/*<IndexLinkContainer to="/names" activeClassName="active">*/}
                        {/*<li>{ t('names') }</li>*/}
                    {/*</IndexLinkContainer>*/}
                    {/*<IndexLinkContainer to="/images" activeClassName="active">*/}
                        {/*<li>{ t('images') }</li>*/}
                    {/*</IndexLinkContainer>*/}
                    {/*<IndexLinkContainer to="/comparision" activeClassName="active">*/}
                        {/*<li>{ t('comparision') }</li>*/}
                    {/*</IndexLinkContainer>*/}

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
