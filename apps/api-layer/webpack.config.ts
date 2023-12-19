import { composePlugins, withNx } from '@nx/webpack';

export default composePlugins(withNx(), (config) => config);
