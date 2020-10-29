export function getColorCssVariables(colorsObject) {
  return Object.entries(colorsObject).map(([level, levelValue]) =>
    Object.entries(levelValue).map(([key, value]) => {
      return `--color-${level}-${key}: ${value};`
    }),
  )
}
