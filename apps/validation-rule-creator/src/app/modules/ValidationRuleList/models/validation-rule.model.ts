import {
  BaseObject,
  IBaseObject,
} from '../../../shared/models/base-object.model';

export class ValidationRule
  extends BaseObject<ValidationRule>
  implements IBaseObject {
  id: string;
  name: string;
  description: string;
  instruction: string;
  importance: 'MEDIUM';
  constructor(validationRule: Partial<ValidationRule>) {
    super(validationRule);
    this.id = validationRule.id;
    this.name = this.getName();
    this.description = validationRule.description;
    this.instruction = validationRule.instruction;
    this.importance = validationRule.importance;
  }

  getName(): string {
    return (this['name'] as string) || (this['displayName'] as string);
  }
}
