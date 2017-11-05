import React, { Component } from 'react';
import { default as Input } from './DashboardInput';

class DashboardEditBox extends Component {

  render() {
    console.log("RENDER EDITBOX");
    let data = this.props;
    let labels = [];



    return (
      <div> {JSON.stringify(this.props.data)}  <h1 /><h1/ ></div>
    );

    // if(this.state.edit) {
    //   let renderInput = "Input not supported";
    //
    //   if (this.props.structure.type === "short-text") {
    //     renderInput = <input ref={this.props.name} className="contentEditor__input" defaultValue={this.state.content} />
    //   }
    //
    //   return (
    //     <div className="dashboard__editBox dashboard__editBox--active">
    //       <label className="contentEditor__label"> <h5>{this.props.structure.description}</h5>
    //         {renderInput}
    //       </label>
    //       <button onClick={this._save} className="btn btn-success"> Save </button>
    //       <button onClick={this._cancel} className="btn btn-danger"> Close </button>
    //     </div>
    //   );
    //
    // } else {
    //   if (typeof(data) === "string") {
    //     labels = <div><h5> {this.props.structure.description} </h5> <div className="dashboard__editBox__label"> {this.props.data} </div> </div>;
    //   }
    //   else {
    //     labels.push(<h5 key="-1"> {this.props.structure.description} </h5>);
    //     for (let i in data) {
    //       labels.push(<div key={i} className="dashboard__editBox__label"> {JSON.stringify(data[i])} </div>);
    //     }
    //   }
    //
    //   return (
    //     <div className="dashboard__editBox">
    //       {labels}
    //       {/* <h5> {this.props.structure.description} </h5> <div className="dashboard__editBox__label"> {this.state.content} </div> */}
    //       <button onClick={this._edit} className="btn btn-info"> Edit </button>
    //     </div>
    //   );
    // }
  }
}

export default DashboardEditBox;
