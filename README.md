# parse-s3-bucket-key

[![Build Status](https://api.travis-ci.org/DiegoZoracKy/parse-s3-bucket-key.svg)](https://travis-ci.org/DiegoZoracKy/parse-s3-bucket-key) [![npm](https://img.shields.io/npm/v/parse-s3-bucket-key.svg)]() [![npm](https://img.shields.io/npm/l/parse-s3-bucket-key.svg)]()

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