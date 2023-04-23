import { defineStore } from 'pinia'
import { Database } from '~/types/schema'

export const useFetchStore = defineStore('fetch', () => {
  const client = useSupabaseClient<Database>()

  const fetchMusics = async (title: string) => {
    const { data: musics } = await client
      .from('musics')
      .select('*, albums!inner(image, name)')
      .eq('albums.name', title)
      .order('id')
    return musics
  }

  const fetchLicenses = async () => {
    const { data: license } = await client
      .from('license')
      .select(`*`)
      .order('id')
    return license
  }

  const fetchAlbum = async (title: string) => {
    const { data: album } = await client
      .from('albums')
      .select('*, musics(*), license(name), consoles(name, fullName)')
      .eq('name', title)
      .order('id', { foreignTable: 'musics' })
      .limit(1)
      .single()
    return album
  }

  const fetchAlbums = async () => {
    const { data: albums } = await client.from('albums').select(`*`).order('id')
    return albums
  }

  const fetchAlbumsFull = async () => {
    const { data: albums } = await client
      .from('albums')
      .select(`*, musics (id), license(*), consoles(*)`)
      .order('id')
    return albums
  }

  const fetchAlbumsWithLimit = async () => {
    const { data: albums } = await client
      .from('albums')
      .select(`*`)
      .order('id', { ascending: false })
      .limit(3)
    return albums
  }

  return {
    fetchMusics,
    fetchLicenses,
    fetchAlbum,
    fetchAlbums,
    fetchAlbumsFull,
    fetchAlbumsWithLimit,
  }
})
