export class FileUploader {
  uploadFunc;
  constructor(uploadFunc) {
    this.uploadFunc = uploadFunc;
  }
  upload(file) {
    console.log('uploading file...');
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          'https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-superJumbo.jpg?quality=75&auto=webp'
        );
      }, 10);
    });
  }
}
