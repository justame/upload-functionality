import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { FileUploader } from './UploadServices/FileUploader';
import { StreamReader } from './UploadServices/StreamReader';
import { Toast } from './UploadServices/Toast';
import { UploadService } from './UploadServices/UploadService';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  FileUploader;
  StreamReader;
  Toast;
  EditorCommands;

  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
    this.FileUploader = new FileUploader();
    this.StreamReader = new StreamReader();
    this.Toast = new Toast();
    this.EditorCommands = {
      setNode: (id, attrs) => console.log('set node', id, attrs),
      getAllBlocksKeys: () => ['123'],
    };
  }

  render() {
    const uploadService = new UploadService(
      this.EditorCommands,
      this.FileUploader,
      this.StreamReader,
      this.Toast
    );
    return (
      <div>
        <Hello name={this.state.name} />
        <p>Start editing to see some magic happen :)</p>
        <button onClick={() => uploadService.addFile({ type: 'file' }, '123')}>
          upload
        </button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
