/**
 * ARC Analytics Engine
 *
 * Measures system activity,
 * outcomes and operational health.
 */


export interface Metric {

  id: string;

  name: string;

  value: number;

  source: string;

  createdAt: Date;

}


export class AnalyticsEngine {


  private metrics: Metric[] = [];


  /**
   * Record a metric
   */
  recordMetric(
    name: string,
    value: number,
    source: string
  ): Metric {


    const metric: Metric = {

      id: crypto.randomUUID(),

      name,

      value,

      source,

      createdAt: new Date()

    };


    this.metrics.push(metric);


    return metric;

  }


  /**
   * Retrieve metric
   */
  getMetric(
    id: string
  ): Metric | undefined {


    return this.metrics.find(
      metric => metric.id === id
    );

  }


  /**
   * Get all metrics
   */
  getAll(): Metric[] {

    return this.metrics;

  }


  /**
   * Calculate average metric value
   */
  average(
    name: string
  ): number {


    const values =
      this.metrics
        .filter(
          metric => metric.name === name
        )
        .map(
          metric => metric.value
        );


    if (values.length === 0) {
      return 0;
    }


    return (
      values.reduce(
        (a, b) => a + b,
        0
      )
      /
      values.length
    );

  }

}