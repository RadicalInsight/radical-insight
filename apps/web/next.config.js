//@ts-check
// eslint-disable @typescript-eslint/no-var-requires

const { withNx } = require('@nrwl/next/plugins/with-nx');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = withNx(withBundleAnalyzer(nextConfig));

