export type TTrack = {
  audioText: string
  tracksLength: number
  music: TMusic
}

export type TMusic = {
  id: number
  title: string
  game: string
  console: string
  img: string
  link: string
}
