import { S3Object } from './s3-object';

describe('S3Object', () => {
  it('should create an instance', () => {
    expect(new S3Object()).toBeTruthy();
  });
});
