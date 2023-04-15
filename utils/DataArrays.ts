export interface IConsole {
  label: string
  value: string
  longName: string
}

export const console: IConsole[] = [
  {
    label: 'NES',
    value: 'nes',
    longName: 'Nintendo Entertainment System',
  },
  {
    label: 'Gameboy',
    value: 'gameboy',
    longName: 'Gameboy',
  },
]
