// @ts-nocheck
import React from 'react';
import config from '@@/dumi/config';
import demos from '@@/dumi/demos';
import apis from '@@/dumi/apis';
import Layout from 'D:/git/fastapi/fastapi-front-ant/node_modules/@umijs/preset-dumi/lib/theme/layout';

export default (props) => <Layout {...props} config={config} demos={demos} apis={apis} />;
