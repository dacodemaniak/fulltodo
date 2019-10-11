export const requiredFields: Map<string, any> = new Map<string, any>();

export function Required(target: Object, propertyName: string) {
  requiredFields.set(propertyName, {});
}
