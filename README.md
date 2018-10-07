# parse-s3-bucket-key

Parse Bucket and Key from an S3 object link.


## Installation

```bash
    npm install parse-s3-bucket-key
```

## Usage

```javascript
// It also supports "s3://" protocol: 's3://bucket-name/file/path/sample.json';
const {Bucket, Key} = parseS3BucketKey('https://s3.amazonaws.com/bucket-name/file/path/sample.json');

// Result:
{
    Bucket: 'bucket-name',
    Key: 'file/path/sample.json'
}
```