const url = require('url');

function parseS3BucketKey(s3Path) {
    let Bucket, Key;
    let { protocol, host, path } = url.parse(s3Path);

    if (protocol === 's3:') {
        Bucket = host;
        Key = path.replace(/^\//, '');
    }

    if (protocol === 'https:' && host === 's3.amazonaws.com') {
        [, Bucket, Key] = path.match(/^\/([^/]+)\/(.+)/);
    }

    return { Bucket, Key };
}

module.exports = parseS3BucketKey;