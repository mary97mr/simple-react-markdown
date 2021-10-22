import './MarkdownEditor.css';
import React, { Component } from 'react';
import marked from 'marked';
import HTMLReactParser from 'html-react-parser';
import {starterText} from './starterText';


const PreviewText = props => <div id="preview">{HTMLReactParser(marked(props.text))}</div>;

const Editor = props => <textarea className="p-3" cols="" rows="15" value={props.text} onChange={props.handleChange} id="editor"></textarea>



class MarkdownEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text : starterText
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div className="row mt-5 rounded-3">
        <div className="col-md-6 p-4">
          <Editor text={this.state.text} handleChange={this.handleChange}/>
        </div>
        <div className="col-md-6 p-3">
          <PreviewText text={this.state.text}/>
        </div>
      </div>
    );
  }

}

export default MarkdownEditor;
