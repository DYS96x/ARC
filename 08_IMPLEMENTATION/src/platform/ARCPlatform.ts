/**
 * ARC Platform Runtime
 *
 * Connects ARC Core
 * with all domain engines.
 */


import {
  ARC
} from "../core";


import {
  IdentityEngine,
  SecurityEngine,
  KnowledgeEngine,
  WorkflowEngine,
  IntelligenceEngine,
  AnalyticsEngine
} from "../engines";


import {
  HealthService
} from "./HealthService";


import {
  ConfigService
} from "./ConfigService";


import {
  EventIntegrationService
} from "./EventIntegrationService";


import {
  PlatformIdentityService
} from "./PlatformIdentityService";


import {
  SystemRegistry
} from "./SystemRegistry";


import {
  LifecycleService
} from "./LifecycleService";


import {
  DiagnosticsService
} from "./DiagnosticsService";


export class ARCPlatform {


  public core: ARC;


  public identity: IdentityEngine;

  public security: SecurityEngine;

  public knowledge: KnowledgeEngine;

  public workflow: WorkflowEngine;

  public intelligence: IntelligenceEngine;

  public analytics: AnalyticsEngine;


  public health: HealthService;

  public config: ConfigService;

  public events: EventIntegrationService;


  public platformIdentity: PlatformIdentityService;

  public registry: SystemRegistry;

  public lifecycle: LifecycleService;

  public diagnostics: DiagnosticsService;


  constructor() {


    this.core =
      new ARC();


    this.identity =
      new IdentityEngine();


    this.security =
      new SecurityEngine();


    this.knowledge =
      new KnowledgeEngine();


    this.workflow =
      new WorkflowEngine();


    this.intelligence =
      new IntelligenceEngine();


    this.analytics =
      new AnalyticsEngine();


    this.health =
      new HealthService();


    this.config =
      new ConfigService();


    this.platformIdentity =
      new PlatformIdentityService();


    this.registry =
      new SystemRegistry();


    const systemIdentity =
      this.platformIdentity.initialise();


    this.registry.registerSystem(
      systemIdentity
    );


    this.events =
      new EventIntegrationService(
        this.core.events,
        this.analytics
      );


    this.events.registerEventTracking();


    this.lifecycle =
      new LifecycleService(
        this.core.events
      );


    this.lifecycle.started();


    this.diagnostics =
      new DiagnosticsService(
        this.health,
        this.config
      );

  }


}