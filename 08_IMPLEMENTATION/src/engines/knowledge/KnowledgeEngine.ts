/**
 * ARC Knowledge Engine
 *
 * Manages organisational knowledge,
 * documents and knowledge relationships.
 */

export interface KnowledgeItem {

  id: string;

  title: string;

  content: string;

  source?: string;

  confidence: number;

  createdAt: Date;

}


export class KnowledgeEngine {


  private knowledge: KnowledgeItem[] = [];


  /**
   * Create knowledge item
   */
  createKnowledge(
    title: string,
    content: string,
    source?: string
  ): KnowledgeItem {


    const item: KnowledgeItem = {

      id: crypto.randomUUID(),

      title,

      content,

      source,

      confidence: 0,

      createdAt: new Date()

    };


    this.knowledge.push(item);


    return item;

  }


  /**
   * Retrieve knowledge
   */
  getKnowledge(
    id: string
  ): KnowledgeItem | undefined {


    return this.knowledge.find(
      item => item.id === id
    );

  }


  /**
   * Validate knowledge confidence
   */
  updateConfidence(
    id: string,
    confidence: number
  ): KnowledgeItem | undefined {


    const item =
      this.getKnowledge(id);


    if (!item) {
      return undefined;
    }


    item.confidence = confidence;


    return item;

  }


  /**
   * Return all knowledge
   */
  getAll(): KnowledgeItem[] {

    return this.knowledge;

  }

}