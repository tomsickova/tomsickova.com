const czechPlural = new Intl.PluralRules('cs')
const czechForms: Partial<Record<Intl.LDMLPluralRule, number>> = { one: 0, few: 1 }

export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: 'cs',
  pluralRules: {
    cs: (choice: number) => czechForms[czechPlural.select(choice)] ?? 2,
  },
}))
