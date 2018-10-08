'use strict';

const parseS3BucketKey = require('../');
const assert = require('assert');


let Bucket, Key;

// "s3://" protocol
({ Bucket, Key } = parseS3BucketKey('s3://bucket-name/file/path/sample.json'));
assert.equal(Bucket, 'bucket-name');
assert.equal(Key, 'file/path/sample.json');


// "https://" protocol
({ Bucket, Key } = parseS3BucketKey('https://s3.amazonaws.com/bucket-name/file/path/sample.json'));
assert.equal(Bucket, 'bucket-name');
assert.equal(Key, 'file/path/sample.json');
