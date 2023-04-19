export const useSelected = () => {
  return useState<number | null>('selected', () => null)
}
