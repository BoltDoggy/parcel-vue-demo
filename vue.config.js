var TypeScriptAsset = require('parcel-bundler/src/assets/TypeScriptAsset.js');

module.exports = {
    customCompilers: {
        ts: function (content, cb, compiler, filePath) {
            let ts = new TypeScriptAsset(filePath, {}, {});
            ts.contents = content;
            ts.process().then((res) => {
                cb(null, res.js);
            });
        }
    }
};
