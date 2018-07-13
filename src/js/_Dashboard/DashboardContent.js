import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import propTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from './Components/Card';
import {default as Editor} from './Components/DashboardContentEditor'
import { getDataByStructure, updateData, getCurrentID, addPost } from '../Actions/dashboardActions';


class DashboardContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isFetched: true
    };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleAddPost = this._handleAddPost.bind(this);
  }

  componentDidMount() {
    const dispatchData = getDataByStructure(this.props.match.url.replace('/dashboard/panel', ''));
    this.props.dispatch(dispatchData);
    const dispatchID = getCurrentID();
    this.props.dispatch(dispatchID);
  }

  _handleSubmit(url, node, data) {
    url = url.replace('/dashboard/panel/', '');
    this.props.dispatch(updateData(`${url}/`, node, data));
  }

  _handleAddPost(postStructure) {
    let newPost = postStructure;
    function goDeeper(obj) {
      for (let key in obj) {
        if (obj.hasOwnProperty(key) && typeof obj[key] === 'object' && typeof obj[key].default === 'undefined') {
          goDeeper(obj[key]);
        }
        else if(typeof obj[key] === 'object') {
          obj[key] = obj[key].default;
        } else {
          delete obj[key];
        }
      }
    }
    goDeeper(newPost);
    newPost = { ...newPost, id: this.props.currentID.postID + 1 };
    addPost(this.props.currentID.postID, newPost);
    
  }

  render() {
    if (!this.props.content.data)
      return (<div className='addictiv_isLoading'> Content is loading </div>);

    console.log(this.props);
    let props = this.props;
    let navKeys = Object.keys(this.props.childNodes);
    let cards = [];
    let isEditing = this.props.match.path.split('/')[this.props.match.path.split('/').length - 1] === ':id';

    if (this.props.childNodes.structure === undefined) {
      cards = navKeys.map((item, n) => {
        return <Card key={n} title={item} match={props.match}/>;
      });

    } else if (this.props.childNodes.structure === 'list' && !isEditing){
      let post = this.props.content.data;
      cards.push(<Card key={-1} title='Add new post' addCard createPost={() => this._handleAddPost(props.childNodes)} />);
      for (let i in post) {
        cards.push(<Card key={i} title={post[i].title} match={props.match} content={post[i]} editCard />)
      }

    } else if (this.props.childNodes.structure === 'list' && isEditing) {
      cards = <Editor content={this.props.content} structure={this.props.childNodes} submit={this._handleSubmit} match={props.match} />;


    } else if (this.props.childNodes.structure === 'editor'){
      cards = <Editor content={this.props.content} structure={this.props.childNodes} submit={this._handleSubmit} match={props.match} />;
    }

    return (
      <div className='dashboard__content'>
        {cards}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    content: state.dashboard,
    currentID: state.dashboard.currentID
  };
}

export default withRouter(connect(mapStateToProps)(DashboardContent));
