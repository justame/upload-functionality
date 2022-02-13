export class StreamReader {
  read(file) {
    console.log('reading file...');
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          src: 'blob.com',
        });
      }, 10);
    });
  }
}
