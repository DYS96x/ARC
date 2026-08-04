/**
 * ARC Diagnostics Service
 *
 * Provides a unified view
 * of ARC platform condition.
 */


import {
  HealthService
} from "./HealthService";


import {
  ConfigService
} from "./ConfigService";


export interface DiagnosticsReport {

  status: string;

  environment: string;

  timestamp: Date;

}


export class DiagnosticsService {


  private health: HealthService;

  private config: ConfigService;


  constructor(
    health: HealthService,
    config: ConfigService
  ) {

    this.health = health;

    this.config = config;

  }


  /**
   * Generate system report
   */
  generateReport(): DiagnosticsReport {


    const health =
      this.health.checkHealth([
        "CORE",
        "IDENTITY",
        "SECURITY",
        "KNOWLEDGE",
        "WORKFLOW",
        "INTELLIGENCE",
        "ANALYTICS"
      ]);


    const config =
      this.config.getConfig();


    return {

      status: health.status,

      environment:
        config.environment,

      timestamp:
        new Date()

    };

  }


}