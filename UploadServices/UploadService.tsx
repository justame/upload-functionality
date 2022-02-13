export class UploadService {
  EditorCommands;
  FileUploader;
  StreamReader;
  Toast;
  DataBuilder;

  constructor(EditorCommands, FileUploader, StreamReader, Toast, DataBuilder) {
    this.FileUploader = FileUploader;
    this.StreamReader = StreamReader;
    this.Toast = Toast;
    this.EditorCommands = EditorCommands;
    this.DataBuilder = DataBuilder;
  }
  async addFile(file, nodeId) {
    console.log('in upload service add file');
    const blob = await this.StreamReader.read(file);
    this.EditorCommands.setNode(nodeId, { id: blob.src, loading: true });
    const uploadedFile = await this.FileUploader.upload(blob);
    if (uploadedFile.error) {
      this.Toast.notify('fail to upload');
    } else if (!this.EditorCommands.getAllBlocksKeys().includes(nodeId)) {
      return;
    } else {
      this.EditorCommands.setNode(nodeId, {
        src: uploadedFile.src,
        loading: false,
      });
    }
  }
}
