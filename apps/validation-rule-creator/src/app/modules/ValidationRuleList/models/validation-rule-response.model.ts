import { BaseListResponse } from '../../../shared';
import { ValidationRule } from './validation-rule.model';

export class ValidationRuleResponse extends BaseListResponse {
  getList(list: Record<string, unknown>[]): ValidationRule[] {
    return (list || []).map(
      (item: Record<string, unknown>) => new ValidationRule(item)
    );
  }
}
