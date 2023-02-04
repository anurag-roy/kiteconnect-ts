import packageInfo from '../package.json';

export function getPackageInfo() {
  return packageInfo;
}

export function getUserAgent() {
  return 'kiteconnect-ts/' + packageInfo.version;
}
