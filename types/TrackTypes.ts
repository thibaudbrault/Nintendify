export interface ITrack {
  audioText: string
  tracksLength: number
  music: IMusic
}

export interface IMusic extends ILicense {
  id: number
  created_at: string
  title: string
  link: string
  album_id: number
}

export interface ILicense {
  id: number
  created_at: string
  name: string
}

export interface IAlbum extends ILicense {
  console: string
  img: string
  license_id: string
}
