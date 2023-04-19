import { Database } from './schema'

export interface ITrackInject {
  isTrackPlaying: boolean
  tracksLength: number
  curTime: string
  duration: string
  music: Database
  playPause: () => void
  previous: () => void
  next: () => void
  backward: () => void
  forward: () => void
}
