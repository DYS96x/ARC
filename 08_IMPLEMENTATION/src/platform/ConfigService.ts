/**
 * ARC Configuration Service
 *
 * Controls runtime configuration,
 * environment settings and feature flags.
 */


export type Environment =
  | "DEVELOPMENT"
  | "TEST"
  | "PRODUCTION";


export interface Config {

  environment: Environment;

  features: Record<string, boolean>;

  settings: Record<string, unknown>;

}


export class ConfigService {


  private config: Config;


  constructor() {

    this.config = {

      environment: "DEVELOPMENT",

      features: {},

      settings: {}

    };

  }


  /**
   * Get current configuration
   */
  getConfig(): Config {

    return this.config;

  }


  /**
   * Update configuration value
   */
  setSetting(
    key: string,
    value: unknown
  ): void {

    this.config.settings[key] = value;

  }


  /**
   * Enable or disable feature
   */
  setFeature(
    name: string,
    enabled: boolean
  ): void {

    this.config.features[name] = enabled;

  }


  /**
   * Check feature status
   */
  isFeatureEnabled(
    name: string
  ): boolean {

    return (
      this.config.features[name] ?? false
    );

  }

}