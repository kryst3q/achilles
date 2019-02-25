import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from './webpack.config';

const port = 3000;
const compiler = webpack(config);
const app = express();

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.path
}));

app.listen(port, function (error) {
    if (error) {
        console.log(error);
    } else {
        open(`http://localhost:${port}`);
    }
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});
