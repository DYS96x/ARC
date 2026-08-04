/**
 * ARC Bootstrap
 *
 * Starts the ARC runtime.
 */


import {
  ARCPlatform
} from "./platform";


export function bootstrap(): ARCPlatform {


  const platform =
    new ARCPlatform();


  console.log(
    "ARC SYSTEM ONLINE"
  );


  return platform;

}